import type { Product } from '../model/types'

/** Narrow type exposed to other entities (e.g. cart) — see FSD @x public API. */
export type { Product }
export type ProductCartSnapshot = Pick<Product, 'id' | 'title' | 'price' | 'image' | 'category'>
