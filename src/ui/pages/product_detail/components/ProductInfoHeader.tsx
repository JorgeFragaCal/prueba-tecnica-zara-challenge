import { Product } from '@/domain/models/interfaces'
import './ProductInfoHeader.modules.css'
import { Button } from '@/ui/components/button/Button'
export const ProductInfoHeader = ({ product }: { product: Product }) => {
  return (
    <section className='product-info-header__container'>
      <div className='product-info-header__image'>
        <img
          src={product.colorOptions[0].getImageUrl()}
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
            Form {product.basePrice.toString()}
          </p>
        </div>

        <div className='product-info-header__storage'>
          <h3 className='product-info-header__storage-title'>
            Storage ¿hOW MUCH SPACE DO YOU NEED?
          </h3>
          <div className='storage-options__container'>
            {product.storageOptions.map((storage) => (
              <div key={storage.getCapacity()} className='storage-option'>
                <span>{storage.getCapacity()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='product-info-header__colors'>
          <h3 className='product-info-header__colors-title'>
            color. pick your favourite.
          </h3>
          <div className='color-options__container'>
            {product.colorOptions.map((color) => (
              <div
                key={color.getHexCode()}
                className='color-option'
                style={{ backgroundColor: color.getHexCode() }}
                title={color.getName()}
              />
            ))}
          </div>
        </div>

        <Button disabled={true} onClick={() => {}}>
          Añadir
        </Button>
      </div>
    </section>
  )
}
