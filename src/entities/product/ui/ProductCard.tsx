import type { Product } from '../model/types'

type ProductCardProps = {
  product: Product
}

function formatPrice(value: number) {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value)
}

export function ProductCard({ product }: ProductCardProps) {
  const { title, image, category, price, rating } = product

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white text-left shadow-md transition-[box-shadow,border-color] hover:border-violet-400/50 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex aspect-square items-center justify-center bg-zinc-100 p-4 dark:bg-zinc-800/80">
        <img
          className="max-h-[72%] max-w-[72%] object-contain mix-blend-multiply dark:mix-blend-normal dark:brightness-105"
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 px-4 pb-4 pt-3.5">
        <span className="text-xs font-medium capitalize tracking-wide text-violet-600 dark:text-violet-400">
          {category}
        </span>
        <h3 className="line-clamp-2 text-[0.95rem] font-semibold leading-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
        <div className="mt-auto flex items-baseline justify-between gap-2 pt-2">
          <span className="font-semibold tabular-nums text-zinc-900 dark:text-zinc-100">
            {formatPrice(price)}
          </span>
          <span
            className="whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400"
            title={`${rating.count} reviews`}
          >
            {rating.rate.toFixed(1)} ★
          </span>
        </div>
      </div>
    </article>
  )
}
