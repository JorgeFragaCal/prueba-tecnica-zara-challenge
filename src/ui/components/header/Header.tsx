import './Header.modules.css'
import { Logo } from '@/ui/icons'
import { Link } from 'wouter'
import { CartButton } from '../cart_button/CartButton'
export const Header = () => {
  return (
    <header role='banner'>
      <div className='header__container'>
        <Link href='/' aria-label='Ir a la página principal'>
          <Logo aria-hidden='true' />
        </Link>
        <nav role='navigation' aria-label='Carrito de compras'>
          <CartButton />
        </nav>
      </div>
    </header>
  )
}
