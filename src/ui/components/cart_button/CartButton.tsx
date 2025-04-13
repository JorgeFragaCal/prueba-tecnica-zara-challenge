import { Bag } from '@/ui/icons'
import styles from './CartButton.module.css'
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
      className={styles.cartButtonContainer}
      aria-label='Ir al carrito de compras'
    >
      <Bag active={numberOfItems > 0} />
      <span>{numberOfItems}</span>
    </Link>
  )
}
