import { create } from 'zustand'
import type { ProductCartSnapshot } from '@/entities/product/@x/cart'
import type { CartState } from './types'

type CartStore = {
  lines: CartState
  add: (product: ProductCartSnapshot, quantity: number) => void
  remove: (productId: number) => void
  clear: () => void
}

export const useCartStore = create<CartStore>((set) => ({
  lines: {},
  add: (product, quantity) =>
    set((state) => {
      const prev = state.lines[product.id]
      const nextQuantity = (prev?.quantity ?? 0) + quantity
      return {
        lines: {
          ...state.lines,
          [product.id]: { product, quantity: nextQuantity },
        },
      }
    }),
  remove: (productId) =>
    set((state) => {
      if (!(productId in state.lines)) return state
      const lines = { ...state.lines }
      delete lines[productId]
      return { lines }
    }),
  clear: () => set({ lines: {} }),
}))
