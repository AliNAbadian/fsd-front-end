import { useCartStore } from './cart-store'
import type { CartState } from './types'

export function useCartState(): CartState {
  return useCartStore((s) => s.lines)
}

export function useCartTotalQuantity(): number {
  return useCartStore((s) =>
    Object.values(s.lines).reduce((sum, line) => sum + line.quantity, 0),
  )
}

export function useAddToCart() {
  return useCartStore((s) => s.add)
}

export function useRemoveFromCart() {
  return useCartStore((s) => s.remove)
}

export function useClearCart() {
  return useCartStore((s) => s.clear)
}
