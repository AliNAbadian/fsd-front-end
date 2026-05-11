import { useCartTotalQuantity } from '@/entities/cart'
import { Link } from 'react-router-dom'

export function CartIndicator() {
  const count = useCartTotalQuantity()

  return (
    <Link
      to="/cart"
      className="relative rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 outline-none ring-violet-500/40 hover:bg-zinc-100 focus-visible:ring-2 dark:text-zinc-200 dark:hover:bg-zinc-800"
    >
      Cart
      {count > 0 ? (
        <span className="ml-1 inline-flex min-w-6 justify-center rounded-full bg-violet-600 px-2 py-0.5 text-xs font-semibold text-white dark:bg-violet-500">
          {count}
        </span>
      ) : null}
    </Link>
  )
}
