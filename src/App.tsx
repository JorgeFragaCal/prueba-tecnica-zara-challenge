import { ProductAdapter } from './infrastructure/adapters/ProductAdapter'
import { useFetch } from './hooks/useFetch'
import { ProductBase } from './domain/models/interfaces'
import { ApiProductBase } from './domain/models/interfaces'

function App() {
  const LIMIT_OF_PRODUCTS = 10
  const OFFSET_OF_PRODUCTS = 0
  const SEARCH_OF_PRODUCTS = ''

  const { data, loading, error } = useFetch<ApiProductBase[], ProductBase[]>(
    `https://prueba-tecnica-api-tienda-moviles.onrender.com/products?search=${SEARCH_OF_PRODUCTS}&limit=${LIMIT_OF_PRODUCTS}&offset=${OFFSET_OF_PRODUCTS}`,
    (data) => data.map(ProductAdapter.toBaseDomain),
  )

  if (loading) return <div>Cargando...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      {data?.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.brand}</p>
          <p>{product.basePrice.toString()}</p>
          <img
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            loading='lazy'
            decoding='async'
          />
        </div>
      ))}
    </div>
  )
}

export default App
