import { useFetch } from '@/hooks/useFetch'
import { ProductBase } from '@/domain/models/interfaces'
import { SearchBar, SmartphoneCard, LoadingBar } from '@/ui/components'
import { useState } from 'react'
import { getSmartPhones } from '@/application/usecases/getSmartPhones'
import { useDebounce } from '@/hooks/useDebounce'

export const ProductListPage = () => {
  const LIMIT_OF_PRODUCTS = 21
  const OFFSET_OF_PRODUCTS = 0
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 300)
  const handleSearch = (value: string) => {
    setSearch(value)
  }
  const { data, loading, error } = useFetch<ProductBase[]>(
    () =>
      getSmartPhones({
        options: {
          search: debouncedSearch,
          limit: LIMIT_OF_PRODUCTS,
          offset: OFFSET_OF_PRODUCTS,
        },
      }),
    debouncedSearch,
  )

  if (error) {
    console.error(error)
    return (
      <main className='full-width' aria-live='assertive'>
        <h1>Error: No se pudo obtener la lista de productos</h1>
      </main>
    )
  }

  return (
    <main id='product-list' className='full-width' role='main'>
      <LoadingBar loading={loading} />
      <SearchBar
        results={data?.length}
        placeholder='Search for a smartphone...'
        value={search}
        onChange={handleSearch}
      />
      <section className='grid-layout' aria-label='Lista de productos'>
        {data?.map((product) => (
          <SmartphoneCard
            key={product.id}
            product={product}
            url={`/product/${product.id}`}
          />
        ))}
      </section>
      {data?.length === 0 && (
        <p role='status' aria-live='polite'>
          No se encontraron productos que coincidan con tu búsqueda
        </p>
      )}
    </main>
  )
}
