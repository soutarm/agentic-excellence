# Project Mandates

This repository holds three short interview exercises for a frontend engineering role at 7-Eleven Australia. The files come from a larger React Native and React codebase, and its team conventions are listed below. These instructions take precedence over general defaults when working in this repository.

## What is in this repo

All exercise code is in `components/`:

- `components/debug.jsx`: a small React counter component (Task 1, fix a bug).
- `components/product-list.tsx`: a product list screen written by an AI agent (Task 2, code review).
- `components/create.jsx`: a starter file for a To-Do list (Task 3, build a feature).

`README.md` is the candidate guide and describes each task. There is no `package.json`, build, linting or test setup in this repo.

## Working in this repo

- Only change the file the current task is about. Do not touch the other exercise files.
- Task 2 is a review. Do not edit `components/product-list.tsx` unless you are explicitly asked to. Give review comments instead.
- Do not add dependencies, config files or tooling unless asked.
- Keep solutions small and readable. A working, simple answer is better than a large one.
- Explain what you changed and why, in plain language.

## Conventions for React code

These apply to the plain React files (`debug.jsx`, `create.jsx`).

- Use function components and hooks. Keep values that change the screen in state (`useState`), not in plain variables.
- Never change state directly. Create a new array or object instead.
- Give every list item a stable, unique `key`. Do not use the array index.
- Handle empty and invalid input, for example do not add a blank task.
- Every interactive element needs a clear label and must work with the keyboard.

## Conventions for the wider app

The product list is meant to follow the rules of the real app it comes from. The shared libraries below exist in that app, not in this repo, so use them as the standard to review against.

- **Data fetching:** use the shared RTK Query hooks (for example the products and cart hooks). Do not call `fetch` or `axios` directly from components. The shared hooks handle authentication, caching and retries.
- **Server state vs UI state:** server data lives in RTK Query. Component state is for UI only. Do not copy server data into local state.
- **Cart changes:** go through the cart API hooks, not local state.
- **Errors:** surface API errors through the shared error handling hook. Do not leave failures silent.
- **Analytics:** user actions such as adding to cart must be tracked with the telemetry hook.
- **UI:** use the shared components (buttons, lists, cards) and the shared theme for colours and spacing. Do not hard-code colours, and avoid raw React Native touchables for buttons.
- **Accessibility:** every interactive element needs an accessibility label and role.
- **Types:** TypeScript strict. No `any` unless there is a specific, defensible reason.

## Naming and style

- Files and folders use kebab-case.
- Do not use nested ternary expressions. Prefer `if`/`else`, early returns, or named intermediate variables.
- Prefix boolean variables and constants with `is` or `has` (for example `isOutOfStock`, `hasItems`). Never use `should` or `can` as a prefix, it is too ambiguous.
- Do not use emojis or em dashes in code, comments, commit messages, or generated copy. Use plain punctuation instead.
- Keep code comments short, ideally one line, written so a non-technical reader can follow the gist.
- Treat tokens and keys as secrets. Never hardcode or print them.

## Delivery standard

Successful work fixes only what the task asks, follows the conventions above, and can be explained clearly by the person who wrote it.
