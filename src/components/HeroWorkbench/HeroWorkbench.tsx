"use client";

import { useState, useEffect, useRef } from "react";
import {
  interactiveIntroPrompts,
  personalInfo,
  contactInfo,
  socialLinks,
  recruiterQuickPitchText,
} from "@/data/portfolioData";
import { usePortfolio, EXPLORABLE_MILESTONES } from "@/context/PortfolioContext";
import { useLeetCode } from "@/hooks/useLeetCode";
import "./hero-workbench.css";

export default function HeroWorkbench() {
  const {
    heroWorkbenchTab,
    setHeroWorkbenchTab,
    askAssistant,
    openCommandPalette,
    exploredNodes,
    markExplored,
  } = usePortfolio();

  const { profile: leetcode } = useLeetCode();

  // Tab 1: Fun Interactive Intro
  const [selectedPromptId, setSelectedPromptId] = useState<string>(
    interactiveIntroPrompts[0].id
  );
  const [audienceMode, setAudienceMode] = useState<"simple" | "engineer">(
    "simple"
  );

  // Tab 2: Live RabbitMQ vs Sequential Queue Simulator
  const [simStrategy, setSimStrategy] = useState<"sequential" | "rabbitmq">(
    "rabbitmq"
  );
  const [simRunning, setSimRunning] = useState(false);
  const [simProgress, setSimProgress] = useState(100);
  const [simProductsDone, setSimProductsDone] = useState(500);
  const [simErrors, setSimErrors] = useState(0);
  const [simElapsedLabel, setSimElapsedLabel] = useState("29.4s");
  const simTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Tab 3: JSON API copy feedback
  const [copiedType, setCopiedType] = useState<"json" | "pitch" | null>(null);

  const activePrompt =
    interactiveIntroPrompts.find((p) => p.id === selectedPromptId) ||
    interactiveIntroPrompts[0];

  const handleSelectTab = (tab: "intro" | "simulator" | "api") => {
    setHeroWorkbenchTab(tab);
    if (tab === "intro") markExplored("hero-intro");
    if (tab === "simulator") markExplored("rabbitmq-sim");
  };

  // Simulator runner
  const startSimulation = (overrideStrategy?: "sequential" | "rabbitmq") => {
    const strategy = overrideStrategy || simStrategy;
    if (overrideStrategy) setSimStrategy(overrideStrategy);
    markExplored("rabbitmq-sim");

    if (simTimerRef.current) clearInterval(simTimerRef.current);

    setSimRunning(true);
    setSimProgress(0);
    setSimProductsDone(0);
    setSimErrors(0);
    setSimElapsedLabel(strategy === "rabbitmq" ? "0.0s" : "0.0s");

    let step = 0;
    const totalSteps = strategy === "rabbitmq" ? 20 : 28;

    simTimerRef.current = setInterval(() => {
      step += 1;
      const ratio = Math.min(step / totalSteps, 1);
      setSimProgress(Math.round(ratio * 100));

      if (strategy === "rabbitmq") {
        // Completes 500 items cleanly across 3 staged queues (~29.4s real world scaled)
        const count = Math.round(ratio * 500);
        setSimProductsDone(count);
        setSimErrors(0);
        setSimElapsedLabel(`${(ratio * 29.4).toFixed(1)}s`);
      } else {
        // Sequential stalls with 429 throttle spikes and high latency (~278s)
        const throttledRatio = ratio < 0.7 ? ratio * 0.85 : ratio;
        setSimProductsDone(Math.round(throttledRatio * 500));
        setSimErrors(Math.min(18, Math.floor(step * 0.7)));
        setSimElapsedLabel(`${(ratio * 278.0).toFixed(1)}s`);
      }

      if (step >= totalSteps) {
        if (simTimerRef.current) clearInterval(simTimerRef.current);
        setSimRunning(false);
        setSimProductsDone(strategy === "rabbitmq" ? 500 : 412);
        setSimErrors(strategy === "rabbitmq" ? 0 : 18);
        setSimElapsedLabel(
          strategy === "rabbitmq" ? "29.4s (Completed)" : "4m 38s (Timed Out)"
        );
      }
    }, 90);
  };

  useEffect(() => {
    return () => {
      if (simTimerRef.current) clearInterval(simTimerRef.current);
    };
  }, []);

  const handleJump = (target?: string) => {
    if (!target) return;
    const id = target.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const apiPayload = {
    name: personalInfo.name,
    role: personalInfo.title,
    experience: "1.5+ years (Webkul Software)",
    status: personalInfo.availableStatus,
    location: contactInfo.location,
    headlineWin: "Amazon 500-SKU sync latency reduced 4-5m -> ~30s (~90%)",
    liveLeetCode: {
      username: leetcode.username,
      solved: leetcode.totalSolved,
      isLiveSynced: leetcode.isLive,
    },
    coreStack: ["Node.js", "TypeScript", "RabbitMQ", "PostgreSQL", "Redis", "Next.js", "AWS EC2"],
    contact: {
      email: contactInfo.email,
      phone: contactInfo.phone,
      github: socialLinks.github,
    },
  };

  const handleCopy = async (kind: "json" | "pitch") => {
    const content =
      kind === "json"
        ? JSON.stringify(apiPayload, null, 2)
        : recruiterQuickPitchText;
    try {
      await navigator.clipboard.writeText(content);
      setCopiedType(kind);
      setTimeout(() => setCopiedType(null), 2000);
    } catch {
      // Clipboard fallback ignored cleanly
    }
  };

  return (
    <div className="workbench-shell">
      {/* Top Bar */}
      <div className="workbench-header">
        <div className="workbench-dots" aria-hidden="true">
          <span className="wb-dot red" />
          <span className="wb-dot yellow" />
          <span className="wb-dot green" />
        </div>

        <div className="workbench-tabs" role="tablist" aria-label="Interactive Portfolio Modes">
          <button
            type="button"
            role="tab"
            aria-selected={heroWorkbenchTab === "intro"}
            className={`wb-tab-btn ${heroWorkbenchTab === "intro" ? "active" : ""}`}
            onClick={() => handleSelectTab("intro")}
          >
            hello.ritesh
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={heroWorkbenchTab === "simulator"}
            className={`wb-tab-btn ${heroWorkbenchTab === "simulator" ? "active" : ""}`}
            onClick={() => handleSelectTab("simulator")}
          >
            rabbitmq.sim
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={heroWorkbenchTab === "api"}
            className={`wb-tab-btn ${heroWorkbenchTab === "api" ? "active" : ""}`}
            onClick={() => handleSelectTab("api")}
          >
            profile.json
          </button>
        </div>
      </div>

      {/* Body Content */}
      <div className="workbench-body">
        {/* TAB 1: FUN INTERACTIVE INTRO */}
        {heroWorkbenchTab === "intro" && (
          <div className="wb-panel" role="tabpanel">
            <div className="wb-intro-top">
              <span className="wb-intro-hint">Pick a question you&apos;re curious about:</span>
              <div className="wb-audience-toggle" aria-label="Explanation depth">
                <button
                  type="button"
                  className={`wb-mode-btn ${audienceMode === "simple" ? "active" : ""}`}
                  onClick={() => setAudienceMode("simple")}
                >
                  Friendly
                </button>
                <button
                  type="button"
                  className={`wb-mode-btn ${audienceMode === "engineer" ? "active" : ""}`}
                  onClick={() => setAudienceMode("engineer")}
                >
                  Systems Spec
                </button>
              </div>
            </div>

            <div className="wb-prompt-grid">
              {interactiveIntroPrompts.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`wb-prompt-chip ${selectedPromptId === item.id ? "active" : ""}`}
                  onClick={() => {
                    setSelectedPromptId(item.id);
                    markExplored("hero-intro");
                  }}
                >
                  {item.question}
                </button>
              ))}
            </div>

            <div className="wb-answer-box">
              <div className="wb-answer-header">
                <span className="wb-answer-tag">
                  {audienceMode === "simple" ? "Human Intro" : "Technical Depth"}
                </span>
                <span className="wb-answer-prompt">{activePrompt.question}</span>
              </div>
              <p className="wb-answer-text">
                {audienceMode === "simple"
                  ? activePrompt.simpleAnswer
                  : activePrompt.engineerAnswer}
              </p>
              <div className="wb-answer-actions">
                {activePrompt.jumpTarget && (
                  <button
                    type="button"
                    className="wb-action-link"
                    onClick={() => handleJump(activePrompt.jumpTarget)}
                  >
                    {activePrompt.jumpLabel} →
                  </button>
                )}
                <button
                  type="button"
                  className="wb-action-secondary"
                  onClick={() => askAssistant(activePrompt.question)}
                >
                  Ask Assistant More
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LIVE RABBITMQ PIPELINE SIMULATOR */}
        {heroWorkbenchTab === "simulator" && (
          <div className="wb-panel" role="tabpanel">
            <div className="wb-sim-head">
              <div>
                <div className="wb-sim-title">
                  Amazon 500-Product Catalog Sync Benchmark
                </div>
                <div className="wb-sim-sub">
                  Test how Ritesh&apos;s Webkul architecture cut sync latency by ~90%
                </div>
              </div>
            </div>

            <div className="wb-sim-controls">
              <button
                type="button"
                className={`wb-strat-btn ${simStrategy === "sequential" ? "active warn" : ""}`}
                onClick={() => startSimulation("sequential")}
              >
                Before: 1-by-1 REST
              </button>
              <button
                type="button"
                className={`wb-strat-btn ${simStrategy === "rabbitmq" ? "active ok" : ""}`}
                onClick={() => startSimulation("rabbitmq")}
              >
                After: 3-Queue RabbitMQ
              </button>
              <button
                type="button"
                className="wb-run-btn"
                onClick={() => startSimulation()}
              >
                {simRunning ? "Running..." : "Re-Run Test"}
              </button>
            </div>

            {/* Simulated Progress Metrics */}
            <div className="wb-sim-metrics">
              <div className="wb-sim-stat">
                <span className="wb-sim-stat-label">Elapsed</span>
                <span
                  className={`wb-sim-stat-val ${
                    simStrategy === "rabbitmq" ? "text-ok" : "text-warn"
                  }`}
                >
                  {simElapsedLabel}
                </span>
              </div>
              <div className="wb-sim-stat">
                <span className="wb-sim-stat-label">SKUs Synced</span>
                <span className="wb-sim-stat-val">{simProductsDone} / 500</span>
              </div>
              <div className="wb-sim-stat">
                <span className="wb-sim-stat-label">429 Throttles</span>
                <span
                  className={`wb-sim-stat-val ${
                    simErrors === 0 ? "text-ok" : "text-err"
                  }`}
                >
                  {simErrors}
                </span>
              </div>
            </div>

            <div className="wb-progress-track">
              <div
                className={`wb-progress-fill ${
                  simStrategy === "rabbitmq" ? "ok" : "warn"
                }`}
                style={{ width: `${simProgress}%` }}
              />
            </div>

            {/* Pipeline Topology Lanes */}
            <div className="wb-lanes">
              {simStrategy === "rabbitmq" ? (
                <>
                  <div className="wb-lane">
                    <span className="wb-lane-badge ok">Q1: Extract</span>
                    <span className="wb-lane-desc">Batches 30 ASINs/req cleanly under SP-API limit</span>
                  </div>
                  <div className="wb-lane">
                    <span className="wb-lane-badge ok">Q2: Parent SKU</span>
                    <span className="wb-lane-desc">Commits base product row atomically first</span>
                  </div>
                  <div className="wb-lane">
                    <span className="wb-lane-badge ok">Q3: Variations</span>
                    <span className="wb-lane-desc">Async DB links — 0 connection pool exhaustion</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="wb-lane">
                    <span className="wb-lane-badge err">HTTP Wait</span>
                    <span className="wb-lane-desc">Blocks request thread on single-ASIN fetches</span>
                  </div>
                  <div className="wb-lane">
                    <span className="wb-lane-badge warn">DB Pool</span>
                    <span className="wb-lane-desc">Synchronous variation checks lock connections</span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: STRIPE-GRADE JSON API PAYLOAD */}
        {heroWorkbenchTab === "api" && (
          <div className="wb-panel" role="tabpanel">
            <div className="wb-api-actions">
              <span className="wb-api-endpoint">GET /api/ritesh/profile</span>
              <div className="wb-api-btns">
                <button
                  type="button"
                  className="wb-copy-btn"
                  onClick={() => handleCopy("pitch")}
                >
                  {copiedType === "pitch" ? "✓ Copied Brief" : "Copy 30s Pitch"}
                </button>
                <button
                  type="button"
                  className="wb-copy-btn"
                  onClick={() => handleCopy("json")}
                >
                  {copiedType === "json" ? "✓ Copied JSON" : "Copy JSON"}
                </button>
              </div>
            </div>
            <pre className="wb-json-pre">
              <code>{JSON.stringify(apiPayload, null, 2)}</code>
            </pre>
          </div>
        )}
      </div>

      {/* Subtle Bottom Bar (Discovery Progress + Quick Cmd+K trigger) */}
      <div className="workbench-footer">
        <span className="wb-progress-note">
          Explored {exploredNodes.length}/{EXPLORABLE_MILESTONES.length} interactive highlights
        </span>
        <button
          type="button"
          className="wb-cmd-hint"
          onClick={openCommandPalette}
          title="Open Quick Command Palette"
        >
          <span>Quick Jump</span>
          <kbd className="wb-kbd">⌘K</kbd>
        </button>
      </div>
    </div>
  );
}
