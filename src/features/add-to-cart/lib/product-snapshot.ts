import type { Product } from '@/entities/product'
import type { ProductCartSnapshot } from '@/entities/product/@x/cart'

export function toProductSnapshot(product: Product): ProductCartSnapshot {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    category: product.category,
  }
}
