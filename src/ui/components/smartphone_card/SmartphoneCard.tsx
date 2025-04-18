import { ProductBase } from '@/domain/models/interfaces'
import styles from './SmartphoneCard.module.css'
import { Link } from 'wouter'
import { ensureHttps } from '@/utils/url'
export const SmartphoneCard = ({
  product,
  url = `/product/${product.id}`,
}: {
  product: ProductBase
  url: string
}) => {
  return (
    <article className={styles.cardProduct} key={product.id} role='article'>
      <Link
        className={styles.cardProduct__link}
        href={url}
        aria-label={`Ver detalles de ${product.name}`}
      >
        <img
          className={styles.cardProduct__image}
          src={ensureHttps(product.imageUrl)}
          alt={`${product.brand} ${product.name}`}
          width={330}
          height={260}
          loading='lazy'
          decoding='async'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <div className={styles.cardProduct__info}>
          <span className={styles.cardProduct__info__brand}>
            {product.brand}
          </span>
          <h2 className={styles.cardProduct__info__name}>{product.name}</h2>
          <span
            className={styles.cardProduct__info__price}
            aria-label={`Precio: ${product.basePrice.toString()} euros`}
          >
            {product.basePrice.toString()}
          </span>
        </div>
      </Link>
    </article>
  )
}
