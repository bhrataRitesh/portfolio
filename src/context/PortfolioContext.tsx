"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

export type ExplorerLens = "curious" | "recruiter" | "engineer";

export interface ContactDraft {
  subject: string;
  message: string;
  timestamp: number;
}

export interface AssistantTrigger {
  query: string;
  timestamp: number;
}

interface PortfolioContextValue {
  explorerLens: ExplorerLens;
  setExplorerLens: (lens: ExplorerLens) => void;
  isCommandOpen: boolean;
  setIsCommandOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openCommandPalette: () => void;
  assistantTrigger: AssistantTrigger | null;
  askAssistant: (query: string) => void;
  contactDraft: ContactDraft | null;
  prefillContact: (subject: string, message: string) => void;
  heroWorkbenchTab: "intro" | "simulator" | "api";
  setHeroWorkbenchTab: (tab: "intro" | "simulator" | "api") => void;
  exploredNodes: string[];
  markExplored: (nodeId: string) => void;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export const EXPLORABLE_MILESTONES = [
  { id: "hero-intro", label: "Interactive Intro" },
  { id: "rabbitmq-sim", label: "RabbitMQ Simulator" },
  { id: "cmd-palette", label: "⌘K Command Palette" },
  { id: "war-story", label: "Architecture Trade-off" },
  { id: "live-leetcode", label: "Live LeetCode Sync" },
] as const;

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [explorerLens, setExplorerLens] = useState<ExplorerLens>("curious");
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [assistantTrigger, setAssistantTrigger] =
    useState<AssistantTrigger | null>(null);
  const [contactDraft, setContactDraft] = useState<ContactDraft | null>(null);
  const [heroWorkbenchTab, setHeroWorkbenchTab] = useState<
    "intro" | "simulator" | "api"
  >("intro");
  const [exploredNodes, setExploredNodes] = useState<string[]>(["hero-intro"]);

  const markExplored = useCallback((nodeId: string) => {
    setExploredNodes((prev) =>
      prev.includes(nodeId) ? prev : [...prev, nodeId]
    );
  }, []);

  const openCommandPalette = useCallback(() => {
    setIsCommandOpen(true);
    markExplored("cmd-palette");
  }, [markExplored]);

  const askAssistant = useCallback((query: string) => {
    setAssistantTrigger({ query, timestamp: Date.now() });
  }, []);

  const prefillContact = useCallback((subject: string, message: string) => {
    setContactDraft({ subject, message, timestamp: Date.now() });
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Global Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isCommandOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      markExplored("cmd-palette");
    }
  }, [isCommandOpen, markExplored]);

  return (
    <PortfolioContext.Provider
      value={{
        explorerLens,
        setExplorerLens,
        isCommandOpen,
        setIsCommandOpen,
        openCommandPalette,
        assistantTrigger,
        askAssistant,
        contactDraft,
        prefillContact,
        heroWorkbenchTab,
        setHeroWorkbenchTab,
        exploredNodes,
        markExplored,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return ctx;
}
