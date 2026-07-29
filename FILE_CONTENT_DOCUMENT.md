# File Content Document

This document provides a formatted overview of the main files and folders in this project.

## 1. Project Overview

This workspace contains a static clone of a Next.js-based website. It includes:

- crawled HTML pages and assets
- mocked API responses
- routing rules for SPA-style navigation
- a lightweight Python server for local hosting

## 2. Root Files

### AGENTS.md
- Project instructions and overview.
- Explains the purpose of the static clone server.
- Lists the available commands for running the local server.

### serve.py
- Main Python HTTP server.
- Serves static files from the project root.
- Supports SPA routing, API mocking, and graceful shutdown.
- Uses environment variables such as PORT and HOST.

### serve.bat
- Windows batch launcher for starting the server.

### config.json
- Contains default server configuration values.
- Includes the host and port settings.

### custom-cart-sync.js
- Browser-side script for cart sync behavior.
- Handles toast notifications and cart payload generation.
- Reads cart data from browser storage and builds order-related payloads.

### inject.py
- Injects a custom script tag into HTML files.
- Used to add the cart sync script to the crawled pages.

### remove_html.py
- Removes specific HTML UI blocks related to AI mode.
- Intended for cleanup of crawled pages.

### vercel.json
- Defines URL rewrite rules for deployment.
- Routes paths such as login, dashboards, orders, and API paths.

### index.html
- Main entry page for the static site.
- Contains the SPA shell and bundled front-end content.

### manifest.json
- Web app manifest file.
- Provides browser metadata and install-related information.

### robots.txt
- Standard crawler instructions for search engines.

## 3. Directory Structure

### api/
- Contains API-related Python files.
- Used for request handling and mock response behavior.

### api-static/
- Stores JSON mock data used by the local server.
- Includes mocked responses for orders, profile, offers, auth, pricing, and other features.

### pages/
- Stores crawled and exported HTML pages.
- Includes pages for login, dashboard, my orders, my profile, and orders/cart views.

### assets/
- Contains image, font, icon, and other static assets.

### _next/
- Stores Next.js-style static build output such as chunks, CSS, and media files.

### reports/
- Contains generated reports for crawl coverage, asset inventory, API inventory, and audit information.

## 4. Content Summary by Feature

### Server behavior
- The site is served locally through Python.
- The server handles static files and fallback routing.
- It also returns mocked API responses for missing or simulated backend endpoints.

### Routing
- The project uses rewrite rules to map URLs like /Login, /orders, and /Dashboards/* to the correct HTML pages.
- Unknown routes fall back to the main index page.

### UI and cart behavior
- The JavaScript file adds cart sync and notification functionality.
- It builds order details and interacts with browser storage.

### Static clone content
- The project includes a cloned front-end experience with HTML pages and assets copied from the original site.
- This makes it possible to run the site offline or in a local demo environment.

## 5. Notes

- The project is primarily a static clone with local mock services.
- It is designed for hosting and testing without requiring a full live backend.
- The server and routing setup make it suitable for demo, preview, and offline presentation use.
