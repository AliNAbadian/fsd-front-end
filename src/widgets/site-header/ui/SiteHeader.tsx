import { CartIndicator } from '@/features/cart-indicator'
import { Link } from 'react-router-dom'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 px-5 py-3 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 outline-none ring-violet-500/40 focus-visible:ring-2 dark:text-zinc-100"
        >
          Demo store
        </Link>
        <nav className="flex items-center gap-2" aria-label="Main">
          <Link
            to="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 outline-none ring-violet-500/40 hover:bg-zinc-100 focus-visible:ring-2 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Catalog
          </Link>
          <CartIndicator />
        </nav>
      </div>
    </header>
  )
}
