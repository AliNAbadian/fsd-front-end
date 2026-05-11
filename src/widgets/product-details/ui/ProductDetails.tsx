import { ProductDetailsView, type Product } from '@/entities/product'
import { AddToCartButton } from '@/features/add-to-cart'

type ProductDetailsProps = {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <ProductDetailsView product={product} actionsSlot={<AddToCartButton product={product} />} />
  )
}
