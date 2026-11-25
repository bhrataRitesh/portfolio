import { NextResponse } from "next/server";
import { leetcodeData } from "@/data/portfolioData";
import type {
  LeetCodeLiveProfile,
  LeetCodeTopicTag,
  LeetCodeRecentSubmission,
} from "@/types/leetcode";

export const revalidate = 30;

const LEETCODE_GRAPHQL_URL = "https://leetcode.com/graphql";

const PROFILE_AND_RECENT_QUERY = `
  query getLeetCodeProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      username
      profile {
        ranking
        userAvatar
      }
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      languageProblemCount {
        languageName
        problemsSolved
      }
      tagProblemCounts {
        advanced {
          tagName
          tagSlug
          problemsSolved
        }
        intermediate {
          tagName
          tagSlug
          problemsSolved
        }
        fundamental {
          tagName
          tagSlug
          problemsSolved
        }
      }
    }
    recentSubmissionList(username: $username, limit: 15) {
      title
      titleSlug
      timestamp
      statusDisplay
      lang
    }
  }
`;

function buildFallbackProfile(): LeetCodeLiveProfile {
  const totalSolved = leetcodeData.totalSolved;
  return {
    username: leetcodeData.username,
    profileUrl: leetcodeData.profileUrl,
    avatarUrl: "",
    ranking: 1453408,
    totalSolved,
    totalPlatformQuestions: 4124,
    acceptanceRate: 64.1,
    easy: {
      solved: leetcodeData.easy,
      total: 978,
      percentage: Math.round((leetcodeData.easy / totalSolved) * 100),
      submissions: 78,
    },
    medium: {
      solved: leetcodeData.medium,
      total: 2152,
      percentage: Math.round((leetcodeData.medium / totalSolved) * 100),
      submissions: 97,
    },
    hard: {
      solved: leetcodeData.hard,
      total: 994,
      percentage: Math.round((leetcodeData.hard / totalSolved) * 100),
      submissions: 17,
    },
    languages: [
      { language: leetcodeData.primaryLanguage, solved: leetcodeData.primarySolved },
      { language: "MySQL", solved: 11 },
    ],
    topTopics: [
      { name: "Array", slug: "array", solved: 52 },
      { name: "String", slug: "string", solved: 31 },
      { name: "Two Pointers", slug: "two-pointers", solved: 26 },
      { name: "Hash Table", slug: "hash-table", solved: 20 },
      { name: "Sorting", slug: "sorting", solved: 19 },
      { name: "Math", slug: "math", solved: 18 },
      { name: "Binary Search", slug: "binary-search", solved: 14 },
      { name: "Stack", slug: "stack", solved: 13 },
      { name: "Linked List", slug: "linked-list", solved: 12 },
      { name: "Dynamic Programming", slug: "dynamic-programming", solved: 11 },
      { name: "Database", slug: "database", solved: 11 },
      { name: "Tree", slug: "tree", solved: 9 },
    ],
    recentSubmissions: [],
    isLive: false,
    lastUpdated: new Date().toISOString(),
  };
}

interface RawDifficultyCount {
  difficulty: string;
  count: number;
  submissions?: number;
}

interface RawTagCount {
  tagName: string;
  tagSlug: string;
  problemsSolved: number;
}

interface RawLanguageCount {
  languageName: string;
  problemsSolved: number;
}

interface RawSubmission {
  title: string;
  titleSlug: string;
  timestamp: string;
  statusDisplay: string;
  lang: string;
}

export async function GET() {
  try {
    const response = await fetch(LEETCODE_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent": "Mozilla/5.0 (compatible; PortfolioLiveSync/1.0)",
      },
      body: JSON.stringify({
        query: PROFILE_AND_RECENT_QUERY,
        variables: { username: leetcodeData.username },
      }),
      next: { revalidate: 30 },
      signal: AbortSignal.timeout(6000),
    });

    if (!response.ok) {
      throw new Error(`LeetCode GraphQL responded with ${response.status}`);
    }

    const json = await response.json();
    const data = json?.data;

    if (!data?.matchedUser) {
      throw new Error("matchedUser missing in LeetCode response");
    }

    const allQuestions: RawDifficultyCount[] = data.allQuestionsCount || [];
    const acStats: RawDifficultyCount[] =
      data.matchedUser.submitStats?.acSubmissionNum || [];
    const totalStats: RawDifficultyCount[] =
      data.matchedUser.submitStats?.totalSubmissionNum || [];

    const getCount = (list: RawDifficultyCount[], diff: string) =>
      list.find((item) => item.difficulty === diff)?.count ?? 0;

    const getSubs = (list: RawDifficultyCount[], diff: string) =>
      list.find((item) => item.difficulty === diff)?.submissions ?? 0;

    const totalPlatformQuestions = getCount(allQuestions, "All") || 4124;
    const easyPlatformTotal = getCount(allQuestions, "Easy") || 978;
    const mediumPlatformTotal = getCount(allQuestions, "Medium") || 2152;
    const hardPlatformTotal = getCount(allQuestions, "Hard") || 994;

    const totalSolved = getCount(acStats, "All");
    const easySolved = getCount(acStats, "Easy");
    const mediumSolved = getCount(acStats, "Medium");
    const hardSolved = getCount(acStats, "Hard");

    const allAcSubmissions = getSubs(acStats, "All");
    const allTotalSubmissions = getSubs(totalStats, "All");
    const acceptanceRate =
      allTotalSubmissions > 0
        ? Number(((allAcSubmissions / allTotalSubmissions) * 100).toFixed(1))
        : 64.1;

    const safeTotal = totalSolved > 0 ? totalSolved : 1;

    const rawLanguages: RawLanguageCount[] =
      data.matchedUser.languageProblemCount || [];
    const languages = rawLanguages
      .filter((l) => l.problemsSolved > 0)
      .sort((a, b) => b.problemsSolved - a.problemsSolved)
      .map((l) => ({
        language: l.languageName,
        solved: l.problemsSolved,
      }));

    const tagGroups = data.matchedUser.tagProblemCounts || {};
    const combinedTags: RawTagCount[] = [
      ...(tagGroups.fundamental || []),
      ...(tagGroups.intermediate || []),
      ...(tagGroups.advanced || []),
    ];

    // Deduplicate tags by slug and sort descending by solved count
    const tagMap = new Map<string, LeetCodeTopicTag>();
    for (const tag of combinedTags) {
      if (tag.problemsSolved > 0 && !tagMap.has(tag.tagSlug)) {
        tagMap.set(tag.tagSlug, {
          name: tag.tagName,
          slug: tag.tagSlug,
          solved: tag.problemsSolved,
        });
      }
    }

    const topTopics = Array.from(tagMap.values())
      .sort((a, b) => b.solved - a.solved)
      .slice(0, 12);

    const rawSubmissions: RawSubmission[] = data.recentSubmissionList || [];
    // Filter to unique accepted problems (most recent first)
    const seenSlugs = new Set<string>();
    const recentSubmissions: LeetCodeRecentSubmission[] = [];
    for (const sub of rawSubmissions) {
      if (sub.statusDisplay === "Accepted" && !seenSlugs.has(sub.titleSlug)) {
        seenSlugs.add(sub.titleSlug);
        recentSubmissions.push({
          title: sub.title,
          titleSlug: sub.titleSlug,
          timestamp: sub.timestamp,
          status: sub.statusDisplay,
          lang: sub.lang,
        });
        if (recentSubmissions.length >= 4) break;
      }
    }

    const liveProfile: LeetCodeLiveProfile = {
      username: data.matchedUser.username || leetcodeData.username,
      profileUrl: leetcodeData.profileUrl,
      avatarUrl: data.matchedUser.profile?.userAvatar || "",
      ranking: data.matchedUser.profile?.ranking || 0,
      totalSolved,
      totalPlatformQuestions,
      acceptanceRate,
      easy: {
        solved: easySolved,
        total: easyPlatformTotal,
        percentage: Math.round((easySolved / safeTotal) * 100),
        submissions: getSubs(acStats, "Easy"),
      },
      medium: {
        solved: mediumSolved,
        total: mediumPlatformTotal,
        percentage: Math.round((mediumSolved / safeTotal) * 100),
        submissions: getSubs(acStats, "Medium"),
      },
      hard: {
        solved: hardSolved,
        total: hardPlatformTotal,
        percentage: Math.round((hardSolved / safeTotal) * 100),
        submissions: getSubs(acStats, "Hard"),
      },
      languages,
      topTopics,
      recentSubmissions,
      isLive: true,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(liveProfile, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    console.warn("LeetCode live fetch failed, returning fallback:", error);
    return NextResponse.json(buildFallbackProfile(), {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=15",
      },
    });
  }
}
