import { useFetch } from '@/hooks/useFetch'
import { getSmartphoneById } from '@/application/usecases'
import { Product } from '@/domain/models/interfaces'
import { LoadingBar, SmartphoneCard } from '@/ui/components'
import { deleteDuplicate } from '@/utils/deleteDuplicate'
import { ProductInfoHeader, Specifications } from './components'
import { Slider } from './components/Slider'
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
