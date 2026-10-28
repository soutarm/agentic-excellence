# Project conventions

This is a React Native app inside an Nx monorepo. Follow these rules for all new code.

- **Data fetching:** use the RTK Query hooks from the shared delivery library (for example the products and cart hooks). Do not call `fetch` or `axios` directly from components. The shared hooks handle authentication, caching and retries.
- **Server state vs UI state:** server data lives in RTK Query. Component state is for UI only. Do not copy server data into local state.
- **Cart changes:** go through the cart API hooks, not local state.
- **UI:** use the shared components from the elements library (buttons, lists, cards) and colours and spacing from the shared theme. Do not hard-code colours, and avoid raw React Native touchables for buttons.
- **Errors:** surface API errors through the shared error handling hook. Do not leave failures silent.
- **Analytics:** user actions such as adding to cart must be tracked with the telemetry hook.
- **Types:** TypeScript strict. No `any`.
- **Accessibility:** every interactive element needs an accessibility label and role.
- **Libraries:** libraries must never import from `apps/`.
