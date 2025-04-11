import { ProductList } from './domain/models/ProductList'
import { useFetch } from './hooks/useFetch'

function App() {
  const { data, loading, error } = useFetch<ProductList[] | null>(
    'https://prueba-tecnica-api-tienda-moviles.onrender.com/products',
  )

  if (loading) return <div>Cargando...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      {data
        ?.filter(
          (product, index, self) =>
            index === self.findIndex((p) => p.id === product.id),
        )
        .map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.brand}</p>
            <p>{product.basePrice}</p>
            <p>{product.imageUrl}</p>
          </div>
        ))}
    </div>
  )
}

export default App
