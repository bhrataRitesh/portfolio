"use client";

import { useEffect } from "react";
import { contactInfo, socialLinks } from "@/data/portfolioData";

export default function ConsoleGreeting() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const styles = {
      title: "color: #38bdf8; font-size: 16px; font-weight: 700; padding: 4px 0;",
      body: "color: #94a3b8; font-size: 12px; line-height: 1.6;",
      highlight: "color: #22c55e; font-size: 12px; font-weight: 600;",
    };

    console.log(
      "%cHey there, curious inspector 👋",
      styles.title
    );
    console.log(
      "%cChecking under the hood? I built v2 with Next.js 16, React 19, TypeScript, live LeetCode GraphQL API sync (/api/leetcode), and zero-bloat CSS.\nTry pressing Cmd+K (or Ctrl+K) on the page, or run the RabbitMQ queue simulator in the hero!",
      styles.body
    );
    console.log(
      `%cLet's talk systems & backend engineering -> ${contactInfo.email} | GitHub: ${socialLinks.github}`,
      styles.highlight
    );
  }, []);

  return null;
}
