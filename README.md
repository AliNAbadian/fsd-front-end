# fsd-front-end

Sample [Feature-Sliced Design](https://feature-sliced.design/) application: a small **product catalog** with search, category filter, product details, and a **shopping cart**. The layout is meant to show **layers**, **slices**, **segments**, **public APIs**, and the **`@x` cross-import** pattern between entities.

## Stack

- React 19, TypeScript, Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router
- TanStack Query (server state)
- Zustand (client global state — cart)
- ESLint + typescript-eslint

## Requirements

- Node.js compatible with the current Vite/TypeScript toolchain (see `package.json` engines if added later)

## Scripts

```bash
npm install
npm run dev      # development server
npm run build    # typecheck + production bundle
npm run lint     # eslint
npm run preview  # serve dist/ locally
```

## Architecture

Source lives under `src/` with path alias **`@/`** → `src/` (see `tsconfig.app.json` and `vite.config.ts`).

| Layer   | Role (this repo) |
|--------|-------------------|
| `app`  | Providers, router, layout shell |
| `pages` | Route-level screens (`catalog`, `product-detail`, `cart`) |
| `widgets` | Composed blocks (`site-header`, `product-details`) |
| `features` | User flows (`product-browse`, `add-to-cart`, …) |
| `entities` | Business slices (`product`, `cart`) |
| `shared`  | API client, config, UI primitives |

Slices expose a **public API** through their root `index.ts` (explicit exports; no `export *`). Cross-entity types for the cart use **`entities/product/@x/cart.ts`** as in the [FSD public API docs](https://feature-sliced.design/docs/reference/public-api).

Project conventions for the AI/team are summarized in `.cursor/rules/feature-sliced-design.mdc`.

## Demo behavior

- **`/`** — List products from [Fake Store API](https://fakestoreapi.com/), search and filter by category; cards link to a detail page.
- **`/product/:productId`** — Product detail and add-to-cart (per-product limit enforced in the `add-to-cart` feature config).
- **`/cart`** — Cart lines, remove line, clear cart. Header shows cart count.

**Note:** Catalog and product pages need network access to `fakestoreapi.com`.

## Optional tooling

To enforce import boundaries automatically, consider [Steiger](https://github.com/feature-sliced/steiger) against the official FSD ruleset.

## License

Private project (`"private": true` in `package.json`). Add a license file if you open-source the repo.
