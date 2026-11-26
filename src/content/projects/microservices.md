---
title: "Event-Driven Microservices (RabbitMQ + Docker)"
date: "2025-12-28"
description: "Three independent containerized microservices (User, Task, Notification) built with Node.js, Express, MongoDB, and RabbitMQ AMQP messaging orchestrated via Docker Compose."
technologies: ["Node.js", "Express.js", "RabbitMQ", "MongoDB", "Docker Compose", "Microservices", "REST APIs"]
imageUrl: ""
featured: true
githubUrl: "https://github.com/bhrataRitesh/microservices"
---

# Event-Driven Microservices (RabbitMQ + Docker)

A decoupled, multi-service backend system demonstrating asynchronous event-driven communication across independent Node.js services containerized with Docker Compose.

💻 **Source Code**: [https://github.com/bhrataRitesh/microservices](https://github.com/bhrataRitesh/microservices)

## Challenge → Action → Result

- **Challenge**: Tightly coupled monolithic APIs block user-facing task creation requests while waiting on downstream notification delivery and share fragile database state.
- **Action**: Architected three standalone containerized services (`user-service`, `task-service`, `notification-service`) with isolated MongoDB persistence and **RabbitMQ** AMQP message queues connecting Task producers to Notification consumers.
- **Result**: Decoupled task lifecycle mutations from notification processing, enabling independent service scaling and single-command orchestration via `docker compose up --build`.

## Service Topology

- **User Service (`:3000`)**: Manages user creation, retrieval, and persistence in MongoDB.
- **Task Service (`:4000`)**: Handles task CRUD in MongoDB and publishes task creation events to RabbitMQ (`:5672`).
- **Notification Service (`:2000`)**: Subscribes as an asynchronous RabbitMQ consumer, processing and logging task notification events without blocking API responses.
