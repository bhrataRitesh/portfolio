---
title: "ModCart — Multi-Vendor eCommerce Monorepo"
date: "2026-04-20"
description: "Multi-vendor eCommerce platform built with Node.js, TypeScript, Turborepo, and pnpm workspaces across dedicated Storefront, Vendor Panel, and Admin Panel apps with Docker Compose orchestration."
technologies: ["TypeScript", "Node.js", "Turborepo", "pnpm Workspaces", "Docker Compose", "Multi-Vendor", "Monorepo"]
imageUrl: ""
featured: true
githubUrl: "https://github.com/bhrataRitesh/modcart"
---

# ModCart — Multi-Vendor eCommerce Monorepo

ModCart is a modular, multi-vendor eCommerce platform engineered as a **Turborepo + pnpm** TypeScript monorepo, cleanly separating buyer, seller, and marketplace administration surfaces alongside shared database packages.

💻 **Source Code**: [https://github.com/bhrataRitesh/modcart](https://github.com/bhrataRitesh/modcart)

## Challenge → Action → Result

- **Challenge**: Multi-vendor marketplaces require distinct user journeys for shoppers, independent vendors, and platform admins—coupling them into one app slows builds and blurs domain boundaries.
- **Action**: Structured a **Turborepo** monorepo (`apps/storefront`, `apps/vendor-panel`, `apps/admin-panel`, shared `packages/@modcart/db`) with unified TypeScript tooling, Docker Compose infrastructure, and workspace-scoped database generation and migration scripts.
- **Result**: Enabled parallel development across all three portals with shared typed data models and reproducible single-command environment bootstrapping (`pnpm setup`).

## Monorepo Architecture

- **`apps/storefront`**: Customer-facing catalog browsing, cart, and multi-vendor checkout experience.
- **`apps/vendor-panel`**: Seller portal for inventory management, fulfillment, and vendor operations.
- **`apps/admin-panel`**: Platform-wide marketplace moderation, vendor onboarding, and configuration.
- **`packages/@modcart/db` & Docker Compose**: Shared typed database layer with containerized local services (`docker-compose.yml`) and Turborepo task pipelines (`dev`, `build`, `lint`, `test`).
