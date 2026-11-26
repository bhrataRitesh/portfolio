"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  contactInfo,
  socialLinks,
  recruiterQuickPitchText,
} from "@/data/portfolioData";
import { usePortfolio, EXPLORABLE_MILESTONES } from "@/context/PortfolioContext";
import { useWaveTheme } from "@/hooks/useWaveTheme";
import "./command-palette.css";

interface CommandItem {
  id: string;
  group: "Recruiter Actions" | "Jump to Section" | "Interactive Tools";
  label: string;
  detail: string;
  shortcut?: string;
  action: () => void;
}

export default function CommandPalette() {
  const {
    isCommandOpen,
    setIsCommandOpen,
    setHeroWorkbenchTab,
    setExplorerLens,
    askAssistant,
    prefillContact,
    exploredNodes,
    markExplored,
  } = usePortfolio();

  const { currentTheme, toggleThemeWithWave } = useWaveTheme();
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isCommandOpen) {
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [isCommandOpen]);

  const handleClose = () => {
    setIsCommandOpen(false);
    setQuery("");
    setSelectedIndex(0);
    setFeedback(null);
  };

  const navigateToSection = (sectionId: string) => {
    handleClose();
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const copyText = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setFeedback(`Copied ${label} to clipboard`);
      setTimeout(() => {
        setFeedback(null);
        handleClose();
      }, 950);
    } catch {
      setFeedback(`Could not access clipboard`);
    }
  };

  const commands: CommandItem[] = useMemo(
    () => [
      {
        id: "recruiter-pitch",
        group: "Recruiter Actions",
        label: "Copy 30-Second Candidate Summary",
        detail: "Plain-text CAR wins ready to paste into Slack, ATS, or email",
        shortcut: "Copy",
        action: () => copyText(recruiterQuickPitchText, "30-second pitch"),
      },
      {
        id: "download-resume",
        group: "Recruiter Actions",
        label: "Download Verified Resume (PDF)",
        detail: "1-page ATS resume formatted with CAR achievements",
        shortcut: "PDF",
        action: () => {
          window.open("/Ritesh_Yadav_Resume.pdf", "_blank", "noopener,noreferrer");
          handleClose();
        },
      },
      {
        id: "copy-email",
        group: "Recruiter Actions",
        label: `Copy Email (${contactInfo.email})`,
        detail: "Direct personal inbox",
        shortcut: "Copy",
        action: () => copyText(contactInfo.email, "email"),
      },
      {
        id: "copy-phone",
        group: "Recruiter Actions",
        label: `Copy Phone (${contactInfo.phone})`,
        detail: "Direct call / WhatsApp",
        shortcut: "Copy",
        action: () => copyText(contactInfo.phone, "phone number"),
      },
      {
        id: "fast-brief",
        group: "Recruiter Actions",
        label: "Switch to 60s Recruiter Brief Mode",
        detail: "Condensed snapshot at top of Hero",
        action: () => {
          setExplorerLens("recruiter");
          setHeroWorkbenchTab("api");
          navigateToSection("home");
        },
      },
      {
        id: "run-sim",
        group: "Interactive Tools",
        label: "Run RabbitMQ 500-Product Latency Simulator",
        detail: "Compare 1-by-1 REST (~4.5m) vs 3-Queue batching (~30s)",
        shortcut: "Sim",
        action: () => {
          setHeroWorkbenchTab("simulator");
          markExplored("rabbitmq-sim");
          navigateToSection("home");
        },
      },
      {
        id: "ask-ai",
        group: "Interactive Tools",
        label: "Ask Assistant: 30s Backend Pitch",
        detail: "Opens interactive assistant preloaded with architecture summary",
        action: () => {
          handleClose();
          askAssistant("30-second pitch for a Backend role");
        },
      },
      {
        id: "book-chat",
        group: "Interactive Tools",
        label: "Draft Intro Message (Hiring / Architecture Chat)",
        detail: "Jumps to Contact & pre-fills recruiter draft",
        action: () => {
          handleClose();
          prefillContact(
            "Exploring Backend / Full-Stack Opportunity",
            "Hi Ritesh — explored your portfolio v2 (especially the RabbitMQ 3-queue simulator and live LeetCode integration) and would love to set up a quick intro call."
          );
        },
      },
      {
        id: "toggle-theme",
        group: "Interactive Tools",
        label: `Switch Theme to ${currentTheme === "dark" ? "Light (Porcelain)" : "Dark (Slate Noir)"}`,
        detail: "Water-wave theme switch from switcher origin",
        action: () => {
          handleClose();
          toggleThemeWithWave();
        },
      },
      {
        id: "nav-about",
        group: "Jump to Section",
        label: "About & Live LeetCode Dashboard",
        detail: "Real-time GraphQL metrics, topics & accepted solutions",
        action: () => navigateToSection("about"),
      },
      {
        id: "nav-experience",
        group: "Jump to Section",
        label: "Work Experience & Trade-offs",
        detail: "Webkul Software CAR achievements + engineering notes",
        action: () => navigateToSection("experience"),
      },
      {
        id: "nav-projects",
        group: "Jump to Section",
        label: "Featured Projects (8 Case Studies)",
        detail: "Laravel Marketplace, CS-Cart Razorpay, EduYug, Shramik v2, ModCart, JobSearch, Acquisitions, Microservices",
        action: () => navigateToSection("projects"),
      },
      {
        id: "nav-skills",
        group: "Jump to Section",
        label: "Technical Skills Matrix",
        detail: "Node.js, TypeScript, RabbitMQ, PostgreSQL, Redis, AWS",
        action: () => navigateToSection("skills"),
      },
      {
        id: "open-github",
        group: "Jump to Section",
        label: "Open GitHub (@bhrataRitesh)",
        detail: "Repositories & source code",
        shortcut: "↗",
        action: () => {
          window.open(socialLinks.github, "_blank", "noopener,noreferrer");
          handleClose();
        },
      },
      {
        id: "open-linkedin",
        group: "Jump to Section",
        label: "Open LinkedIn Profile",
        detail: "Connect directly on LinkedIn",
        shortcut: "↗",
        action: () => {
          window.open(socialLinks.linkedin, "_blank", "noopener,noreferrer");
          handleClose();
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentTheme, pathname]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(q) ||
        cmd.detail.toLowerCase().includes(q) ||
        cmd.group.toLowerCase().includes(q)
    );
  }, [query, commands]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isCommandOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filtered.length > 0 ? (prev + 1) % filtered.length : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filtered.length > 0
            ? (prev - 1 + filtered.length) % filtered.length
            : 0
        );
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].action();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCommandOpen, filtered, selectedIndex]);

  if (!isCommandOpen) return null;

  return (
    <div
      className="cmd-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Quick Command Palette"
      onClick={handleClose}
    >
      <div className="cmd-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="cmd-input-row">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--text-tertiary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="cmd-input"
            placeholder="Jump to section, copy pitch, run RabbitMQ simulator, download PDF..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search commands"
          />
          <button
            type="button"
            className="cmd-esc-btn"
            onClick={handleClose}
            aria-label="Close palette"
          >
            Esc
          </button>
        </div>

        {feedback && <div className="cmd-feedback-bar">✓ {feedback}</div>}

        <div className="cmd-list" role="listbox">
          {filtered.length === 0 ? (
            <div className="cmd-empty">
              No matching commands for &ldquo;{query}&rdquo;. Try typing
              &ldquo;resume&rdquo;, &ldquo;rabbitmq&rdquo;, or &ldquo;email&rdquo;.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const showGroupHeader =
                idx === 0 || filtered[idx - 1].group !== item.group;
              return (
                <div key={item.id}>
                  {showGroupHeader && (
                    <div className="cmd-group-heading">{item.group}</div>
                  )}
                  <button
                    type="button"
                    role="option"
                    aria-selected={idx === selectedIndex}
                    className={`cmd-item ${
                      idx === selectedIndex ? "selected" : ""
                    }`}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    onClick={item.action}
                  >
                    <div className="cmd-item-main">
                      <span className="cmd-item-label">{item.label}</span>
                      <span className="cmd-item-detail">{item.detail}</span>
                    </div>
                    {item.shortcut && (
                      <span className="cmd-item-tag">{item.shortcut}</span>
                    )}
                  </button>
                </div>
              );
            })
          )}
        </div>

        <div className="cmd-footer">
          <div className="cmd-footer-keys">
            <span>↑↓ Navigate</span>
            <span>↵ Execute</span>
            <span>Esc Close</span>
          </div>
          <span className="cmd-footer-progress">
            Discovery: {exploredNodes.length}/{EXPLORABLE_MILESTONES.length} highlights
          </span>
        </div>
      </div>
    </div>
  );
}
