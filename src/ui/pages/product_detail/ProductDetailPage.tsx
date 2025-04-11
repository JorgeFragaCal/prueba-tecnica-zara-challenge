import { useFetch } from '@/hooks/useFetch'
import { getSmartphoneById } from '@/application/usecases'
import { Product } from '@/domain/models/interfaces'
import { LoadingBar, SmartphoneCard } from '@/ui/components'
import { deleteDuplicate } from '@/utils/deleteDuplicate'
import { ProductInfoHeader } from './components/ProductInfoHeader'
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
    <main className='product-detail container'>
      <ProductInfoHeader product={product} />

      <section className='product-detail__specs'>
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
      </section>

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
    </main>
  )
}
