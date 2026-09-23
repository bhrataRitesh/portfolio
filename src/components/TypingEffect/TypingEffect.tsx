"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypingEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 2000,
}: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          setCurrentText(currentWord.substring(0, currentText.length + 1));
          if (currentText.length === currentWord.length) {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), pauseDuration);
            return;
          }
        } else {
          // Deleting
          setCurrentText(currentWord.substring(0, currentText.length - 1));
          if (currentText.length === 0) {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className="typing-effect">
      {currentText}
      <span className="typing-cursor">|</span>
      <style jsx>{`
        .typing-effect {
          color: var(--accent-primary);
        }
        .typing-cursor {
          display: inline-block;
          margin-left: 2px;
          font-weight: 400;
          animation: blink 1s step-end infinite;
          color: var(--accent-primary);
        }
      `}</style>
    </span>
  );
}
