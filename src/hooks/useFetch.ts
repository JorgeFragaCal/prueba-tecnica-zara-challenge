import { getData } from '@/infrastructure/api/getData'
import { useEffect, useState } from 'react'
import { deleteDuplicate } from '@/utils/deleteDuplicate'
export const useFetch = <TApiResponse, TDomain>(
  url: string,
  adapter?: (data: TApiResponse) => TDomain,
) => {
  const [data, setData] = useState<TDomain | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await getData<TApiResponse>(url, controller)

        if (Array.isArray(data)) {
          const filteredData = deleteDuplicate(data)

          const transformedData = adapter
            ? adapter(filteredData as TApiResponse)
            : filteredData

          setData(transformedData as TDomain)
        } else {
          setData(null)
        }
      } catch (error) {
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}
