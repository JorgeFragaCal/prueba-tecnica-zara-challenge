export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    headers: {
      'x-api-key': import.meta.env.VITE_API_KEY_AUTH,
    },
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error('Error al obtener los datos')
  }

  return data
}
