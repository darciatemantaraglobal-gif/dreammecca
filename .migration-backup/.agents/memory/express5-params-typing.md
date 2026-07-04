---
name: Express 5 req.params typing quirk
description: Why req.params.foo can fail type-checks against typed APIs (e.g. Drizzle eq()) in Express 5 projects
---

In this monorepo's api-server (Express ^5.x), `req.params.<key>` type-checks as
`string | string[]`, not plain `string`. Passing it directly into a strictly-typed
function (e.g. Drizzle's `eq(column, value)`) produces a confusing TS2769
overload-mismatch error that doesn't obviously point at `req.params`.

**Why:** Express 5's route param types account for repeated/wildcard segments
that can yield arrays, so `@types/express-serve-static-core`'s `ParamsDictionary`
value type is broadened.

**How to apply:** When passing a route param into a typed query/API, wrap it
with `String(req.params.id)` at the call site rather than changing global types.
