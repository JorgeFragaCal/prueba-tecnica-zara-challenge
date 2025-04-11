import './ProductDetailPage.modules.css'
import { useFetch } from '@/hooks/useFetch'
import { getSmartphoneById } from '@/application/usecases'
import { Product } from '@/domain/models/interfaces'
import { LoadingBar, SmartphoneCard } from '@/ui/components'
import { deleteDuplicate } from '@/utils/deleteDuplicate'
import { ProductInfoHeader, Specifications } from './components'
import { Slider } from './components/'

export const ProductDetailPage = ({ id }: { id: string }) => {
  const {
    data: product,
    loading,
    error,
  } = useFetch<Product | null>(() => getSmartphoneById({ id }), id)

  if (loading) return <LoadingBar loading={loading} />
  if (error) {
    setTimeout(() => {
      window.location.href = '/'
    }, 1000)
    return (
      <main className='container'>
        <h1>El producto que buscas no existe</h1>
      </main>
    )
  }
  if (!product) return <div>Producto no encontrado</div>
  return (
    <main className='product-detail'>
      <ProductInfoHeader product={product} />

      <Specifications product={product} />

      <Slider>
        {product.similarProducts.length > 0 &&
          deleteDuplicate(product.similarProducts).map((product) => (
            <SmartphoneCard
              product={product}
              url={`/product/${product.id}`}
              key={product.id}
            />
          ))}
      </Slider>
    </main>
  )
}
