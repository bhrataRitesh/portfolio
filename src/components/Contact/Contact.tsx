"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { contactInfo, socialLinks } from "@/data/portfolioData";
import { usePortfolio } from "@/context/PortfolioContext";
import "./contact.css";

interface IcebreakerOption {
  id: string;
  label: string;
  subject: string;
  message: string;
}

const ICEBREAKERS: IcebreakerOption[] = [
  {
    id: "role",
    label: "Hiring Backend / Full-Stack",
    subject: "Role Opportunity — Backend / Full-Stack Engineer",
    message:
      "Hi Ritesh — explored your portfolio v2 and your RabbitMQ & Node.js optimization work at Webkul stood out. Would love to connect about an open engineering role on our team.",
  },
  {
    id: "arch",
    label: "Architecture Chat",
    subject: "Curious About Your Distributed Queue & pgvector Work",
    message:
      "Hey Ritesh — tried your RabbitMQ simulator and checked out EduYug / Shramik. Would be great to geek out on your architecture choices sometime!",
  },
  {
    id: "call",
    label: "Quick 15-Min Intro Call",
    subject: "15-Minute Intro Call Request",
    message:
      "Hi Ritesh — your interactive portfolio made it super easy to review your background. Are you free for a brief 15-minute intro call this week?",
  },
  {
    id: "hi",
    label: "Just Saying Hi",
    subject: "Hello from your Portfolio v2!",
    message:
      "Hey Ritesh — just stopped by your v2 portfolio and really enjoyed the interactive workbench and Cmd+K touches. Wanted to say hello and connect!",
  },
];

export default function Contact() {
  const { contactDraft } = usePortfolio();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [activeIcebreaker, setActiveIcebreaker] = useState<string | null>(null);
  const [copiedCard, setCopiedCard] = useState<"email" | "phone" | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const lastDraftTs = useRef(0);

  useEffect(() => {
    if (contactDraft && contactDraft.timestamp > lastDraftTs.current) {
      lastDraftTs.current = contactDraft.timestamp;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData((prev) => ({
        ...prev,
        subject: contactDraft.subject,
        message: contactDraft.message,
      }));
    }
  }, [contactDraft]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const applyIcebreaker = (opt: IcebreakerOption) => {
    setActiveIcebreaker(opt.id);
    setFormData((prev) => ({
      ...prev,
      subject: opt.subject,
      message: opt.message,
    }));
  };

  const handleCopyInfo = async (kind: "email" | "phone", value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedCard(kind);
      setTimeout(() => setCopiedCard(null), 2000);
    } catch {
      // Ignore clipboard restriction
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      formData.subject || "Portfolio Inquiry"
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="portfolio-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Get In <span className="highlight">Touch</span>
          </h2>
          <div className="section-underline" />
          <p className="section-subtitle">
            Curiosity sparked? Grab a 1-click conversation starter below or copy my details directly to reach out.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left Column — Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="contact-info-title">Let&apos;s Connect</h3>
            <p className="contact-info-desc">
              I&apos;m open to Backend and Full-Stack Software Engineer roles, interesting distributed systems chats, or a quick 15-minute intro call.
            </p>

            <div className="contact-cards">
              <div className="contact-card card">
                <div className="contact-card-left">
                  <span className="contact-card-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-primary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <div>
                    <strong>Email</strong>
                    <p>{contactInfo.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyInfo("email", contactInfo.email)}
                  className={`contact-copy-btn ${
                    copiedCard === "email" ? "copied" : ""
                  }`}
                >
                  {copiedCard === "email" ? "✓ Copied" : "Copy"}
                </button>
              </div>

              <div className="contact-card card">
                <div className="contact-card-left">
                  <span className="contact-card-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-primary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <strong>Phone</strong>
                    <p>{contactInfo.phone}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyInfo("phone", contactInfo.phone)}
                  className={`contact-copy-btn ${
                    copiedCard === "phone" ? "copied" : ""
                  }`}
                >
                  {copiedCard === "phone" ? "✓ Copied" : "Copy"}
                </button>
              </div>

              <div className="contact-card card">
                <div className="contact-card-left">
                  <span className="contact-card-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-primary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <strong>Location</strong>
                    <p>{contactInfo.location} • Open to Remote / Hybrid</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <h4>Profiles &amp; Links</h4>
              <div className="contact-social-links">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-chip"
                >
                  GitHub
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-chip"
                >
                  LinkedIn
                </a>
                {socialLinks.leetcode && (
                  <a
                    href={socialLinks.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-chip"
                  >
                    LeetCode
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column — Contact Form with Icebreakers */}
          <motion.form
            className="contact-form card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="icebreaker-block">
              <span className="icebreaker-label">
                Pick a conversation starter (auto-drafts note below):
              </span>
              <div className="icebreaker-chips">
                {ICEBREAKERS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`icebreaker-chip ${
                      activeIcebreaker === opt.id ? "active" : ""
                    }`}
                    onClick={() => applyIcebreaker(opt)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Role Opportunity or Quick Chat"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Pick an icebreaker above or write your own note..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="contact-submit"
              disabled={submitted}
            >
              {submitted ? (
                "✓ Opening mail client..."
              ) : (
                <>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
