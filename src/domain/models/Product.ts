import { Color, Price, Storage } from './value-objects'

export interface Product {
  id: string
  brand: string
  name: string
  description: string
  basePrice: number
  rating: number
  specs: Specs
  colorOptions: Color[]
  storageOptions: Storage[]
  similarProducts: similarProducts[]
  imageUrl: string
}

interface similarProducts {
  id: string
  brand: string
  name: string
  basePrice: Price
  imageUrl: string
}

interface Specs {
  screen: string
  resolution: string
  processor: string
  mainCamera: string
  selfieCamera: string
  battery: string
  os: string
  screenRefreshRate: string
}
