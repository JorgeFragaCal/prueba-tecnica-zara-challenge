import './ProductCardCart.modules.css'
import { useCart } from '@/context/CartContext'
import { Product } from '@/domain/models/interfaces'
export const ProductCardCart = ({
  product,
}: {
  product: Product & { quantity?: number }
}) => {
  const { removeItemFromCart } = useCart()
  return (
    <div className='product-card-cart' key={product.id}>
      <img
        src={product.colorOptions[0].getImageUrl()}
        alt={product.name}
        width={100}
        height={180}
      />
      <div className='product-card-cart__info'>
        <div className='product-card-cart__info__name-price'>
          <div className='product-card-cart__info__name'>
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
