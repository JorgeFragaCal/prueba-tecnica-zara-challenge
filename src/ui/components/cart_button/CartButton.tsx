import { Bag } from '@/ui/icons'
import './CartButton.modules.css'
import { useCart } from '@/context/CartContext'

export const CartButton = () => {
  const { cartItems } = useCart()
  const numberOfItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity ?? 0),
    0,
  )
  return (
    <button className='cart-button__container'>
      <Bag active={numberOfItems > 0} />
      <span>{numberOfItems}</span>
    </button>
  )
}
