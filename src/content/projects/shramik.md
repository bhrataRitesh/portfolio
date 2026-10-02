---
title: "Shramik v2 — Real-Time Labor Marketplace & Voice AI"
date: "2024-12-01"
description: "Full-stack labor marketplace built with Next.js 16, React 19, and TypeScript featuring Voice AI search, e-Shram verification, and Razorpay escrow payments."
technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "MongoDB", "Razorpay", "Voice AI", "Cloudinary", "Zod", "Jose (JWT)"]
imageUrl: "/projects/shramik-live.png"
featured: true
liveUrl: "https://shramik-two.vercel.app"
githubUrl: "https://github.com/bhrataRitesh/shramik"
---

# Shramik v2 — Real-Time Labor Marketplace & Voice AI

Shramik v2 is a full-stack, community-focused labor marketplace engineered to empower daily wage workers and contractors with transparent hiring, voice-first accessibility, and secure financial escrow.

🌐 **Live Application**: [https://shramik-two.vercel.app](https://shramik-two.vercel.app)  
💻 **Source Code**: [https://github.com/bhrataRitesh/shramik](https://github.com/bhrataRitesh/shramik)

## Key Features & Highlights

- **Modern Architecture (v2 Overhaul)**: Re-architected from a legacy monolith to **Next.js 16 (App Router)** and **React 19** with TypeScript, delivering near-instant page transitions and optimized server components.
- **Voice AI Job Matching**: Implemented conversational voice interfaces enabling informal workers with low digital literacy to search, apply, and communicate through spoken commands.
- **e-Shram & OTP Verification**: Integrated mobile OTP verification and government e-Shram identity validation to establish verified, trusted worker profiles.
- **Escrow Payouts & Double-Entry Ledger**: Engineered an automated transaction ledger (`LedgerTransaction`) integrated with **Razorpay**, holding project payments in escrow until work milestones are confirmed.
- **Direct Bookings & Requirement Broadcasting**: Real-time worker availability management, immediate contractor hiring workflows, and dynamic status notifications.
- **Cloudinary Media Pipelines**: Fast, compressed image uploads for worker KYC credentials and proof-of-work job completion photos.

## Architecture & Technical Stack

- **Frontend & App Framework**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Canvas Confetti.
- **Backend & Database**: Next.js Server Actions & API Routes with Mongoose / MongoDB schemas optimized for sub-50ms query latencies.
- **Authentication & Security**: Stateless JWT session management with `jose`, strict runtime schema validation with `Zod`, and HMAC webhook signature checks.
- **Payment Infrastructure**: Razorpay orders API, escrow deposit flows, and automated ledger balancing.
