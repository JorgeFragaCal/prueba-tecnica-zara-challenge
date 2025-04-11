import { Bag } from '@/ui/icons'
import './CardButton.modules.css'
import { useCart } from '@/context/CartContext'

export const CardButton = () => {
  const { cartItems } = useCart()
  const numberOfItems = cartItems.length
  return (
    <button className='cart-button__container'>
      <Bag active={numberOfItems > 0} />
      <span>{numberOfItems}</span>
    </button>
  )
}
