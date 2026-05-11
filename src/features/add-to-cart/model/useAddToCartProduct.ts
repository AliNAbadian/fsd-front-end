import { useMemo, useCallback } from 'react'
import type { Product } from '@/entities/product'
import { useAddToCart, useCartState } from '@/entities/cart'
import { MAX_UNITS_PER_PRODUCT } from '../config/limits'
import { toProductSnapshot } from '../lib/product-snapshot'
import { remainingCapacity } from '../lib/remaining-capacity'

export function useAddToCartProduct(product: Product) {
  const add = useAddToCart()
  const cart = useCartState()

  const snapshot = useMemo(() => toProductSnapshot(product), [product])

  const quantityInCart = cart[product.id]?.quantity ?? 0
  const slotsLeft = remainingCapacity(quantityInCart, MAX_UNITS_PER_PRODUCT)
  const canAdd = slotsLeft > 0

  const addOne = useCallback(() => {
    if (!canAdd) return
    add(snapshot, 1)
  }, [add, snapshot, canAdd])

  return { addOne, canAdd, quantityInCart, slotsLeft, maxPerProduct: MAX_UNITS_PER_PRODUCT }
}
