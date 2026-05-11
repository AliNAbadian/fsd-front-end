import { Button } from '@/shared/ui/button'
import { useRemoveFromCart } from '@/entities/cart'

type RemoveFromCartButtonProps = {
  productId: number
  label?: string
  className?: string
}

export function RemoveFromCartButton({
  productId,
  label = 'Remove',
  className = '',
}: RemoveFromCartButtonProps) {
  const remove = useRemoveFromCart()

  return (
    <Button
      variant="ghost"
      className={className}
      onClick={() => {
        remove(productId)
      }}
    >
      {label}
    </Button>
  )
}
