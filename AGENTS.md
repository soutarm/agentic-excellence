# Project Mandates

You are working on a React Native app inside an Nx monorepo. These instructions take precedence over general defaults when working in this repository.

## Core Architecture

- **App:** React Native with TypeScript (strict).
- **Monorepo:** Nx. Apps live in `apps/`, shared code lives in `libs/`.
- **Data:** RTK Query for all server data.
- **Testing:** Jest and React Testing Library.

Dependency rule: apps may import any library, but libraries must never import from `apps/`.

## Engineering Standards

### Data and State

- **Data fetching:** use the RTK Query hooks from the shared delivery library (for example the products and cart hooks). Do not call `fetch` or `axios` directly from components. The shared hooks handle authentication, caching and retries.
- **Server state vs UI state:** server data lives in RTK Query. Component state is for UI only. Do not copy server data into local state.
- **Cart changes:** go through the cart API hooks, not local state.
- **Errors:** surface API errors through the shared error handling hook. Do not leave failures silent.
- **Analytics:** user actions such as adding to cart must be tracked with the telemetry hook.

### UI

- Use the shared components from the elements library (buttons, lists, cards) and colours and spacing from the shared theme.
- Do not hard-code colours, and avoid raw React Native touchables for buttons.
- Every interactive element needs an accessibility label and role.

### Naming and Style

- Files and folders use kebab-case.
- Follow the naming pattern already used in the area you touch.
- Do not use nested ternary expressions. Prefer `if`/`else`, early returns, or named intermediate variables.
- Prefix boolean variables and constants with `is` or `has` (for example `isOutOfStock`, `hasItems`). Never use `should` or `can` as a prefix, it is too ambiguous.
- Do not use emojis or em dashes in code, comments, commit messages, or generated copy. Use plain punctuation instead.
- Keep code comments short, ideally one line, written so a non-technical reader can follow the gist.

### Type Safety

- TypeScript strict. No `any` unless there is a specific, defensible reason.
- Treat tokens and keys as secrets. Never hardcode or print them.

## Testing and Validation

- Run targeted tests for the area you changed before broadening scope.
- Run lint and typecheck before completing any change.
- Keep tests and snapshots in sync with intentional UI changes.

## Safe Change Rules

- Keep changes small and local. Avoid opportunistic refactors unless they are required for the task.
- Do not introduce a new data fetching or global state approach. Extend the existing RTK Query APIs.
- Do not invent backend dependencies. Use the existing APIs.
- Do not edit generated files or build output by hand.

## Delivery Standard

Successful work follows the conventions above and leaves tests, lint and typechecking passing.
