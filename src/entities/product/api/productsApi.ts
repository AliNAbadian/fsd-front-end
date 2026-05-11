import { fakeStorePath, requestJson } from '@/shared/api'
import { USE_MOCK_PRODUCT_API } from '@/shared/config'
import type { Product } from '../model/types'
import { MOCK_PRODUCTS } from './mockProducts'

function mockLatencyMs() {
  return 120 + Math.floor(Math.random() * 120)
}

async function withMockDelay<T>(value: T): Promise<T> {
  await new Promise((r) => setTimeout(r, mockLatencyMs()))
  return structuredClone(value)
}

export async function fetchProducts(): Promise<Product[]> {
  if (USE_MOCK_PRODUCT_API) {
    return withMockDelay(MOCK_PRODUCTS)
  }
  return requestJson<Product[]>(fakeStorePath('/products'))
}

export async function fetchProductById(id: number): Promise<Product> {
  if (USE_MOCK_PRODUCT_API) {
    const found = MOCK_PRODUCTS.find((p) => p.id === id)
    if (!found) {
      throw new Error(`Product ${id} not found`)
    }
    return withMockDelay(found)
  }
  return requestJson<Product>(fakeStorePath(`/products/${id}`))
}
