"use client";

import { techMarqueeItems } from "@/data/portfolioData";
import "./tech-marquee.css";

export default function TechMarquee() {
  // Double the items for seamless infinite scroll
  const items = [...techMarqueeItems, ...techMarqueeItems];

  return (
    <div className="tech-marquee">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span key={index} className="marquee-item">
            <span className="marquee-dot">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
