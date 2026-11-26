---
title: "CS-Cart Razorpay Payment Gateway (SOLID & GoF LLD)"
date: "2026-09-22"
description: "Enterprise-grade Razorpay payment gateway add-on for CS-Cart & Multi-Vendor (4.12.x–4.21.x) engineered with 8 GoF design patterns, strict SOLID principles, fluent SQL QueryBuilder, timing-safe HMAC signatures, and idempotent async webhooks."
technologies: ["PHP", "CS-Cart", "Razorpay API", "SOLID & GoF LLD", "MySQL", "HMAC-SHA256", "Webhooks", "PSR-4"]
imageUrl: "/projects/cscart-razorpay.png"
featured: true
githubUrl: "https://github.com/bhrataRitesh/cscart-razorpay-payment-gateway"
---

# CS-Cart Razorpay Payment Gateway (SOLID & GoF LLD)

A production-grade, native **Razorpay Payment Gateway** add-on for **CS-Cart** and **CS-Cart Multi-Vendor** (`4.12.x – 4.21.x`), engineered from the ground up with strict **SOLID** principles, **8 Gang of Four (GoF) design patterns**, and zero core file overwrites.

💻 **Source Code**: [https://github.com/bhrataRitesh/cscart-razorpay-payment-gateway](https://github.com/bhrataRitesh/cscart-razorpay-payment-gateway)

## Challenge → Action → Result

- **Challenge**: Legacy procedural e-commerce payment scripts mix HTTP transport, SQL queries, and checkout routing, creating SQL injection risks, timing side-channel vulnerabilities, and brittle webhook retries.
- **Action**: Architected a PSR-4 modular add-on (`Tygh\Addons\Razorpay\*`) using Strategy, Factory, Facade, Adapter, Repository, Builder, DTO, and Observer patterns, paired with `hash_equals()` timing-safe HMAC-SHA256 validation and a fluent parameterized SQL `QueryBuilder`.
- **Result**: Delivered a drop-in, zero-core-overwrite payment processor supporting UPI, Cards, NetBanking, Wallets, and Pay Later with idempotent server-to-server webhook reconciliation.

## Applied GoF Design Patterns

- **Strategy (`InitiateHandler`, `ReturnHandler`, `CancelHandler`, `WebhookHandler`)**: Isolates each payment lifecycle mode behind `PaymentModeHandlerInterface`.
- **Factory (`PaymentModeHandlerFactory`)**: Dynamically resolves mode strategies and supports `registerStrategy()` extensibility (Open/Closed Principle).
- **Facade (`PaymentHandler`)**: Orchestrates `PaymentContext` resolution and delegates execution cleanly.
- **Adapter (`RazorpayApi`)**: Encapsulates cURL, HTTP Basic Auth, JSON parsing, and timeouts behind `PaymentApiInterface`.
- **Repository & Fluent Builder (`TransactionRepository`, `WebhookLogRepository`, `QueryBuilder`)**: Decouples domain persistence from raw SQL using parameterized `table()`, `select()`, `where()`, `join()`, and `orderBy()` builders.
- **DTO & Observer (`PaymentContext`, `RazorpayOrderResult`, Hook Handlers)**: Replaces loose arrays with immutable value objects and listens to CS-Cart lifecycle hooks safely.
