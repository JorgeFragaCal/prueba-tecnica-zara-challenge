import { ProductList } from '@/domain/models/ProductList'

export const ProductCard = ({ product }: { product: ProductList }) => {
  return <div>{product.name}</div>
}
