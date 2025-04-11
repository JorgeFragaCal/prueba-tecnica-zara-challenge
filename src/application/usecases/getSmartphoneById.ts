import { ApiProduct } from '@/domain/models/interfaces'
import { ProductAdapter } from '@/infrastructure/adapters/ProductAdapter'
import { getData } from '@/infrastructure/api/getData'

export const getSmartphoneById = async ({ id }: { id: string }) => {
  const data = await getData<ApiProduct>(
    `https://prueba-tecnica-api-tienda-moviles.onrender.com/products/${id}`,
  )

  if (data) {
    return ProductAdapter.toDomain(data)
  } else {
    return null
  }
}
