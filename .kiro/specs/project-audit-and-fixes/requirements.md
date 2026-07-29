# Requirements Document: SwitchCraft Static Clone Audit & Fix System

## Introduction

This specification addresses critical issues preventing changes from being applied successfully in the SwitchCraft static clone project (vdplshop.in). The system currently serves a crawled Next.js SPA via Express.js with extensive API mocking and cart synchronization logic. However, documentation mismatches, complex file structures, and unclear change propagation paths are blocking effective maintenance and modification.

The core problem: **When users request changes via prompts, those changes are not being applied to the correct files or not taking effect** due to confusion about which files are actually being served, static file caching, documentation mismatches between Python and Node.js implementations, and a complex multi-location file structure.

## Glossary

- **System**: The SwitchCraft Static Clone application consisting of Express server, API handlers, static files, and client-side scripts
- **Server**: The Express.js HTTP server (`serve.js`) that handles routing, authentication, API mocking, and static file serving
- **Static_Assets**: Crawled HTML, CSS, JavaScript, images, and fonts served directly to browsers
- **API_Mock_Layer**: The `/api/*` route handlers and JSON data files that simulate backend API responses
- **Cart_Sync_System**: Client-side JavaScript (`custom-cart-sync.js`, `early-hydrate.js`) managing cart state and Google Sheets synchronization
- **Redux_Persist_Store**: Browser localStorage-based persistence for Redux state under keys like `persist:root`, `persist:cartData`
- **Change_Request**: User instruction to modify code, configuration, or behavior
- **Documentation**: The AGENTS.md file and other descriptive documents
- **File_Resolution**: The process of determining which file to serve for a given URL path
- **Auth_Flow**: Authentication and session management using cookies and middleware
- **Hot_Reload**: Automatic server restart when file changes are detected

## Requirements

### Requirement 1: Accurate Architecture Documentation

**User Story:** As a developer, I want accurate documentation of the actual server architecture, so that I can understand which files control which behaviors.

#### Acceptance Criteria

1. THE Documentation SHALL accurately describe the Express.js server implementation in `serve.js`
2. THE Documentation SHALL remove all references to the non-existent `serve.py` Python server
3. THE Documentation SHALL document all entry points: `serve.js`, `api/auth.js`, `api/fallback.js`, `api/sync.js`
4. THE Documentation SHALL list all Google Apps Script URLs hardcoded in the codebase with their locations
5. THE Documentation SHALL map URL patterns to their handler functions (auth routes, API routes, static routes, SPA fallback)
6. THE Documentation SHALL document the authentication middleware flow with cookie names and validation logic
7. THE Documentation SHALL describe the order of middleware execution (body parsers, CORS, auth checks, route handlers)
8. THE Documentation SHALL identify all files that must be restarted for changes to take effect

### Requirement 2: File Location Reference Guide

**User Story:** As a developer, I want a clear reference guide showing which files to modify for different types of changes, so that my modifications actually take effect.

#### Acceptance Criteria

1. THE System SHALL provide a file location matrix mapping change types to target files
2. THE File_Location_Guide SHALL categorize changes into: UI changes, API behavior, authentication, cart sync, static content, routing, logging
3. FOR EACH change category, THE Guide SHALL list: primary files to modify, dependent files to check, files that require restart
4. THE Guide SHALL document which changes require browser cache clearing
5. THE Guide SHALL document which changes require clearing localStorage/Redux persist
6. THE Guide SHALL identify files served directly vs files processed by middleware
7. THE Guide SHALL map client-side scripts to their injection points in HTML

### Requirement 3: API Route Resolution System Audit

**User Story:** As a developer, I want to understand how API routes are resolved, so that I can predict which handler will execute for a given request.

#### Acceptance Criteria

1. THE System SHALL document the complete API route resolution hierarchy
2. THE Documentation SHALL explain the precedence order: dedicated handlers (`api/*.js`) → static JSON files (nested paths) → static JSON files (flat naming) → fallback responses
3. THE Documentation SHALL list all Google Apps Script proxy endpoints and their local equivalents
4. THE Documentation SHALL identify duplicate API logic between `serve.js` and `api/fallback.js`
5. THE System SHALL identify all hardcoded Google Apps Script URLs and extract them to configuration
6. THE Documentation SHALL map each `/api/*` endpoint to its handler location and static JSON fallback
7. THE Documentation SHALL document CORS header handling across all API routes

### Requirement 4: Cart Synchronization System Audit

**User Story:** As a developer, I want to understand the cart sync flow, so that I can debug and modify cart behavior correctly.

#### Acceptance Criteria

1. THE Documentation SHALL document the complete cart synchronization data flow from UI action to Google Sheets
2. THE Documentation SHALL map all localStorage keys used by the cart system: `persist:root`, `persist:cartData`, `persist:cart`, `sc_editing_item_id`, `sc_editing_item_data`, `sc_local_orders`, `googleSheetUrl`
3. THE Documentation SHALL explain the edit item restoration flow: URL param `?cart=ID` → localStorage check → Redux dispatch → UI update
4. THE Documentation SHALL identify all Redux action types dispatched by `custom-cart-sync.js`
5. THE Documentation SHALL document the server-side proxy route `/api/sync-to-sheet` and its relationship to Google Apps Script
6. THE Documentation SHALL explain when `early-hydrate.js` executes and what it injects into Redux persist
7. THE Documentation SHALL document the cart item data structure including: `cartData`, `dropped`, `quantity`, `totalPrice`, `screenshotDataUrl`, `productSequence`, `orderName`, `customProductName`
8. THE Documentation SHALL identify all event listeners attached to buttons for cart operations

### Requirement 5: Authentication Flow Documentation

**User Story:** As a developer, I want clear documentation of the authentication system, so that I can safely modify auth logic without breaking login.

#### Acceptance Criteria

1. THE Documentation SHALL document all authentication cookie names: `session_token`, `next-auth.session-token`, `logged_in`, `auth_email`, `auth_role`
2. THE Documentation SHALL explain the authentication check middleware and which routes it protects
3. THE Documentation SHALL document the dual user storage: `users.json` (local) and Google Sheets (remote)
4. THE Documentation SHALL identify environment variables used for hardcoded credentials: `AUTH_USERNAME`, `AUTH_PASSWORD`
5. THE Documentation SHALL map all authentication endpoints: `/api/auth/session`, `/api/auth/signin`, `/api/auth/callback`, `/api/auth/signout`, `/api/auth/providers`, `/api/auth/csrf`, `/api/auth/precheck`
6. THE Documentation SHALL document the login flow: credential validation → cookie setting → redirect to dashboard
7. THE Documentation SHALL identify which routes bypass authentication (Login page, public assets, API auth endpoints)

### Requirement 6: Static File Serving Architecture Audit

**User Story:** As a developer, I want to understand how static files are resolved and served, so that I can predict which file will be served for a given URL.

#### Acceptance Criteria

1. THE Documentation SHALL document the static file resolution order: explicit routes → Express static middleware → SPA fallback to `index.html`
2. THE Documentation SHALL list all asset path prefixes: `/_next/`, `/assets/`, `/icon/`, `/Image/`, `/image/`, `/favicon.png`, `/india.png`
3. THE Documentation SHALL explain the path normalization middleware that strips prefixes
4. THE Documentation SHALL document the MIME type mapping for file extensions
5. THE Documentation SHALL explain the `/_next/image` proxy route and how it serves local images
6. THE Documentation SHALL document which files are inlined in HTML vs loaded separately
7. THE Documentation SHALL identify all HTML files in `pages/` directory and their URL mappings

### Requirement 7: Consolidate Duplicate API Logic

**User Story:** As a developer, I want to eliminate duplicate API handling logic, so that changes only need to be made in one place.

#### Acceptance Criteria

1. THE System SHALL identify all API endpoints with duplicate implementations between `serve.js` and `api/fallback.js`
2. THE System SHALL consolidate authentication logic into a single source module
3. THE System SHALL consolidate user management endpoints: `/api/admin/users` (GET, POST, DELETE)
4. THE System SHALL consolidate order management endpoints: `/api/admin/orders` (GET, POST)
5. THE System SHALL consolidate icon management endpoints: `/api/icons` (GET, POST, DELETE)
6. THE System SHALL consolidate logging endpoints: `/api/logs/write`, `/api/logs/read`, `/api/logs/clear`
7. WHEN an API endpoint is consolidated, THE System SHALL use a single handler function imported by both `serve.js` and `api/fallback.js`

### Requirement 8: Configuration Externalization

**User Story:** As a developer, I want all configuration values in external config files, so that I can change settings without modifying code.

#### Acceptance Criteria

1. THE System SHALL extract all Google Apps Script URLs from code into `config.json`
2. THE System SHALL provide configuration for: `googleSheetUrl`, `defaultPort`, `defaultHost`, `sessionTokenName`, `authCookieNames`, `corsOrigins`
3. THE System SHALL document which configuration changes require server restart
4. THE System SHALL validate configuration on server startup and log warnings for missing values
5. THE System SHALL provide environment variable overrides for: `PORT`, `HOST`, `AUTH_USERNAME`, `AUTH_PASSWORD`, `GOOGLE_SHEET_URL`
6. THE System SHALL support loading configuration from: `.env` file, environment variables, `config.json` (in that precedence order)

### Requirement 9: Change Validation Workflow

**User Story:** As a developer, I want an automated workflow to validate that changes have been applied correctly, so that I can confirm modifications took effect.

#### Acceptance Criteria

1. THE System SHALL provide a validation script that checks file modification timestamps
2. THE Validation_Script SHALL verify that modified files are being served (not cached versions)
3. THE Validation_Script SHALL test API endpoints and compare responses to expected values
4. THE Validation_Script SHALL check for syntax errors in modified JavaScript files
5. THE Validation_Script SHALL verify server restart after code changes
6. THE Validation_Script SHALL check browser localStorage/Redux state for expected values after UI changes
7. THE Validation_Script SHALL generate a validation report listing: files modified, server restart status, endpoint test results, syntax check results

### Requirement 10: Development Mode with Auto-Restart

**User Story:** As a developer, I want the server to automatically restart when I make changes, so that I can see the effects immediately without manual restarts.

#### Acceptance Criteria

1. THE System SHALL provide a development mode script that watches for file changes
2. WHEN a file in the watch list is modified, THE Dev_Server SHALL restart automatically within 2 seconds
3. THE Dev_Server SHALL watch: `serve.js`, `api/*.js`, `config.json`, `.env`, `users.json`
4. THE Dev_Server SHALL log restart events with timestamps and triggering file names
5. THE Dev_Server SHALL preserve console history across restarts
6. THE Dev_Server SHALL use `nodemon` or equivalent for process management
7. THE Dev_Server SHALL NOT restart for changes to: `logs/*`, `api-static/*`, `_next/*`, `pages/*`, `node_modules/*`

### Requirement 11: Logging Standardization

**User Story:** As a developer, I want consistent logging across all components, so that I can trace issues effectively.

#### Acceptance Criteria

1. THE System SHALL log all API requests with: timestamp, method, URL, status code, response time
2. THE System SHALL log authentication events: login attempts (success/failure), logout events, session validations
3. THE System SHALL log cart sync events: Add to Cart, Update Item, Confirm Order, Google Sheets sync (success/failure)
4. THE System SHALL log file serving: static file requests, SPA fallback triggers, 404 errors
5. THE System SHALL write logs to: console (for development), `logs/server.log` (for production), `logs/cart-sync.log` (for cart events)
6. THE System SHALL provide log levels: DEBUG, INFO, SUCCESS, WARNING, ERROR
7. THE System SHALL rotate log files when they exceed 10MB

### Requirement 12: Client-Side Script Loading Audit

**User Story:** As a developer, I want to know how client-side scripts are loaded and in what order, so that I can debug initialization issues.

#### Acceptance Criteria

1. THE Documentation SHALL list all `<script>` tags in `index.html` with their execution order
2. THE Documentation SHALL document scripts loaded in `<head>` vs `<body>`
3. THE Documentation SHALL identify scripts that MUST execute before React hydration: `early-hydrate.js`
4. THE Documentation SHALL document scripts that attach global event listeners: `custom-cart-sync.js`
5. THE Documentation SHALL identify scripts that modify Redux state directly
6. THE Documentation SHALL document the injection mechanism for `custom-cart-sync.js` into the page
7. THE Documentation SHALL explain the timing of script execution relative to Next.js boot-up

### Requirement 13: Redux State Management Documentation

**User Story:** As a developer, I want documentation of how Redux state is managed and persisted, so that I can debug state-related issues.

#### Acceptance Criteria

1. THE Documentation SHALL document all Redux slice names: `cartData`, `selectionData`, etc.
2. THE Documentation SHALL document all action types used by custom scripts: `cartData/setCartItems`, `cartData/setCartFromOrder`, `cartData/increaseQuantity`, `selection/setCurrentStep`, `selection/setIsNextStepDisabled`
3. THE Documentation SHALL explain how Redux persist works with localStorage keys
4. THE Documentation SHALL document the cart item data structure stored in Redux state
5. THE Documentation SHALL explain the relationship between `window.__store` and React components
6. THE Documentation SHALL document when Redux state is cleared (logout, cart reset, etc.)
7. THE Documentation SHALL identify all places in code that directly dispatch Redux actions outside of React components

### Requirement 14: Error Handling Audit

**User Story:** As a developer, I want comprehensive error handling throughout the system, so that failures provide actionable debugging information.

#### Acceptance Criteria

1. THE Server SHALL catch and log all unhandled exceptions with stack traces
2. WHEN an API endpoint fails, THE Server SHALL return a JSON error response with: `error: true`, `message: string`, `details: object`
3. WHEN Google Sheets sync fails, THE System SHALL save data locally and notify the user
4. WHEN authentication fails, THE Server SHALL return HTTP 401 with error details
5. THE Server SHALL handle malformed request bodies gracefully without crashing
6. WHEN a static file is not found, THE Server SHALL try SPA fallback before returning 404
7. THE Client_Scripts SHALL wrap all async operations in try-catch blocks and log errors to `/api/logs/write`

### Requirement 15: File Path Resolution Documentation

**User Story:** As a developer, I want clear documentation of how file paths are resolved, so that I can place files in the correct locations.

#### Acceptance Criteria

1. THE Documentation SHALL explain the difference between absolute paths and workspace-relative paths
2. THE Documentation SHALL document how `__dirname` is used in `serve.js` to resolve file paths
3. THE Documentation SHALL document the search paths for static JSON files: `api-static/nested/path.json`, `api-static/vdplshop.in_api_path.json`, `pages/vdplshop.in_api_path.json`
4. THE Documentation SHALL document the icon upload storage path: `icon/dynamic/My_Icons/` and metadata file location
5. THE Documentation SHALL explain how URL paths map to filesystem paths for static assets
6. THE Documentation SHALL document the `.env` file search paths checked on startup
7. THE Documentation SHALL explain path normalization between Windows and Unix systems

### Requirement 16: Dependency Audit and Documentation

**User Story:** As a developer, I want a complete list of runtime dependencies and their purposes, so that I can understand what needs to be installed.

#### Acceptance Criteria

1. THE Documentation SHALL list all Node.js package dependencies from `package.json`
2. FOR EACH dependency, THE Documentation SHALL explain its purpose in the system
3. THE Documentation SHALL identify required dependencies vs optional dependencies
4. THE Documentation SHALL document the minimum Node.js version required
5. THE Documentation SHALL list all client-side library dependencies loaded via CDN: `html2canvas`
6. THE Documentation SHALL document the installation command: `npm install`
7. THE Documentation SHALL document the server start command for development: `node serve.js` or `npm run dev`

### Requirement 17: API Static Data Management

**User Story:** As a developer, I want to understand how static API data is organized and served, so that I can update mock API responses correctly.

#### Acceptance Criteria

1. THE Documentation SHALL explain the dual naming convention: nested paths (`api-static/auth/session.json`) vs flat prefixed names (`api-static/vdplshop.in_api_auth_session.json`)
2. THE Documentation SHALL document the API data resolution precedence for each naming style
3. THE Documentation SHALL identify which static JSON files are served directly vs processed by handlers
4. THE Documentation SHALL document special handling for: `icons.json` (merged with custom icons), `userSettings/*.json` (wildcard matching)
5. THE Documentation SHALL explain how to add a new mock API endpoint with static data
6. THE Documentation SHALL document the expected JSON structure for each API endpoint
7. THE Documentation SHALL identify which API endpoints forward to Google Apps Script vs return static data

### Requirement 18: Session and Cookie Management Documentation

**User Story:** As a developer, I want comprehensive documentation of session management, so that I can modify session behavior safely.

#### Acceptance Criteria

1. THE Documentation SHALL document all cookie attributes: `Path`, `HttpOnly`, `SameSite`, `Max-Age`
2. THE Documentation SHALL explain why multiple session cookies are set: `session_token` and `next-auth.session-token`
3. THE Documentation SHALL document cookie lifetime (currently session cookies, no expiry)
4. THE Documentation SHALL explain the role of the `logged_in` cookie
5. THE Documentation SHALL document cookies used for user info: `auth_email`, `auth_role`
6. THE Documentation SHALL explain cookie validation in the authentication middleware
7. THE Documentation SHALL document how cookies are cleared on logout

### Requirement 19: Cart Edit Flow Documentation

**User Story:** As a developer, I want detailed documentation of the cart edit flow, so that I can debug edit-related issues.

#### Acceptance Criteria

1. THE Documentation SHALL document the complete edit flow: Dashboard Edit button → URL with `?cart=ID` → localStorage → Redux restore → Customizer page → Update Item button → Redux update → Dashboard
2. THE Documentation SHALL explain the purpose of localStorage keys: `sc_editing_item_id` (tracks which item), `sc_editing_item_data` (backup data)
3. THE Documentation SHALL document when editing state is cleared
4. THE Documentation SHALL explain the dual restoration mechanism: `early-hydrate.js` (pre-React) and `custom-cart-sync.js` (post-React)
5. THE Documentation SHALL document how the "Add to Cart" button changes to "Update Item" in edit mode
6. THE Documentation SHALL explain the forced page reload to root URL (`/?cart=ID`) on edit button click
7. THE Documentation SHALL document the Redux action types used for restoration: `cartData/setCartFromOrder`

### Requirement 20: Testing and Validation Tools

**User Story:** As a developer, I want automated testing tools to verify system behavior, so that I can catch regressions early.

#### Acceptance Criteria

1. THE System SHALL provide a test script that validates: server starts successfully, authentication endpoints work, API endpoints return expected data, static files are served correctly
2. THE Test_Script SHALL test the complete auth flow: login → session check → protected route access → logout
3. THE Test_Script SHALL test cart operations: add item → update item → sync to Google Sheets
4. THE Test_Script SHALL test file resolution: static assets, API endpoints, SPA fallback routes
5. THE Test_Script SHALL verify environment variable loading and configuration merging
6. THE Test_Script SHALL test error handling: invalid credentials, missing files, malformed requests
7. THE Test_Script SHALL generate a test report with pass/fail status for each test case

