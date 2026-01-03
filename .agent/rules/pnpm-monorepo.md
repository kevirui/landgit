---
trigger: always_on
---

Monorepo rules:

- Use workspace dependencies (@repo/\*)
- Never import across apps directly
- Prefer shared packages instead of duplication
- Ensure path aliases are consistent with tsconfig
