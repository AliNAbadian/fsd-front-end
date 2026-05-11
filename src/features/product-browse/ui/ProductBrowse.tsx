import { Link } from 'react-router-dom'
import { ProductCard, useProductsQuery } from '@/entities/product'
import { USE_MOCK_PRODUCT_API } from '@/shared/config'
import { useCatalogFilters } from '../model/useCatalogFilters'

export function ProductBrowse() {
  const { data, isPending, isError, error } = useProductsQuery()
  const {
    search,
    setSearch,
    category,
    setCategory,
    categories,
    filtered,
    allCategoryValue,
  } = useCatalogFilters(data)

  return (
    <section
      className="box-border w-full px-5 pb-10 pt-5 text-left"
      aria-labelledby="catalog-heading"
    >
      <header className="mx-auto mb-5 max-w-prose">
        <h1
          id="catalog-heading"
          className="mb-1.5 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Product catalog
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          Search by title or description, filter by category.
          {USE_MOCK_PRODUCT_API ? (
            <>
              {' '}
              Data is a <strong className="font-medium text-zinc-800 dark:text-zinc-200">local mock</strong>{' '}
              catalog (no network). Set <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">VITE_USE_FAKESTORE_API=true</code> to use the live{' '}
              <a
                className="font-medium text-violet-600 underline decoration-violet-600/30 underline-offset-2 hover:text-violet-500 dark:text-violet-400 dark:decoration-violet-400/30 dark:hover:text-violet-300"
                href="https://fakestoreapi.com/"
                target="_blank"
                rel="noreferrer"
              >
                Fake Store API
              </a>
              .
            </>
          ) : (
            <>
              {' '}
              Data from{' '}
              <a
                className="font-medium text-violet-600 underline decoration-violet-600/30 underline-offset-2 hover:text-violet-500 dark:text-violet-400 dark:decoration-violet-400/30 dark:hover:text-violet-300"
                href="https://fakestoreapi.com/"
                target="_blank"
                rel="noreferrer"
              >
                Fake Store API
              </a>
              .
            </>
          )}
        </p>
      </header>

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <label className="sr-only" htmlFor="product-search">
          Search products
        </label>
        <input
          id="product-search"
          className="min-w-[220px] flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-base text-zinc-900 shadow-sm outline-none ring-violet-500/40 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500"
          type="search"
          placeholder="Search…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
        />
        <label className="sr-only" htmlFor="product-category">
          Filter by category
        </label>
        <select
          id="product-category"
          className="min-w-[11rem] rounded-lg border border-zinc-200 bg-white px-3 py-2 text-base text-zinc-900 shadow-sm outline-none ring-violet-500/40 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={isPending || isError || !categories.length}
        >
          <option value={allCategoryValue}>All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {isPending ? (
        <p className="mx-auto my-8 text-center text-zinc-600 dark:text-zinc-400" role="status">
          Loading products…
        </p>
      ) : null}

      {isError ? (
        <p
          className="mx-auto my-8 text-center text-red-600 dark:text-red-400"
          role="alert"
        >
          {error instanceof Error ? error.message : 'Something went wrong.'}
        </p>
      ) : null}

      {!isPending && !isError && data ? (
        <>
          <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Showing {filtered.length} of {data.length} products
          </p>
          {filtered.length === 0 ? (
            <p className="my-8 text-center text-zinc-600 dark:text-zinc-400">
              No products match your filters.
            </p>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
              {filtered.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="block rounded-xl outline-none ring-violet-500/40 focus-visible:ring-2"
                >
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>
          )}
        </>
      ) : null}
    </section>
  )
}
