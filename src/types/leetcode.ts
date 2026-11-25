export interface LeetCodeDifficultyStats {
  solved: number;
  total: number;
  percentage: number;
  submissions: number;
}

export interface LeetCodeTopicTag {
  name: string;
  slug: string;
  solved: number;
}

export interface LeetCodeLanguageStat {
  language: string;
  solved: number;
}

export interface LeetCodeRecentSubmission {
  title: string;
  titleSlug: string;
  timestamp: string;
  status: string;
  lang: string;
}

export interface LeetCodeLiveProfile {
  username: string;
  profileUrl: string;
  avatarUrl: string;
  ranking: number;
  totalSolved: number;
  totalPlatformQuestions: number;
  acceptanceRate: number;
  easy: LeetCodeDifficultyStats;
  medium: LeetCodeDifficultyStats;
  hard: LeetCodeDifficultyStats;
  languages: LeetCodeLanguageStat[];
  topTopics: LeetCodeTopicTag[];
  recentSubmissions: LeetCodeRecentSubmission[];
  isLive: boolean;
  lastUpdated: string;
}
