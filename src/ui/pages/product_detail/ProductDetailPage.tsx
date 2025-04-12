import './ProductDetailPage.modules.css'
import { useFetch } from '@/hooks/useFetch'
import { getSmartphoneById } from '@/application/usecases'
import { Product } from '@/domain/models/interfaces'
import { SmartphoneCard } from '@/ui/components'
import { deleteDuplicate } from '@/utils/deleteDuplicate'
import { ProductInfoHeader, Specifications, Slider } from './components'
import { useState, useEffect } from 'react'

export const ProductDetailPage = ({ id }: { id: string }) => {
  const [previousProduct, setPreviousProduct] = useState<Product | null>(null)
  const { data: product, error } = useFetch<Product | null>(
    () => getSmartphoneById({ id }),
    id,
  )

  // Actualizar el producto anterior cuando se carga uno nuevo
  useEffect(() => {
    if (product) {
      setPreviousProduct(product)
    }
  }, [product])

  if (error) {
    console.error(error)
    setTimeout(() => {
      window.location.href = '/'
    }, 1000)
    return (
      <main className='container' aria-live='assertive'>
        <h1>El producto que buscas no existe</h1>
        <p>Serás redirigido a la página principal en breve.</p>
      </main>
    )
  }

  const currentProduct = product || previousProduct

  return (
    <main
      className='product-detail'
      role='main'
      style={{ position: 'relative' }}
    >
      {currentProduct && (
        <>
          <ProductInfoHeader product={currentProduct} />
          <Specifications product={currentProduct} />
          {currentProduct.similarProducts.length > 0 && (
            <Slider>
              {deleteDuplicate(currentProduct.similarProducts).map(
                (product) => (
                  <SmartphoneCard
                    product={product}
                    url={`/product/${product.id}`}
                    key={product.id}
                  />
                ),
              )}
            </Slider>
          )}
        </>
      )}
    </main>
  )
}
