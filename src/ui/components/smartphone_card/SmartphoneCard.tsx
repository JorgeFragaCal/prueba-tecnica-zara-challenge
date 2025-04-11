import { ProductBase } from '@/domain/models/interfaces'
import './SmartphoneCard.modules.css'
import { Link } from 'wouter'
export const SmartphoneCard = ({
  product,
  url = `/product/${product.id}`,
}: {
  product: ProductBase
  url: string
}) => {
  return (
    <article className='card-product' key={product.id}>
      <Link className='card-product__link' href={url}>
        <img
          className='card-product__image'
          src={product.imageUrl}
          alt={product.name}
          width={330}
          height={260}
          loading='lazy'
          decoding='async'
        />
        <div className='card-product__info'>
          <span className='card-product__info-brand'>{product.brand}</span>
          <h2 className='card-product__info-name'>{product.name}</h2>
          <span className='card-product__info-price'>
            {product.basePrice.toString()}
          </span>
        </div>
      </Link>
    </article>
  )
}

export const SmartphoneCardSkeleton = () => {
  return <div>SmartphoneCardSkeleton</div>
}
