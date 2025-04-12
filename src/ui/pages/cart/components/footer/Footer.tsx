import { Link } from 'wouter'
import { Product } from '@/domain/models/interfaces'
import './Footer.modules.css'
export const Footer = ({
  cartItems,
}: {
  cartItems: (Product & { quantity?: number })[]
}) => {
  return (
    <footer className='footer-cart'>
      <Link className='footer-cart__link footer-cart__link--secondary' to='/'>
        Continue Shopping
      </Link>
      {cartItems.length > 0 && (
        <>
          <div className='footer-cart__total'>
            <span>Total: </span>
            <span>
              {cartItems.reduce(
                (acc, item) =>
                  acc + (item.quantity ?? 0) * (item.basePrice.getValue() ?? 0),
                0,
              )}{' '}
              EUR
            </span>
          </div>
          <Link className='footer-cart__link footer-cart__link--primary' to='#'>
            Pay
          </Link>
        </>
      )}
    </footer>
  )
}
