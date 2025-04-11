import { ApiProductBase } from '@/domain/models/interfaces'
import { ProductAdapter } from '@/infrastructure/adapters/ProductAdapter'
import { getData } from '@/infrastructure/api/getData'
import { getFromCache, setToCache } from '@/infrastructure/cache/ProductCache'
import { deleteDuplicate } from '@/utils/deleteDuplicate'

export const getSmartPhones = async ({
  options,
}: {
  options?: {
    search?: string
    limit?: number
    offset?: number
  }
}) => {
  const cacheKey = `products_${options?.search}_${options?.limit}_${options?.offset}`
  const cachedData = getFromCache(cacheKey)
  if (cachedData) {
    return cachedData
  }

  const data = await getData<ApiProductBase[]>(
    `https://prueba-tecnica-api-tienda-moviles.onrender.com/products?search=${options?.search}&limit=${options?.limit}&offset=${options?.offset}`,
  )

  if (Array.isArray(data)) {
    const filteredData = deleteDuplicate(data)

    const transformedData = filteredData.map(ProductAdapter.toBaseDomain)

    setToCache(cacheKey, transformedData)

    return transformedData
  } else {
    return null
  }
}
