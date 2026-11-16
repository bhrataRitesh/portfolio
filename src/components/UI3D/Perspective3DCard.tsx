"use client";

import React, { useRef, useState, useCallback } from "react";

interface Perspective3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  perspective?: number;
  glare?: boolean;
  style?: React.CSSProperties;
}

export default function Perspective3DCard({
  children,
  className = "",
  maxTilt = 6,
  scale = 1.015,
  perspective = 1000,
  glare = true,
  style = {},
}: Perspective3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>("");
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Restrained, natural tilt (max 6-8 deg)
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setTransform(
        `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
      );

      if (glare) {
        setGlarePosition({
          x: (x / rect.width) * 100,
          y: (y / rect.height) * 100,
          opacity: 0.15,
        });
      }
    },
    [maxTilt, scale, perspective, glare]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`perspective-3d-card ${className}`}
      style={{
        ...style,
        transform: transform || `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`,
        transition: isHovered
          ? "transform 0.08s ease-out"
          : "transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)",
        transformStyle: "preserve-3d",
        position: "relative",
        willChange: "transform",
      }}
    >
      {children}
      {glare && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            zIndex: 15,
            opacity: glarePosition.opacity,
            transition: isHovered ? "opacity 0.15s ease" : "opacity 0.35s ease",
            background: `radial-gradient(circle 300px at ${glarePosition.x}% ${glarePosition.y}%, rgba(56, 189, 248, 0.2), transparent 75%)`,
            mixBlendMode: "screen",
          }}
        />
      )}
    </div>
  );
}
