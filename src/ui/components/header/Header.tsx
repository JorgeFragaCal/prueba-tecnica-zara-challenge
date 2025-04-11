import './Header.modules.css'
import { Logo } from '@/ui/icons'
import { Link } from 'wouter'
import { CardButton } from '../cart_button/CardButton'
export const Header = () => {
  return (
    <header>
      <div className='header__container'>
        <Link href='/'>
          <Logo />
        </Link>
        <CardButton />
      </div>
    </header>
  )
}
