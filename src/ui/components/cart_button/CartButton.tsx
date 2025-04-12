import { Bag } from '@/ui/icons'
import './CartButton.modules.css'
import { useCart } from '@/context/CartContext'
import { Link } from 'wouter'
export const CartButton = () => {
  const { cartItems } = useCart()
  const numberOfItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity ?? 0),
    0,
  )
  return (
    <Link
      to='/cart'
      className='cart-button__container'
      aria-label='Ir al carrito de compras'
    >
      <Bag active={numberOfItems > 0} />
      <span>{numberOfItems}</span>
    </Link>
  )
}
