import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import StarField from "@/components/StarField/StarField";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Chatbot from "@/components/Chatbot/Chatbot";
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
  title: "Ritesh Yadav | Software Analyst & Full-Stack Developer",
  description:
    "Ritesh Yadav — Software Analyst & Full-Stack Developer with experience at Webkul and Refresh Infratech. Specialized in e-commerce connectors, LLMs, Vector DBs, React, Next.js, and cloud deployment.",
  keywords: [
    "Ritesh Yadav",
    "Software Analyst",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "FastAPI",
    "CS-Cart",
    "OpenCart",
    "LLM Integration",
    "Vector Databases",
    "Docker",
    "Portfolio",
  ],
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
          <StarField />
          <Navbar />

          <main className="main-content">{children}</main>

          <footer className="site-footer">
            <div className="container footer-inner">
              <div className="footer-brand">
                <span className="footer-logo">
                  R<span style={{ color: "var(--accent-primary)" }}>.</span>
                </span>
                <p className="footer-tagline">
                  Building digital experiences with modern technologies.
                </p>
              </div>
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="footer-copy">
                © {new Date().getFullYear()} Ritesh Yadav. Crafted with 💜 using
                Next.js
              </div>
            </div>
          </footer>

          <ScrollToTop />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
