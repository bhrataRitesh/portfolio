"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  getBotResponse,
  initialSuggestions,
  BotReply,
} from "@/lib/chatbotEngine";
import "./chatbot.css";

interface Message {
  id: number;
  type: "bot" | "user";
  text: string;
  actionLink?: BotReply["actionLink"];
  time: string;
}

function FormattedText({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <>
      {lines.map((line, idx) => {
        if (!line.trim()) {
          return <span key={idx} className="msg-break" />;
        }

        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts: (string | React.ReactNode)[] = [];
        let lastIndex = 0;
        let match;

        while ((match = linkRegex.exec(line)) !== null) {
          if (match.index > lastIndex) {
            parts.push(line.slice(lastIndex, match.index));
          }
          const [, label, url] = match;
          const isPdf = url.endsWith(".pdf");
          parts.push(
            <a
              key={`${idx}-${match.index}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              download={isPdf ? "Ritesh_Yadav_Resume.pdf" : undefined}
              className="msg-link"
            >
              {label}
            </a>
          );
          lastIndex = match.index + match[0].length;
        }

        if (lastIndex < line.length) {
          parts.push(line.slice(lastIndex));
        }

        const formatted = parts.map((part, pIdx) => {
          if (typeof part !== "string") return part;

          const segments = part.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
          return segments.map((seg, sIdx) => {
            if (seg.startsWith("**") && seg.endsWith("**")) {
              return <strong key={`${pIdx}-${sIdx}`}>{seg.slice(2, -2)}</strong>;
            }
            if (seg.startsWith("*") && seg.endsWith("*")) {
              return <em key={`${pIdx}-${sIdx}`}>{seg.slice(1, -1)}</em>;
            }
            return seg;
          });
        });

        return (
          <span key={idx} className="msg-line">
            {formatted}
          </span>
        );
      })}
    </>
  );
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    type: "bot",
    text: "Hi there! 👋 I'm **Ritesh's AI Assistant**.\n\nAsk me about his experience at **Webkul**, tech stack, featured projects (**StudyNotion & Shramik**), education, or grab his resume!",
    time: "Just now",
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(initialSuggestions);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const nextId = useRef(2);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const sendMessage = useCallback((query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;

    const userTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMessage: Message = {
      id: nextId.current++,
      type: "user",
      text: trimmed,
      time: userTime,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    const delay = Math.min(500 + trimmed.length * 6, 1000);

    setTimeout(() => {
      const reply = getBotResponse(trimmed);
      const botTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const botMessage: Message = {
        id: nextId.current++,
        type: "bot",
        text: reply.text,
        actionLink: reply.actionLink,
        time: botTime,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);

      if (reply.suggestions && reply.suggestions.length > 0) {
        setSuggestions(reply.suggestions);
      }
    }, delay);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleClearChat = useCallback(() => {
    setMessages([
      {
        id: nextId.current++,
        type: "bot",
        text: "Chat cleared! 🧹 What would you like to know about Ritesh?",
        time: "Just now",
      },
    ]);
    setSuggestions(initialSuggestions);
  }, []);

  return (
    <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
      {/* Floating Toggle Button */}
      <button
        className="chatbot-toggle glass"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        title={isOpen ? "Close Assistant" : "Chat with Ritesh's AI Assistant"}
      >
        <span className="chatbot-toggle-inner">
          {isOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span className="toggle-pulse" />
            </>
          )}
        </span>
      </button>

      {/* Chat Window */}
      <div className="chatbot-window glass">
        {/* Header */}
        <div className="chatbot-header">
          <div className="header-info">
            <div className="header-avatar">
              <span>🤖</span>
              <span className="avatar-status-dot" />
            </div>
            <div>
              <h3 className="header-title">Ritesh AI</h3>
              <p className="header-status">Software Analyst Assistant</p>
            </div>
          </div>

          <div className="header-actions">
            <button
              type="button"
              className="header-btn"
              onClick={handleClearChat}
              title="Clear conversation"
              aria-label="Clear conversation"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              </svg>
            </button>
            <button
              type="button"
              className="header-btn"
              onClick={() => setIsOpen(false)}
              title="Close chat"
              aria-label="Close chat"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.type}`}>
              <div className="message-bubble">
                <FormattedText text={msg.text} />

                {msg.actionLink && (
                  <div className="msg-action-container">
                    <a
                      href={msg.actionLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={
                        msg.actionLink.isDownload
                          ? "Ritesh_Yadav_Resume.pdf"
                          : undefined
                      }
                      className="msg-action-btn"
                    >
                      {msg.actionLink.isDownload ? (
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      ) : (
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      )}
                      {msg.actionLink.label}
                    </a>
                  </div>
                )}
              </div>
              <span className="message-time">{msg.time}</span>
            </div>
          ))}

          {isTyping && (
            <div className="message bot">
              <div className="message-bubble typing-bubble">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Questions */}
        <div className="chatbot-suggestions">
          {suggestions.map((item, index) => (
            <button
              key={`${item}-${index}`}
              className="suggestion-chip"
              onClick={() => sendMessage(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form className="chatbot-input-form" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask about skills, Webkul, projects..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="chatbot-input"
          />
          <button
            type="submit"
            className="chatbot-submit"
            disabled={!inputValue.trim()}
            aria-label="Send message"
            title="Send"
          >
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
          </button>
        </form>
      </div>
    </div>
  );
}
