import './Header.modules.css'
import { Logo } from '@/ui/icons'
import { Link, useLocation } from 'wouter'
import { CartButton } from '../cart_button/CartButton'
export const Header = () => {
  const [location] = useLocation()
  return (
    <header role='banner'>
      <div className='header__container'>
        <Link href='/' aria-label='Ir a la página principal'>
          <Logo aria-hidden='true' />
        </Link>
        {location !== '/cart' && (
          <nav role='navigation' aria-label='Carrito de compras'>
            <CartButton />
          </nav>
        )}
      </div>
    </header>
  )
}
