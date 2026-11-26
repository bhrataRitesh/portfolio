---
title: "Acquisitions — Production Express 5 & Drizzle API"
date: "2025-12-21"
description: "Production-hardened REST API built with Express 5, Neon Serverless PostgreSQL, Drizzle ORM, Zod validation, Arcjet bot/rate-limit protection, Jest + Supertest suites, and Docker CI/CD."
technologies: ["Node.js", "Express 5", "PostgreSQL", "Drizzle ORM", "Zod", "Arcjet", "JWT", "Jest", "Docker", "GitHub Actions"]
imageUrl: ""
featured: true
githubUrl: "https://github.com/bhrataRitesh/acquisitions"
---

# Acquisitions — Production Express 5 & Drizzle API

Acquisitions is a production-ready backend REST API engineered with clean layered architecture (`controllers`, `services`, `models`, `routes`, `validations`, `middleware`), database schema migrations, automated security protection, and containerized CI/CD workflows.

💻 **Source Code**: [https://github.com/bhrataRitesh/acquisitions](https://github.com/bhrataRitesh/acquisitions)

## Challenge → Action → Result

- **Challenge**: Typical Express starters lack strict runtime schema validation, brute-force/bot defense, structured logging, and reproducible dev/prod container parity.
- **Action**: Built an Express 5 API backed by **Neon Serverless PostgreSQL** and **Drizzle ORM**, integrating **Zod** request validation, **Arcjet** bot & rate-limit protection, **Helmet** security headers, **Winston + Morgan** structured logging, and **Jest + Supertest** tests.
- **Result**: Delivered a tested, containerized backend with separate dev/prod Docker Compose environments and automated GitHub Actions linting, formatting, and test verification.

## Key Engineering Highlights

- **Security & Validation**: Combines `@arcjet/node` shield/rate-limiting, `helmet`, `bcrypt` password hashing, `jsonwebtoken` auth, and strict `Zod` input schemas.
- **Database & Migrations**: Uses `drizzle-orm` and `drizzle-kit` (`db:generate`, `db:migrate`, `db:studio`) against `@neondatabase/serverless` PostgreSQL.
- **Testing & DevOps**: Includes Jest + Supertest integration coverage, ESLint + Prettier enforcement, `docker-compose.dev.yaml` / `docker-compose.prod.yaml`, and `.github/` CI pipelines.
