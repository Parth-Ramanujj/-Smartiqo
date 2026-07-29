# AGENTS.md — SwitchCraft Static Clone Server (Express.js)

Static clone of [vdplshop.in](https://vdplshop.in) (Next.js SPA). Serves crawled HTML/JS/CSS with API mocking, authentication, and cart synchronization logic.

## Commands & Development Mode

```bash
node serve.js              # Start production server
npm run dev                # Start development server with auto-restart (nodemon)
```

## System Architecture

The system is built on **Express.js** (`serve.js`) handling routing, authentication, API mocking, and static file serving.

### Entry Points
- `serve.js`: Primary Express.js HTTP server.
- `api/shared-api.js`: Centralized API logic (handlers for users, orders, logs, icons).
- `api/fallback.js`: (Legacy) Fallback API handler for Vercel/serverless environments.
- `api/auth.js`: (Legacy) Standalone auth endpoints.
- `api/sync.js`: Standalone sync logic.

### File Location Reference Guide
When requesting changes, refer to this guide to modify the correct files:
- **UI Changes (React/Next.js)**: Modify `index.html` (SPA entry) or `pages/*.html`. Clear browser cache/localStorage if needed. No server restart required.
- **API Behavior & Endpoints**: Modify `api/shared-api.js` or `serve.js`. Check `api-static/` for static JSON responses. **Server restart required**.
- **Authentication**: Modify `api/shared-api.js` (auth endpoints) and `serve.js` (middleware). **Server restart required**.
- **Cart Sync**: Modify `custom-cart-sync.js` (client-side) or `serve.js` (`/api/sync-to-sheet`). Clear Redux persist to test.
- **Static Content**: Add/modify files in `_next/`, `assets/`, `icon/`.
- **Configuration**: Modify `config.json` or `.env`. **Server restart required**.
- **Logging**: Modify `logs/` directory or `serve.js` logging endpoints.

### API Route Resolution System
1. **Dedicated Handlers**: Express routes in `serve.js` (`/api/admin/orders`, `/api/admin/users`, `/api/icons`, `/api/logs/*`).
2. **Static JSON Fallback**: If no dynamic handler matches, `resolveApiJson` looks for static mock data:
   - Nested paths: `api-static/auth/session.json`
   - Flat prefixed names: `api-static/vdplshop.in_api_auth_session.json` (also checks `pages/` dir)
3. **Google Apps Script Proxy**: Endpoints like `/api/sync-to-sheet` proxy directly to a configured GAS URL. 
   - *Note*: Hardcoded GAS URLs are being extracted to `config.json` (`googleSheetUrl`).

### Authentication Flow & Cookie Management
- **Local vs Remote**: Users are checked against `users.json` (local). `AUTH_USERNAME` and `AUTH_PASSWORD` act as fallback admin credentials.
- **Cookies**: 
  - `session_token` and `next-auth.session-token`: Used for authentication state validation.
  - `logged_in`: UI hint for active sessions.
  - `auth_email` and `auth_role`: Stores user context.
- **Flow**: POST `/api/auth/signin` validates credentials → sets cookies (HttpOnly, Lax) → redirects to dashboard.
- **Middleware**: Routes like `/admin` or the root require `session_token`. The `/Login` page bypasses this and redirects if already logged in.

### Cart Synchronization & Edit Flow
- **Data Flow**: UI Action → `custom-cart-sync.js` captures event → updates localStorage (`persist:root`, `persist:cartData`, `persist:cart`) → POSTs to `/api/sync-to-sheet` → proxies to Google Sheets.
- **Edit Flow**: 
  1. Dashboard Edit button triggers URL `?cart=ID`.
  2. `early-hydrate.js` (pre-React) and `custom-cart-sync.js` intercept and restore data using `sc_editing_item_id` and `sc_editing_item_data`.
  3. Redux dispatches `cartData/setCartFromOrder`. UI updates to "Update Item".
- **Cart Data Structure**: Contains `cartData`, `dropped`, `quantity`, `totalPrice`, `screenshotDataUrl`, `productSequence`, `orderName`, `customProductName`.

### Redux State Management
- **Slices**: `cartData`, `selectionData`.
- **Persistence**: Stored in localStorage via `persist:root`.
- **Custom Scripts**: `custom-cart-sync.js` dispatches actions like `cartData/setCartItems`, `cartData/increaseQuantity`, and manipulates `window.__store`.

### Static File Serving Architecture
1. **Path Normalization**: Middleware strips prefixes (`/_next/`, `/assets/`, `/icon/`, `/Image/`).
2. **Explicit Asset Check**: `isAssetPath()` prevents auth middleware from blocking static files.
3. **MIME Mapping**: `mimeMap` object maps extensions to correct content types.
4. **Next.js Image Proxy**: `/_next/image?url=...` serves local images from the decoded URL path.
5. **SPA Fallback**: If a route isn't found and lacks an extension, `serve.js` falls back to `pages/vdplshop.in_*.html` or `index.html`.

### Client-Side Script Loading
- `<script>` tags in `index.html` manage the client environment.
- `early-hydrate.js`: Injected in `<head>`, executes **before** React hydration to inject cart data into localStorage.
- `custom-cart-sync.js`: Attaches global event listeners for cart operations, executes after React mounts.

### File Path Resolution
- **Absolute Paths**: `__dirname` is used to resolve filesystem paths relative to `serve.js`.
- **Search Paths**: APIs look in `api-static/` and `pages/`. Icons are stored in `icon/dynamic/My_Icons/`.

### Dependencies (package.json)
- `express`: Core web server framework.
- `multer`: Middleware for handling `multipart/form-data` (icon uploads).
- `cookie-parser`: Middleware to parse cookies.
- `nodemon`: Development dependency for auto-restarting the server on file changes.

### Configuration (`config.json` & `.env`)
- Config is loaded from `.env` and `config.json`.
- `PORT` and `HOST` overrides available.
- `googleSheetUrl` configured in `config.json`.

### Testing and Validation
- `validate-changes.js`: Script to verify file modification timestamps, routing, and syntax.
- `test-system.js`: Script to test auth flow, cart operations, file resolution, and environment loading.
