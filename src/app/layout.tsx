import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Chatbot from "@/components/Chatbot/Chatbot";
import CommandPalette from "@/components/CommandPalette/CommandPalette";
import ConsoleGreeting from "@/components/ConsoleGreeting";
import { PortfolioProvider } from "@/context/PortfolioContext";
import { ThemeProvider } from "@/components/ThemeSwitcher/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ritesh Yadav | Software Engineer (Node.js, TypeScript, RabbitMQ, PostgreSQL)",
  description:
    "Ritesh Yadav — Software Engineer specializing in scalable backend architectures, message queues (RabbitMQ), in-memory caching (Redis), relational query optimization (MySQL, PostgreSQL), and reactive full-stack web applications.",
  keywords: [
    "Ritesh Yadav",
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Node.js",
    "TypeScript",
    "React.js",
    "Next.js",
    "RabbitMQ",
    "Redis",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "REST APIs",
    "Docker",
    "Playwright",
    "Python",
    "Drizzle ORM",
    "Turborepo",
    "Microservices",
    "SOLID Principles",
    "Low-Level Design",
    "Amazon SP-API",
    "eBay APIs",
    "Stripe",
    "Razorpay",
    "Portfolio",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <PortfolioProvider>
            <ConsoleGreeting />
            <CommandPalette />
            <Navbar />

            <main className="main-content">{children}</main>

            <footer className="site-footer">
              <div className="container footer-inner">
                <div className="footer-brand">
                  <span className="footer-logo">
                    R<span style={{ color: "var(--accent-primary)" }}>.</span>
                  </span>
                  <p className="footer-tagline">
                    Backend &amp; Full-Stack Engineer • Noida, IN (Open for Remote &amp; Hybrid Roles)
                  </p>
                </div>
                <div className="footer-links">
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#skills">Skills</a>
                  <a href="#experience">Experience</a>
                  <a href="#projects">Projects</a>
                  <a href="#contact">Contact</a>
                </div>
                <div className="footer-copy">
                  © {new Date().getFullYear()} Ritesh Yadav • Built cleanly with Next.js 16 &amp; TypeScript • Try <kbd className="wb-kbd">⌘K</kbd> anytime
                </div>
              </div>
            </footer>

            <ScrollToTop />
            <Chatbot />
          </PortfolioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
