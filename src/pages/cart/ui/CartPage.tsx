import { useCartState, useClearCart } from '@/entities/cart'
import { RemoveFromCartButton } from '@/features/remove-from-cart'
import { Button } from '@/shared/ui/button'
import { Link } from 'react-router-dom'

function formatPrice(value: number) {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value)
}

export function CartPage() {
  const lines = useCartState()
  const clear = useClearCart()
  const items = Object.values(lines)

  const subtotal = items.reduce((sum, line) => sum + line.product.price * line.quantity, 0)

  return (
    <div className="px-5 py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-3xl font-semibold text-zinc-900 dark:text-zinc-100">Your cart</h1>

        {items.length === 0 ? (
          <p className="text-zinc-600 dark:text-zinc-400">
            Cart is empty.{' '}
            <Link className="font-medium text-violet-600 underline dark:text-violet-400" to="/">
              Browse catalog
            </Link>
          </p>
        ) : (
          <>
            <ul className="flex flex-col gap-4">
              {items.map((line) => (
                <li
                  key={line.product.id}
                  className="flex gap-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
                >
                  <img
                    src={line.product.image}
                    alt=""
                    className="h-20 w-20 shrink-0 rounded-lg bg-zinc-100 object-contain p-2 dark:bg-zinc-800"
                  />
                  <div className="min-w-0 flex-1 text-left">
                    <Link
                      to={`/product/${line.product.id}`}
                      className="font-medium text-zinc-900 hover:text-violet-600 dark:text-zinc-100 dark:hover:text-violet-400"
                    >
                      {line.product.title}
                    </Link>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      {formatPrice(line.product.price)} × {line.quantity}
                    </p>
                    <RemoveFromCartButton className="mt-2" productId={line.product.id} />
                  </div>
                  <p className="shrink-0 font-medium tabular-nums text-zinc-900 dark:text-zinc-100">
                    {formatPrice(line.product.price * line.quantity)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
              <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Subtotal <span className="tabular-nums">{formatPrice(subtotal)}</span>
              </p>
              <Button variant="ghost" onClick={clear}>
                Clear cart
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
