import type { Product } from './types'

/**
 * Whether this product can be sold / added to cart from a catalog perspective.
 * Prefer explicit {@link Product.inStock} from the API when you have it.
 */
export function isProductAvailable(product: Product): boolean {
  if (product.inStock === false) {
    return false
  }

  if (!Number.isInteger(product.id) || product.id <= 0) {
    return false
  }

  if (!product.title.trim()) {
    return false
  }

  if (!Number.isFinite(product.price) || product.price <= 0) {
    return false
  }

  if (!product.image.trim()) {
    return false
  }

  const { rate, count } = product.rating
  if (!Number.isFinite(rate) || !Number.isFinite(count) || count < 0) {
    return false
  }

  return true
}
