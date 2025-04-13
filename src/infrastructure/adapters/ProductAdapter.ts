import {
  ApiProduct,
  ApiProductBase,
  Product,
  ProductBase,
} from '@/domain/models/interfaces'
import { Color, Price, Storage } from '@/domain/models/value-objects'
import { ensureHttps } from '@/utils/url'

export const ProductAdapter = {
  toBaseDomain: (apiProduct: ApiProductBase): ProductBase => {
    return {
      id: apiProduct.id,
      brand: apiProduct.brand,
      name: apiProduct.name,
      basePrice: Price.create(apiProduct.basePrice),
      imageUrl: ensureHttps(apiProduct.imageUrl),
    }
  },

  toDomain: (apiProduct: ApiProduct): Product => {
    return {
      ...ProductAdapter.toBaseDomain(apiProduct),
      description: apiProduct.description,
      rating: apiProduct.rating,
      specs: apiProduct.specs,
      colorOptions: apiProduct.colorOptions.map((color) =>
        Color.create(color.name, color.hexCode, ensureHttps(color.imageUrl)),
      ),
      storageOptions: apiProduct.storageOptions.map((storage) =>
        Storage.create(storage.capacity, Price.create(storage.price)),
      ),
      similarProducts: apiProduct.similarProducts.map(
        ProductAdapter.toBaseDomain,
      ),
    }
  },
}
