export interface Product {
  id: string
  brand: string
  name: string
  description: string
  basePrice: number
  rating: number
  specs: object
  colorOptions: colorOptions[]
  storageOptions: storageOptions[]
  similarProducts: similarProducts[]
  imageUrl: string
}

interface colorOptions {
  name: string
  hexCode: string
  imageUrl: string
}

interface storageOptions {
  capacity: string
  price: number
}

interface similarProducts {
  id: string
  brand: string
  name: string
  basePrice: number
  imageUrl: string
}
