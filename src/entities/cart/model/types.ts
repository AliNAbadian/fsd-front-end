import type { ProductCartSnapshot } from '@/entities/product/@x/cart'

export type CartLine = {
  product: ProductCartSnapshot
  quantity: number
}

export type CartState = Record<number, CartLine>
