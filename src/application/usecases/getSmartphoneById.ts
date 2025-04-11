import { ApiProduct } from '@/domain/models/interfaces'
import { ProductAdapter } from '@/infrastructure/adapters/ProductAdapter'
import { getData } from '@/infrastructure/api/getData'
import { getFromCache, setToCache } from '@/infrastructure/cache/ProductCache'

export const getSmartphoneById = async ({ id }: { id: string }) => {
  const cacheKey = `products_${id}`
  const cachedData = getFromCache(cacheKey)
  if (cachedData) {
    return cachedData
  }

  const data = await getData<ApiProduct>(
    `https://prueba-tecnica-api-tienda-moviles.onrender.com/products/${id}`,
  )

  const transformedData = ProductAdapter.toDomain(data)

  setToCache(cacheKey, transformedData)

  return transformedData
}
