import type { ReactNode } from 'react'
import type { Product } from '../model/types'

type ProductDetailsViewProps = {
  product: Product
  actionsSlot?: ReactNode
}

function formatPrice(value: number) {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value)
}

export function ProductDetailsView({ product, actionsSlot }: ProductDetailsViewProps) {
  const { title, image, category, price, description, rating } = product

  return (
    <div className="grid gap-8 md:grid-cols-2 md:gap-10">
      <div className="flex aspect-square items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-100 p-8 dark:border-zinc-800 dark:bg-zinc-800/60">
        <img
          src={image}
          alt={title}
          className="max-h-[85%] max-w-[85%] object-contain mix-blend-multiply dark:mix-blend-normal dark:brightness-105"
          decoding="async"
        />
      </div>
      <div className="flex flex-col gap-4 text-left">
        <p className="text-sm font-medium capitalize tracking-wide text-violet-600 dark:text-violet-400">
          {category}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {rating.rate.toFixed(1)} ★ · {rating.count} reviews
        </p>
        <p className="text-2xl font-semibold tabular-nums text-zinc-900 dark:text-zinc-100">
          {formatPrice(price)}
        </p>
        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">{description}</p>
        {actionsSlot ? <div className="pt-2">{actionsSlot}</div> : null}
      </div>
    </div>
  )
}
