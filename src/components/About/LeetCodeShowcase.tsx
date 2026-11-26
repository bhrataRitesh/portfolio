"use client";

import { useState } from "react";
import type { LeetCodeLiveProfile } from "@/types/leetcode";
import { usePortfolio } from "@/context/PortfolioContext";

function formatLanguageName(lang: string): string {
  const map: Record<string, string> = {
    cpp: "C++",
    mysql: "MySQL",
    java: "Java",
    python3: "Python 3",
    python: "Python",
    javascript: "JavaScript",
    typescript: "TypeScript",
  };
  return map[lang.toLowerCase()] || lang;
}

function formatRelativeTime(unixSecondsStr: string): string {
  const ts = parseInt(unixSecondsStr, 10);
  if (isNaN(ts)) return "";
  const diffSeconds = Math.max(0, Math.floor(Date.now() / 1000) - ts);

  if (diffSeconds < 60) return "Just now";
  const mins = Math.floor(diffSeconds / 60);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

interface LeetCodeShowcaseProps {
  profile: LeetCodeLiveProfile;
  isLoading: boolean;
}

export default function LeetCodeShowcase({
  profile,
  isLoading,
}: LeetCodeShowcaseProps) {
  const [showRawJson, setShowRawJson] = useState(false);
  const { markExplored } = usePortfolio();
  const safeTotal = profile.totalSolved > 0 ? profile.totalSolved : 1;

  const toggleJson = () => {
    const next = !showRawJson;
    setShowRawJson(next);
    if (next) {
      markExplored("live-leetcode");
    }
  };

  return (
    <div className="about-leetcode card">
      {/* Header */}
      <div className="about-leetcode-header">
        <div className="about-leetcode-title-group">
          <div className="about-leetcode-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .349 1.017 5.928 5.928 0 0 0 2.433 2.871l2.365 1.482A5.993 5.993 0 0 0 10.15 21.4c1.398 0 2.743-.487 3.812-1.378l2.091-1.743c.47-.392.536-1.095.145-1.565-.392-.47-1.095-.536-1.565-.145l-2.09 1.743a3.993 3.993 0 0 1-2.542.918c-.934 0-1.831-.326-2.545-.918l-2.365-1.482a3.928 3.928 0 0 1-1.611-1.902 3.527 3.527 0 0 1-.041-1.574 3.266 3.266 0 0 1 .752-1.309l3.854-4.126 5.406-5.788c.414-.444.387-1.144-.06-1.558A1.374 1.374 0 0 0 13.483 0zm-2.88 7.218a1.002 1.002 0 0 0-.709.293L4.99 12.615a1 1 0 0 0 1.414 1.414l4.904-5.104a1 1 0 0 0-.705-1.707zm4.99 3.782h-6a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
            </svg>
          </div>
          <div>
            <div className="about-leetcode-title">
              LeetCode Problem Solving
              <span
                className={`about-leetcode-badge ${
                  profile.isLive ? "live" : ""
                }`}
              >
                {profile.isLive && (
                  <span className="lc-live-dot" aria-hidden="true" />
                )}
                {isLoading
                  ? "Syncing..."
                  : profile.isLive
                  ? "Live Sync"
                  : "Active Solver"}
              </span>
            </div>
            <div className="about-leetcode-username">
              @{profile.username} • Data Structures &amp; Algorithms
              {profile.ranking > 0 && (
                <span className="lc-rank-inline">
                  {" "}
                  • Rank #{profile.ranking.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="lc-header-actions">
          <button
            type="button"
            onClick={toggleJson}
            className={`lc-json-toggle ${showRawJson ? "active" : ""}`}
            title="Inspect raw /api/leetcode JSON response"
          >
            {showRawJson ? "Hide API JSON" : "{ } Inspect API"}
          </button>
          <a
            href={profile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="about-leetcode-btn"
          >
            <span>View LeetCode Profile</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17l9.2-9.2M17 17V8H8" />
            </svg>
          </a>
        </div>
      </div>

      {showRawJson && (
        <div className="lc-json-drawer">
          <div className="lc-json-bar">
            <span>GET /api/leetcode (live GraphQL proxy • 30s revalidate)</span>
            <span>{profile.isLive ? "200 OK (Live)" : "200 OK (Fallback)"}</span>
          </div>
          <pre className="lc-json-code">
            <code>
              {JSON.stringify(
                {
                  username: profile.username,
                  totalSolved: profile.totalSolved,
                  acceptanceRate: profile.acceptanceRate,
                  ranking: profile.ranking,
                  difficulty: {
                    easy: profile.easy.solved,
                    medium: profile.medium.solved,
                    hard: profile.hard.solved,
                  },
                  languages: profile.languages,
                  lastUpdated: profile.lastUpdated,
                },
                null,
                2
              )}
            </code>
          </pre>
        </div>
      )}

      {/* Main Stats & Difficulty Breakdown */}
      <div className="about-leetcode-body">
        <div className="about-leetcode-total">
          <span className="about-leetcode-total-num">{profile.totalSolved}</span>
          <span className="about-leetcode-total-sub">
            / {profile.totalPlatformQuestions.toLocaleString()} Solved
          </span>
          <span className="about-leetcode-total-label">
            {profile.acceptanceRate}% Acceptance
          </span>
        </div>

        <div className="about-leetcode-stats-wrap">
          <div className="about-leetcode-cards">
            <div className="about-lc-diff-card easy">
              <div className="about-lc-diff-head">
                <span>Easy</span>
                <span style={{ color: "#10b981" }}>
                  {profile.easy.percentage}%
                </span>
              </div>
              <div className="about-lc-diff-count">
                {profile.easy.solved}
                <span className="about-lc-diff-total">
                  {" "}
                  / {profile.easy.total}
                </span>
              </div>
            </div>

            <div className="about-lc-diff-card medium">
              <div className="about-lc-diff-head">
                <span>Medium</span>
                <span style={{ color: "#f59e0b" }}>
                  {profile.medium.percentage}%
                </span>
              </div>
              <div className="about-lc-diff-count">
                {profile.medium.solved}
                <span className="about-lc-diff-total">
                  {" "}
                  / {profile.medium.total}
                </span>
              </div>
            </div>

            <div className="about-lc-diff-card hard">
              <div className="about-lc-diff-head">
                <span>Hard</span>
                <span style={{ color: "#ef4444" }}>
                  {profile.hard.percentage}%
                </span>
              </div>
              <div className="about-lc-diff-count">
                {profile.hard.solved}
                <span className="about-lc-diff-total">
                  {" "}
                  / {profile.hard.total}
                </span>
              </div>
            </div>
          </div>

          <div
            className="about-lc-progress-bar"
            title={`Easy: ${profile.easy.solved}, Medium: ${profile.medium.solved}, Hard: ${profile.hard.solved}`}
          >
            <div
              className="about-lc-progress-easy"
              style={{ width: `${(profile.easy.solved / safeTotal) * 100}%` }}
            />
            <div
              className="about-lc-progress-medium"
              style={{
                width: `${(profile.medium.solved / safeTotal) * 100}%`,
              }}
            />
            <div
              className="about-lc-progress-hard"
              style={{ width: `${(profile.hard.solved / safeTotal) * 100}%` }}
            />
          </div>

          {/* Languages Row */}
          <div className="about-leetcode-footer">
            <div className="lc-languages-row">
              <span className="lc-footer-label">Languages:</span>
              {profile.languages.map((lang) => (
                <span key={lang.language} className="about-lc-lang-tag">
                  {lang.language} ({lang.solved})
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown: Topic Tags + Recent Accepted Submissions */}
      <div className="lc-details-grid">
        {/* Algorithmic Topic Breakdown */}
        <div className="lc-detail-panel">
          <div className="lc-panel-header">
            <h4 className="lc-panel-title">Top Algorithmic Topics</h4>
            <span className="lc-panel-meta">Problems by Tag</span>
          </div>
          <div className="lc-topics-wrap">
            {profile.topTopics.map((topic) => (
              <span key={topic.slug} className="lc-topic-badge">
                <span className="lc-topic-name">{topic.name}</span>
                <span className="lc-topic-count">{topic.solved}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Recent Accepted Submissions */}
        <div className="lc-detail-panel">
          <div className="lc-panel-header">
            <h4 className="lc-panel-title">Recent Accepted Solutions</h4>
            <span className="lc-panel-meta">Latest Activity</span>
          </div>

          {profile.recentSubmissions.length > 0 ? (
            <div className="lc-recent-list">
              {profile.recentSubmissions.map((sub) => (
                <a
                  key={`${sub.titleSlug}-${sub.timestamp}`}
                  href={`https://leetcode.com/problems/${sub.titleSlug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-recent-item"
                >
                  <div className="lc-recent-left">
                    <span className="lc-recent-check" aria-hidden="true">
                      ✓
                    </span>
                    <span className="lc-recent-title">{sub.title}</span>
                  </div>
                  <div className="lc-recent-right">
                    <span className="lc-recent-lang">
                      {formatLanguageName(sub.lang)}
                    </span>
                    <span className="lc-recent-time">
                      {formatRelativeTime(sub.timestamp)}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="lc-recent-empty">
              {isLoading
                ? "Fetching latest accepted submissions from LeetCode..."
                : "Visit profile on LeetCode to inspect full submission history."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
