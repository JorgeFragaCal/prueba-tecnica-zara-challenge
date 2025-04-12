import { ProductList } from '@/domain/models/ProductList'
import './ProductCardCart.modules.css'
import { useCart } from '@/context/CartContext'
export const ProductCardCart = ({
  product,
}: {
  product: Omit<ProductList, 'brand'> & { quantity?: number }
}) => {
  const { removeItemFromCart } = useCart()
  return (
    <div className='product-card-cart' key={product.id}>
      <img src={product.imageUrl} alt={product.name} width={100} height={180} />
      <div className='product-card-cart__info'>
        <div>
          <h2>{product.name}</h2>
          <p>{product.basePrice.toString()}</p>
        </div>
        <button
          aria-label='Remove product'
          onClick={() =>
            removeItemFromCart({
              id: product.id,
              basePrice: product.basePrice,
              imageUrl: product.imageUrl,
              name: product.name,
            })
          }
        >
          Remove ({product.quantity})
        </button>
      </div>
    </div>
  )
}
