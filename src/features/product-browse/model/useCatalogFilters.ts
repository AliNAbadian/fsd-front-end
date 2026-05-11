import { useMemo, useState } from 'react'
import type { Product } from '@/entities/product'
import { filterProducts } from '../lib/filterProducts'

const ALL = 'all'

export function useCatalogFilters(products: Product[] | undefined) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string>(ALL)

  const categories = useMemo(() => {
    if (!products?.length) return []
    const unique = new Set(products.map((p) => p.category))
    return [...unique].sort((a, b) => a.localeCompare(b))
  }, [products])

  const filtered = useMemo(
    () => filterProducts(products ?? [], { search, category }),
    [products, search, category],
  )

  return {
    search,
    setSearch,
    category,
    setCategory,
    categories,
    filtered,
    allCategoryValue: ALL,
  }
}
