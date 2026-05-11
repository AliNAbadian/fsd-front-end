export function remainingCapacity(currentQty: number, maxPerProduct: number): number {
  return Math.max(0, maxPerProduct - currentQty)
}
