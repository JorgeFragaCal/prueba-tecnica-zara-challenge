import { useFetch } from '@/hooks/useFetch'
import { ProductBase } from '@/domain/models/interfaces'
import {
  SearchBar,
  SmartphoneCard,
  SmartphoneCardSkeleton,
  LoadingBar,
} from '@/ui/components'
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

  if (error)
    return (
      <div className='container'>
        <h1>Error: {error?.message}</h1>
      </div>
    )

  return (
    <section id='product-list' className='container'>
      <LoadingBar loading={loading} />
      <SearchBar
        results={data?.length}
        placeholder='Search for a smartphone...'
        value={search}
        onChange={handleSearch}
      />
      <div className='grid-layout'>
        {data?.map((product) => (
          <SmartphoneCard
            key={product.id}
            product={product}
            url={`/product/${product.id}`}
          />
        ))}
      </div>
    </section>
  )
}

export const ProductListPageSkeleton = () => {
  return <SmartphoneCardSkeleton />
}
