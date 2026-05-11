# fsd-front-end

Sample [Feature-Sliced Design](https://feature-sliced.design/) application: a small **product catalog** with search, category filter, product details, and a **shopping cart**. The layout is meant to show **layers**, **slices**, **segments**, **public APIs**, and the **`@x` cross-import** pattern between entities.

## Stack

- React 19, TypeScript, Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router
- TanStack Query (server state)
- Axios (HTTP)
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
| `shared`  | HTTP client (Axios), config, UI primitives |

Slices expose a **public API** through their root `index.ts` (explicit exports; no `export *`). Cross-entity types for the cart use **`entities/product/@x/cart.ts`** as in the [FSD public API docs](https://feature-sliced.design/docs/reference/public-api).

Project conventions for the AI/team are summarized in `.cursor/rules/feature-sliced-design.mdc`.

## Demo behavior

- **`/`** — Product list with search and category filter; cards link to product detail.
- **`/product/:productId`** — Detail + add to cart (per-product limit in `features/add-to-cart`).
- **`/cart`** — Lines, remove, clear; header shows quantity.

**Data source:** By default the app uses a **bundled mock catalog** in `entities/product/api/mockProducts.ts` (works offline). To use the live HTTP API instead, set in `.env`:

`VITE_USE_FAKESTORE_API=true`

and restart the dev server. That calls [Fake Store API](https://fakestoreapi.com/) (requires network).

## Optional tooling

To enforce import boundaries automatically, consider [Steiger](https://github.com/feature-sliced/steiger) against the official FSD ruleset.

## License

Private project (`"private": true` in `package.json`). Add a license file if you open-source the repo.
