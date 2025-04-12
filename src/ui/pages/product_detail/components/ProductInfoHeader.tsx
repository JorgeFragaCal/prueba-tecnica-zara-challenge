import { Product } from '@/domain/models/interfaces'
import './ProductInfoHeader.modules.css'
import { Button } from '@/ui/components/button/Button'
import { useProductSelection } from '../hooks/useProductSelection'
import { useCart } from '@/context/CartContext'
import { Link } from 'wouter'

export const ProductInfoHeader = ({ product }: { product: Product }) => {
  const {
    selectedStorage,
    selectedColor,
    handleSelectColor,
    handleSelectStorage,
  } = useProductSelection(product)

  const { addItemToCart } = useCart()

  return (
    <>
      <div className='product-info-header__back-link'>
        <Link to='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='6'
            height='10'
            viewBox='0 0 6 10'
            fill='none'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M4.82328 0.646484L5.53039 1.35359L1.88394 5.00004L5.53039 8.64648L4.82328 9.35359L0.469727 5.00004L4.82328 0.646484Z'
              fill='black'
            />
          </svg>
          Back
        </Link>
      </div>
      <section className='product-info-header__container'>
        <div className='product-info-header__image'>
          <img
            src={
              selectedColor?.getImageUrl() ??
              product.colorOptions[0].getImageUrl()
            }
            alt={product.name}
            width={510}
            height={630}
            loading='eager'
            fetchPriority='high'
            decoding='async'
          />
        </div>
        <div className='product-info-header__info'>
          <div className='product-info-header__info-name'>
            <h1 className='product-info-header__info-name-title'>
              {product.name}
            </h1>
            <p className='product-info-header__info-price'>
              Form{' '}
              {selectedStorage?.getPrice().toString() ??
                product.storageOptions[0].getPrice().toString()}
            </p>
          </div>

          <div className='product-info-header__storage'>
            <h3 className='product-info-header__storage-title'>
              Storage ¿hOW MUCH SPACE DO YOU NEED?
            </h3>
            <div className='storage-options__container'>
              {product.storageOptions.map((storage) => (
                <button
                  key={storage.getCapacity()}
                  className={`storage-option ${
                    selectedStorage?.getCapacity() === storage.getCapacity()
                      ? 'selected'
                      : ''
                  }`}
                  onClick={() => handleSelectStorage(storage.getCapacity())}
                >
                  <span>{storage.getCapacity()}</span>
                </button>
              ))}
            </div>
          </div>

          <div className='product-info-header__colors'>
            <h3 className='product-info-header__colors-title'>
              color. pick your favourite.
            </h3>
            <div className='color-options__container'>
              {product.colorOptions.map((color) => (
                <button
                  key={color.getHexCode()}
                  className={`color-option ${
                    selectedColor?.getHexCode() === color.getHexCode()
                      ? 'selected'
                      : ''
                  }`}
                  style={{ backgroundColor: color.getHexCode() }}
                  title={color.getName()}
                  onClick={() => handleSelectColor(color.getHexCode())}
                />
              ))}
            </div>
          </div>

          <Button
            disabled={!selectedStorage || !selectedColor}
            onClick={() =>
              addItemToCart({
                ...product,
                colorOptions: [selectedColor ?? product.colorOptions[0]],
                storageOptions: [selectedStorage ?? product.storageOptions[0]],
              })
            }
          >
            Add
          </Button>
        </div>
      </section>
    </>
  )
}
