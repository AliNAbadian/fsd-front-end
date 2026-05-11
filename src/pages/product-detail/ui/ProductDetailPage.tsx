import { ProductDetails } from '@/widgets/product-details'
import { useProductQuery } from '@/entities/product'
import { Link, useParams } from 'react-router-dom'

export function ProductDetailPage() {
  const { productId } = useParams()
  const id = Number(productId)
  const { data, isPending, isError, error } = useProductQuery(id)

  if (!Number.isFinite(id) || id <= 0) {
    return (
      <div className="px-5 py-10">
        <p className="text-center text-red-600 dark:text-red-400" role="alert">
          Invalid product.
        </p>
        <p className="mt-4 text-center">
          <Link className="text-violet-600 underline dark:text-violet-400" to="/">
            Back to catalog
          </Link>
        </p>
      </div>
    )
  }

  if (isPending) {
    return <p className="px-5 py-16 text-center text-zinc-500 dark:text-zinc-400">Loading…</p>
  }

  if (isError) {
    return (
      <p className="px-5 py-16 text-center text-red-600 dark:text-red-400" role="alert">
        {error instanceof Error ? error.message : 'Could not load product.'}
      </p>
    )
  }

  if (!data) {
    return null
  }

  return (
    <div className="px-5 py-8">
      <Link
        to="/"
        className="mb-6 inline-block text-sm font-medium text-violet-600 hover:text-violet-500 dark:text-violet-400"
      >
        ← Back to catalog
      </Link>
      <ProductDetails product={data} />
    </div>
  )
}
