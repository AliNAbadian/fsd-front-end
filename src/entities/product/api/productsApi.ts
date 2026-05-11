import { fakeStorePath, requestJson } from '@/shared/api'
import type { Product } from '../model/types'

export async function fetchProducts(): Promise<Product[]> {
  return requestJson<Product[]>(fakeStorePath('/products'))
}

export async function fetchProductById(id: number): Promise<Product> {
  return requestJson<Product>(fakeStorePath(`/products/${id}`))
}
