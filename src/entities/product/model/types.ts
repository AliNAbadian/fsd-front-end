export type ProductRating = {
  rate: number
  count: number
}

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: ProductRating
  /**
   * When the backend sends stock/availability, set this explicitly.
   * If omitted, {@link isProductAvailable} uses catalog-field heuristics.
   */
  inStock?: boolean
}
