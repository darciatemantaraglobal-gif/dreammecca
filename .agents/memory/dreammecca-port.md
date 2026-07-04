---
name: Dreammecca port notes
description: Durable decisions and pitfalls from porting this Replit-native Vite app to the pnpm workspace.
---

**This project was already Vite+React at import time** — not a Next.js app, so no routing conversion was needed.

**app.ts middleware gap — always check this when auth is involved.**
The scaffold generates a minimal app.ts without auth middleware. When the backup has auth, diff app.ts carefully and restore: `cors({ credentials: true, origin: true })`, `cookieParser()`, and `app.use(authMiddleware)`. Without these, session-based auth silently fails.

**Copy public/ assets — reviewers will catch omissions.**
Static assets (images/, videos/) in `public/` must be explicitly copied from backup. They are not source files so tools like rsync/cp globs are needed — don't rely on source-file copies alone.

**Why:** Auth middleware and static assets are invisible to typecheck but break the UI and auth flows in production.
