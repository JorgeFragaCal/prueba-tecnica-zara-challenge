import { getData } from '@/infrastructure/api/getData'
import { useEffect, useState } from 'react'

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData<T>(url)
        setData(data)
        setLoading(false)
      } catch (error) {
        setError(error as Error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, loading, error }
}
