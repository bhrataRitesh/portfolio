---
title: "Shramik — Real-Time Job Marketplace"
date: "2024-12-01"
description: "A job marketplace for daily wage workers with real-time hiring, role-based access (admin, employer, worker), and responsive UI using EJS templates."
technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "JavaScript", "Stripe API"]
imageUrl: "/projects/ecommerce-bg.png"
featured: true
---

# Shramik — Real-Time Job Marketplace

Shramik is a community-focused employment marketplace dedicated to empowering daily wage workers by connecting them directly with local employers and contractors in real-time.

## Key Features & Highlights

- **Role-Based Access**: Specialized portals for Admins, Employers, and Daily Wage Workers to ensure tailored workflows and seamless communication.
- **Real-Time Job Feeds**: Instant job broadcasting and applicant discovery, significantly reducing idle search time for daily laborers.
- **Secure Wage Release**: Integrated Stripe API for secure payouts and financial protection for contracted work.
- **Trust & Reputation**: Built-in rating and review mechanisms establishing social proof and fair accountability.
- **Dynamic Templating**: Server-rendered fast pages utilizing EJS templates for minimal client overhead and optimal mobile compatibility.

## Architecture & Implementation

- **Backend**: Scalable Node.js and Express.js architecture powering REST APIs and worker management endpoints.
- **Database**: MongoDB storage schemas designed for low-latency queries across job listings, worker profiles, and hiring transactions.
- **Security & Payments**: Automated webhook handling and Stripe payment integration ensuring reliable escrow and wage disbursement.
