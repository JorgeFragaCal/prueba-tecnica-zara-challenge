import './Header.modules.css'
import { Logo } from '@/ui/icons'
import { Link } from 'wouter'
import { CartButton } from '../cart_button/CartButton'
export const Header = () => {
  return (
    <header>
      <div className='header__container'>
        <Link href='/'>
          <Logo />
        </Link>
        <CartButton />
      </div>
    </header>
  )
}
