---
title: "StudyNotion — Scalable EdTech Platform"
date: "2025-05-01"
description: "A full-stack e-learning platform where instructors create and sell courses, and students enroll, learn, and track progress with personalized dashboards."
technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Razorpay"]
imageUrl: "/projects/portfolio-bg.png"
featured: true
githubUrl: "https://github.com/bhrataRitesh/StudyNotion"
---

# StudyNotion — Scalable EdTech Platform

StudyNotion is an end-to-end full-stack e-learning platform designed to bridge the gap between knowledgeable educators and eager learners worldwide.

💻 **Source Code**: [https://github.com/bhrataRitesh/StudyNotion](https://github.com/bhrataRitesh/StudyNotion)

## Key Features & Highlights

- **Multi-Role User Management**: Seamless authentication and authorization with JWT tokens for Students, Instructors, and Admins.
- **Instructor Dashboard**: Comprehensive suite for educators to draft, update, and manage rich video courses, track enrollments, and analyze sales.
- **Student Learning Experience**: Interactive lecture player, course progress tracking, rating/review system, and wishlist management.
- **Secure Payment Processing**: Integrated Razorpay payment gateway with cryptographic webhook signature verification for instant course provisioning.
- **Responsive Modern UI**: Built with React.js and Tailwind CSS for mobile-first, high-performance interactions.

## Architecture & Implementation

- **RESTful Backend**: Structured Express.js and Node.js backend with robust validation and error-handling middleware.
- **Optimized Data Layer**: MongoDB database with indexing on course lookups and aggregation pipelines for analytics.
- **Payment Verification**: Server-side HMAC SHA256 signature verification preventing fraud and ensuring payment integrity.
