"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

// Deterministic star field coordinates (no hydration mismatch, zero re-renders)
const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${((i * 17 + 7) % 97) + 1.5}%`,
  top: `${((i * 29 + 13) % 95) + 2.5}%`,
  size: (i % 3) * 0.75 + 1.2,
  delay: `${(i * 0.45) % 8}s`,
  duration: `${((i * 1.3) % 10) + 12}s`,
}));

export default function StarField() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isClient) return null;

  return (
    <div className="stars-container" aria-hidden="true">
      {STARS.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}
