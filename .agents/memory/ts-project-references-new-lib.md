---
name: Adding a new lib/* package to TS project references
description: Steps needed so a newly added workspace lib package doesn't break typecheck for consumers
---

This monorepo wires internal `lib/*` packages together via TypeScript project
references (root `tsconfig.json` `references`, plus each consumer's own
`references`). When adding a new lib package (e.g. copying a template like
`replit-auth-web`) and referencing it from an app:

1. Its `tsconfig.json` must set `"composite": true` (and typically
   `"declarationMap": true`, `"emitDeclarationOnly": true`, `"outDir": "dist"`)
   to match sibling lib packages — otherwise consumers fail with
   TS6306 ("must have setting composite").
2. The declaration output must actually be built once via the root
   `pnpm run typecheck:libs` (`tsc --build`) — otherwise consumers fail with
   TS6305 ("Output file ... has not been built from source file ...").
3. Avoid referencing ambient types (like `vite/client`) inside a shared lib
   package unless it depends on vite directly — prefer a local inline cast
   (e.g. for `import.meta.env`) to dodge "Cannot find type definition file".

**Why:** TS project references require dependency projects to be pre-built;
skipping the build step or composite flag silently breaks every downstream
package's typecheck with confusing, unrelated-looking errors.

**How to apply:** After adding/copying a new lib package and wiring it into
`references`, always run `pnpm run typecheck:libs` before typechecking the
consuming app.
