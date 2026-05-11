import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'
import type { Product } from '../model/types'

const img = {
  a: reactLogo,
  b: viteLogo,
} as const

/** Static catalog used when {@link USE_MOCK_PRODUCT_API} is enabled. */
export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Wireless headphones',
    price: 79.99,
    description:
      'Closed-back wireless headphones with long battery life. Great for focus work and travel.',
    category: 'electronics',
    image: img.a,
    rating: { rate: 4.5, count: 128 },
  },
  {
    id: 2,
    title: 'Mechanical keyboard',
    price: 119.5,
    description: 'Compact layout, hot-swappable switches, and programmable layers.',
    category: 'electronics',
    image: img.b,
    rating: { rate: 4.7, count: 89 },
  },
  {
    id: 3,
    title: 'Cotton crewneck tee',
    price: 24.0,
    description: 'Mid-weight organic cotton. Fits true to size; machine wash cold.',
    category: "men's clothing",
    image: img.a,
    rating: { rate: 4.2, count: 340 },
  },
  {
    id: 4,
    title: 'Ceramic pour-over set',
    price: 42.25,
    description: 'Dripper, server, and paper filters for a clean cup at home.',
    category: 'home',
    image: img.b,
    rating: { rate: 4.8, count: 56 },
  },
  {
    id: 5,
    title: 'Discontinued gadget (sample)',
    price: 9.99,
    description: 'Placeholder listing to demonstrate out-of-stock / unavailable handling.',
    category: 'electronics',
    image: img.a,
    rating: { rate: 3.1, count: 12 },
    inStock: false,
  },
  {
    id: 6,
    title: 'Trail daypack 24L',
    price: 64.0,
    description: 'Ventilated back panel, hydration sleeve, and daisy chains for gear.',
    category: 'outdoor',
    image: img.b,
    rating: { rate: 4.6, count: 201 },
  },
]
