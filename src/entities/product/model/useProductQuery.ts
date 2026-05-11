import { useQuery } from '@tanstack/react-query'
import { fetchProductById } from '../api/productsApi'

export const productQueryKey = (id: number) => ['product', id] as const

export function useProductQuery(id: number) {
  return useQuery({
    queryKey: productQueryKey(id),
    queryFn: () => fetchProductById(id),
    enabled: Number.isFinite(id) && id > 0,
  })
}
