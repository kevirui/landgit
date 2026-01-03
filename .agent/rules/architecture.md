---
trigger: always_on
---

You are working on a monorepo with pnpm and turborepo.

Strict rules:

- landGit/web is Next.js App Router only
- landGit/api is NestJS only
- packages must be framework-agnostic
- No business logic inside packages/ui
- Shared logic goes into packages/shared
- Never duplicate types or schemas
