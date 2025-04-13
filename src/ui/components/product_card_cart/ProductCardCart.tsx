import styles from './ProductCardCart.module.css'
import { useCart } from '@/context/CartContext'
import { Product } from '@/domain/models/interfaces'
import { ensureHttps } from '@/utils/url'
export const ProductCardCart = ({
  product,
}: {
  product: Product & { quantity?: number }
}) => {
  const { removeItemFromCart } = useCart()
  return (
    <div className={styles.productCardCart} key={product.id}>
      <img
        src={ensureHttps(product.colorOptions[0].getImageUrl())}
        alt={product.name}
        width={100}
        height={180}
      />
      <div className={styles.productCardCart__info}>
        <div className={styles.productCardCart__info__namePrice}>
          <div className={styles.productCardCart__info__name}>
            <h2>{product.name}</h2>
            <p>
              {product.storageOptions[0].getCapacity()} |{' '}
              {product.colorOptions[0].getName()}
            </p>
          </div>
          <p>{product.basePrice.toString()}</p>
        </div>
        <button
          aria-label='Remove product'
          onClick={() => removeItemFromCart(product)}
        >
          Remove ({product.quantity})
        </button>
      </div>
    </div>
  )
}
