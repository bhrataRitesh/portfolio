---
title: "EduYug — Course Platform"
date: "2025-05-01"
description: "Modular monolith backend built with NestJS, Next.js, and PostgreSQL. Features native pgvector semantic search, BullMQ and Redis async FFmpeg video transcoding with adaptive-bitrate HLS streaming, and Razorpay immutable double-entry ledger."
technologies: ["NestJS", "Next.js", "PostgreSQL (pgvector)", "Redis", "BullMQ", "FFmpeg", "Razorpay", "HLS.js", "TypeScript", "Docker"]
imageUrl: "/projects/eduyug-live.png"
featured: true
githubUrl: "https://github.com/bhrataRitesh/eduyug"
---

# EduYug — Course Platform

EduYug is a high-performance course marketplace and learning platform where instructors publish deep technical video courses and students learn through real-time, in-browser AI tutoring with timestamp deep-linking.

💻 **Source Code**: [https://github.com/bhrataRitesh/eduyug](https://github.com/bhrataRitesh/eduyug)

## Key Technical Innovations

- **Unified Vector Search (`pgvector`)**: Native semantic search embedded directly into PostgreSQL 16 using `pgvector` for course recommendations and lesson transcript retrieval—eliminating external vector DB latency and operational cost.
- **Timestamped RAG AI Tutor**: Contextual Retrieval-Augmented Generation that cites exact video timestamps (`[MM:SS]`), allowing learners to jump straight to the relevant lecture moment with a single click.
- **Adaptive Bitrate HLS Player**: Custom video engine built on `hls.js` supporting multi-bitrate ladders (`360p` to `1080p`), speed adjustments, and BullMQ asynchronous FFmpeg video transcoding pipelines.
- **High-Throughput Telemetry**: Video watch telemetry buffered in Redis and batch-flushed to Postgres every 60 seconds to eliminate database write contention during peak concurrent streaming.
- **Double-Entry Financial Ledger**: Razorpay checkout integration backed by an immutable double-entry financial ledger recording platform commission and instructor payable balances with HMAC SHA256 signature verification.

## Architecture & Implementation

- **Turborepo Monorepo**: Modular monolith architecture encompassing `apps/api` (NestJS 10), `apps/web` (Next.js 14 App Router), `apps/ai` (FastAPI Python RAG engine), and `packages/database` (Drizzle ORM).
- **Identity & Security**: Argon2 password hashing, JWT stateless access tokens with refresh token rotation, and fine-grained Role-Based Access Control (Learner, Instructor, Admin).
- **Queue Pipeline**: Asynchronous background job processing powered by Redis 7 and BullMQ for video transcoding, transcript extraction, and email dispatching.
