import type { Product } from '@/entities/product'

export type CatalogFilters = {
  search: string
  category: string
}

export function filterProducts(
  products: Product[],
  { search, category }: CatalogFilters,
): Product[] {
  const q = search.trim().toLowerCase()
  return products.filter((p) => {
    if (category !== 'all' && p.category !== category) return false
    if (!q) return true
    return (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    )
  })
}
