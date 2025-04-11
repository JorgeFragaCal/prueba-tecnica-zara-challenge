// src/ui/pages/ProductDetailPage.tsx
import { useFetch } from '@/hooks/useFetch'
import { getSmartphoneById } from '@/application/usecases'
import { Product } from '@/domain/models/interfaces'
import { LoadingBar, SmartphoneCard } from '@/ui/components'
import { deleteDuplicate } from '@/utils/deleteDuplicate'

export const ProductDetailPage = ({ id }: { id: string }) => {
  const {
    data: product,
    loading,
    error,
  } = useFetch<Product | null>(() => getSmartphoneById({ id }), id)

  if (loading) return <LoadingBar loading={loading} />
  if (error) return <div>Error: {error.message}</div>
  if (!product) return <div>Producto no encontrado</div>

  return (
    <section className='product-detail container'>
      <div className='product-detail__main'>
        <div className='product-detail__image'>
          <img
            src={product.colorOptions[0].getImageUrl()}
            alt={product.name}
            width={335}
            height={415}
            loading='eager'
            fetchPriority='high'
            decoding='async'
          />
        </div>
        <div className='product-detail__info'>
          <h1>{product.name}</h1>
          <p className='product-detail__brand'>{product.brand}</p>
          <p className='product-detail__price'>
            {product.basePrice.toString()}
          </p>
          <p className='product-detail__description'>{product.description}</p>

          <div className='product-detail__colors'>
            <h3>Colores disponibles</h3>
            <div className='color-options'>
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

          <div className='product-detail__storage'>
            <h3>Almacenamiento</h3>
            <div className='storage-options'>
              {product.storageOptions.map((storage) => (
                <div key={storage.getCapacity()} className='storage-option'>
                  <span>{storage.getCapacity()}</span>
                  <span>{storage.getPrice().toString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='product-detail__specs'>
        <h2>Especificaciones técnicas</h2>
        <div className='specs-grid'>
          <div className='spec-item'>
            <span>Pantalla</span>
            <span>{product.specs.screen}</span>
          </div>
          <div className='spec-item'>
            <span>Resolución</span>
            <span>{product.specs.resolution}</span>
          </div>
          <div className='spec-item'>
            <span>Procesador</span>
            <span>{product.specs.processor}</span>
          </div>
          <div className='spec-item'>
            <span>Cámara principal</span>
            <span>{product.specs.mainCamera}</span>
          </div>
          <div className='spec-item'>
            <span>Cámara frontal</span>
            <span>{product.specs.selfieCamera}</span>
          </div>
          <div className='spec-item'>
            <span>Batería</span>
            <span>{product.specs.battery}</span>
          </div>
          <div className='spec-item'>
            <span>Sistema operativo</span>
            <span>{product.specs.os}</span>
          </div>
          <div className='spec-item'>
            <span>Frecuencia de actualización</span>
            <span>{product.specs.screenRefreshRate}</span>
          </div>
        </div>
      </div>

      <section className='slider'>
        {product.similarProducts.length > 0 &&
          deleteDuplicate(product.similarProducts).map((product) => (
            <SmartphoneCard
              product={product}
              url={`/product/${product.id}`}
              key={product.id}
            />
          ))}
      </section>
    </section>
  )
}
