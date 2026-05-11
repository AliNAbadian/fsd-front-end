import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../api/productsApi'

export const productsQueryKey = ['products'] as const

export function useProductsQuery() {
  return useQuery({
    queryKey: productsQueryKey,
    queryFn: fetchProducts,
    staleTime: 60_000,
  })
}
