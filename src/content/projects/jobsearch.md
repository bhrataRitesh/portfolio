---
title: "JobSearch — City-Based ATS Scraper & Aggregator"
date: "2026-07-19"
description: "Phase-based Python CLI tool that discovers software companies by city (Google Places, Clutch, Naukri), detects career pages, and scrapes Greenhouse, Lever, and Workday ATS APIs with Playwright fallback."
technologies: ["Python", "Playwright", "BeautifulSoup", "Google Places API", "Greenhouse API", "Lever API", "Workday", "CSV Pipeline"]
imageUrl: ""
featured: true
githubUrl: "https://github.com/bhrataRitesh/jobsearch"
---

# JobSearch — City-Based ATS Scraper & Aggregator

JobSearch is an automated Python CLI pipeline designed to eliminate manual job board hunting by discovering local software companies, locating their engineering career pages, and aggregating structured developer openings into a deduplicated CSV feed.

💻 **Source Code**: [https://github.com/bhrataRitesh/jobsearch](https://github.com/bhrataRitesh/jobsearch)

## Challenge → Action → Result

- **Challenge**: Manually checking scattered company career pages and inconsistent ATS portals (Greenhouse, Lever, Workday, custom HTML) across a target city is slow and error-prone.
- **Action**: Engineered a modular, phase-based Python CLI pipeline (`discovery`, `careers_finder`, `scrapers`, `processing`) combining Google Places API, Clutch.co, and Naukri.com discovery with dedicated ATS JSON scrapers and a BeautifulSoup + Playwright headless fallback.
- **Result**: Produced an idempotent, resumable job aggregation pipeline that normalizes, deduplicates, and filters strictly for software engineering roles across any city.

## Architecture & Pipeline Phases

- **Multi-Source Discovery (`discovery/`)**: Queries Google Places API, Clutch.co, and Naukri.com to build a verified company directory for any target city.
- **Career Page Detection (`careers_finder/`)**: Crawls discovered company domains to locate `/careers` or `/jobs` endpoints and identifies the underlying ATS provider.
- **ATS-Aware Scrapers (`scrapers/`)**: Uses structured extraction for Greenhouse, Lever, and Workday APIs, falling back to **Playwright + BeautifulSoup** for JavaScript-rendered custom career pages.
- **Deduplication & Filtering (`processing/`)**: Normalizes role titles, filters out non-engineering listings, deduplicates cross-source matches, and exports a clean CSV report.
