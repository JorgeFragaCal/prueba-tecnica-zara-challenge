import { Product } from '@/domain/models/interfaces'
import './ProductInfoHeader.modules.css'
import { Button } from '@/ui/components/button/Button'
import { useProductSelection } from '../hooks/useProductSelection'
import { useCart } from '@/context/CartContext'

export const ProductInfoHeader = ({ product }: { product: Product }) => {
  const {
    selectedStorage,
    selectedColor,
    handleSelectColor,
    handleSelectStorage,
  } = useProductSelection(product)

  const { addItemToCart } = useCart()

  return (
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
          onClick={() => addItemToCart(product.id)}
        >
          Add
        </Button>
      </div>
    </section>
  )
}
