---
title: "Laravel Marketplace — Multi-Vendor Escrow & Concurrency API"
date: "2026-11-05"
description: "High-concurrency headless multi-vendor marketplace REST API built with Laravel 12, PHP 8.2+, MySQL 8.0, and Sanctum RBAC featuring pessimistic row-level locking (SELECT ... FOR UPDATE), automated escrow settlement, and HMAC-SHA256 webhooks."
technologies: ["Laravel", "PHP", "MySQL", "Sanctum RBAC", "Pessimistic Locking", "Escrow Ledger", "OpenAPI (Scramble)", "HMAC-SHA256"]
imageUrl: ""
featured: true
githubUrl: "https://github.com/bhrataRitesh/laravel-marketplace-escrow-api"
---

# Laravel Marketplace — Multi-Vendor Escrow & Concurrency API

A high-concurrency, headless multi-vendor marketplace REST API built with **Laravel 12**, **PHP 8.2+**, and **MySQL 8.0**, engineered for strict ACID financial safety and zero inventory overselling.

💻 **Source Code**: [https://github.com/bhrataRitesh/laravel-marketplace-escrow-api](https://github.com/bhrataRitesh/laravel-marketplace-escrow-api)

## Challenge → Action → Result

- **Challenge**: Simultaneous checkouts in multi-vendor marketplaces trigger inventory overselling race conditions, database deadlocks, and fragile vendor payout reconciliation.
- **Action**: Implemented **pessimistic row-level locking (`SELECT ... FOR UPDATE`)** with deterministic `product_id` sorting inside `DB::transaction()`, isolated domain services (`CheckoutService`, `EscrowSettlementService`, `WebhookService`), **Sanctum RBAC** (`Admin | Vendor | Customer`), and timing-safe HMAC-SHA256 (`hash_equals()`) idempotent webhooks.
- **Result**: Eliminated concurrent overselling and transaction deadlocks while automating double-entry escrow release (`ESCROW_RELEASE` & `COMMISSION_DEDUCTED`) and interactive OpenAPI documentation via `dedoc/scramble`.

## Key Architecture & Engineering Highlights

- **Deadlock-Free Pessimistic Locking**: Sorts cart items deterministically by `product_id` before acquiring `lockForUpdate()` inside MySQL ACID transactions.
- **Automated Escrow Commission Engine**: Holds customer funds in escrow at checkout and atomically posts double-entry ledger splits upon verified delivery.
- **Idempotent Cryptographic Webhooks**: Validates incoming gateway events with `hash_equals()` and unique event logging to ignore duplicate retries.
- **Live OpenAPI / Swagger Docs**: Auto-generated API specification served at `/docs/api` via `dedoc/scramble`.
