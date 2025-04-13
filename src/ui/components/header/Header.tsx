import styles from './Header.module.css'
import { Link, useLocation } from 'wouter'
import { CartButton } from '../cart_button/CartButton'
import { Icon } from '@/ui/icons/Icon'
export const Header = () => {
  const [location] = useLocation()
  return (
    <header role='banner'>
      <div className={styles.headerContainer}>
        <Link href='/' aria-label='Ir a la página principal'>
          <Icon name='logo' width={77} height={30} />
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
