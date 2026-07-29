# Design Document: SwitchCraft Static Clone Audit & Fix System

## Overview

This design provides the technical architecture to resolve critical documentation mismatches, unclear file resolution paths, and missing development tooling that currently prevent effective maintenance and modification of the SwitchCraft static clone project.

### Problem Statement

The SwitchCraft static clone serves a crawled Next.js SPA via Express.js with extensive API mocking and cart synchronization. However:

1. **Documentation-Reality Mismatch**: AGENTS.md references a non-existent `serve.py` Python server while the actual implementation is `serve.js` (Node.js/Express)
2. **Complex File Resolution**: Multiple overlapping paths for API data (nested directories, flat prefixed names, fallback handlers) create confusion about which files are actually served
3. **Unclear Change Propagation**: Modifications don't take effect because the change-to-file mapping is unclear
4. **Missing Development Tooling**: No auto-restart, validation scripts, or testing infrastructure
5. **Duplicate Logic**: API handling logic duplicated across `serve.js`, `api/auth.js`, `api/sync.js`, and `api/fallback.js`

### Solution Approach

We will implement a comprehensive audit and fix system consisting of:

1. **Accurate Documentation**: Update AGENTS.md to reflect actual Express.js architecture
2. **File Location Matrix**: Create a reference guide mapping change types to target files
3. **API Route Resolution Documentation**: Document the complete precedence hierarchy
4. **Configuration Externalization**: Extract all hardcoded URLs and credentials to config files
5. **Development Tooling**: Implement auto-restart with nodemon, validation scripts, and testing framework
6. **Code Consolidation**: Eliminate duplicate API logic by creating shared handler modules
7. **Comprehensive Logging**: Standardize logging across all components with structured formats

## Architecture

### Current System Components

```mermaid
graph TB
    subgraph "Client Browser"
        HTML[index.html]
        REACT[React/Next.js SPA]
        EARLY[early-hydrate.js]
        CART[custom-cart-sync.js]
    end
    
    subgraph "Express Server (serve.js)"
        AUTH_MW[Auth Middleware]
        STATIC[Static File Handler]
        API[API Route Handler]
        PROXY[Google Sheets Proxy]
    end
    
    subgraph "API Handlers"
        AUTH_API[api/auth.js]
        SYNC_API[api/sync.js]
        FALLBACK[api/fallback.js]
    end
    
    subgraph "Data Storage"
        JSON_STATIC[api-static/*.json]
        USERS[users.json]
        ORDERS[orders.json]
        CONFIG[config.json]
        LOGS[logs/*.log]
        PERSIST[localStorage Redux Persist]
    end
    
    subgraph "External Services"
        GAS[Google Apps Script]
        SHEETS[Google Sheets]
    end
    
    HTML --> REACT
    EARLY --> PERSIST
    REACT --> CART
    CART --> API
    CART --> PERSIST
    
    API --> AUTH_API
    API --> SYNC_API
    API --> FALLBACK
    
    AUTH_MW --> STATIC
    AUTH_MW --> API
    
    API --> JSON_STATIC
    API --> USERS
    API --> ORDERS
    API --> CONFIG
    API --> LOGS
    
    PROXY --> GAS
    GAS --> SHEETS
    SYNC_API --> GAS
