import type { Product } from '@/entities/product'
import { Button } from '@/shared/ui/button'
import { useAddToCartProduct } from '../model/useAddToCartProduct'

type AddToCartButtonProps = {
  product: Product
  className?: string
}

export function AddToCartButton({ product, className = '' }: AddToCartButtonProps) {
  const { addOne, canAdd, quantityInCart, maxPerProduct } = useAddToCartProduct(product)

  return (
    <div className={['flex flex-wrap items-center gap-3', className].filter(Boolean).join(' ')}>
      <Button disabled={!canAdd} onClick={addOne}>
        {canAdd ? 'Add to cart' : 'Max in cart'}
      </Button>
      <span className="text-sm text-zinc-500 dark:text-zinc-400">
        In cart: {quantityInCart}/{maxPerProduct}
      </span>
    </div>
  )
}
