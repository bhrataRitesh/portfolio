"use client";

import { useState, useEffect } from "react";
import { leetcodeData } from "@/data/portfolioData";
import type { LeetCodeLiveProfile } from "@/types/leetcode";

const INITIAL_BASELINE: LeetCodeLiveProfile = {
  username: leetcodeData.username,
  profileUrl: leetcodeData.profileUrl,
  avatarUrl: "",
  ranking: 1453408,
  totalSolved: leetcodeData.totalSolved,
  totalPlatformQuestions: 4124,
  acceptanceRate: 64.1,
  easy: {
    solved: leetcodeData.easy,
    total: 978,
    percentage: Math.round((leetcodeData.easy / leetcodeData.totalSolved) * 100),
    submissions: 78,
  },
  medium: {
    solved: leetcodeData.medium,
    total: 2152,
    percentage: Math.round((leetcodeData.medium / leetcodeData.totalSolved) * 100),
    submissions: 97,
  },
  hard: {
    solved: leetcodeData.hard,
    total: 994,
    percentage: Math.round((leetcodeData.hard / leetcodeData.totalSolved) * 100),
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
  lastUpdated: "",
};

export function useLeetCode() {
  const [profile, setProfile] = useState<LeetCodeLiveProfile>(INITIAL_BASELINE);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchLiveLeetCode() {
      try {
        const res = await fetch("/api/leetcode", {
          cache: "no-store",
        });
        if (!res.ok) return;
        const data: LeetCodeLiveProfile = await res.json();
        if (isMounted && data && data.totalSolved > 0) {
          setProfile(data);
        }
      } catch (err) {
        console.warn("Failed to hydrate live LeetCode stats:", err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchLiveLeetCode();

    return () => {
      isMounted = false;
    };
  }, []);

  return { profile, isLoading };
}
