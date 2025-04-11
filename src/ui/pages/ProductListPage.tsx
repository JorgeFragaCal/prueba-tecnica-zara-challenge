import { ProductAdapter } from '@/infrastructure/adapters/ProductAdapter'
import { useFetch } from '@/hooks/useFetch'
import { ProductBase } from '@/domain/models/interfaces'
import { ApiProductBase } from '@/domain/models/interfaces'
import { SmartphoneCard, SmartphoneCardSkeleton } from '@/ui/components'
export const ProductListPage = () => {
  const LIMIT_OF_PRODUCTS = 10
  const OFFSET_OF_PRODUCTS = 0
  const SEARCH_OF_PRODUCTS = ''

  const { data, loading, error } = useFetch<ApiProductBase[], ProductBase[]>(
    `https://prueba-tecnica-api-tienda-moviles.onrender.com/products?search=${SEARCH_OF_PRODUCTS}&limit=${LIMIT_OF_PRODUCTS}&offset=${OFFSET_OF_PRODUCTS}`,
    (data) => data.map(ProductAdapter.toBaseDomain),
  )

  if (loading) return <SmartphoneCardSkeleton />
  if (error) return <div>Error: {error.message}</div>

  return (
    <section id='product-list'>
      {data?.map((product) => (
        <SmartphoneCard key={product.id} product={product} />
      ))}
    </section>
  )
}
