// src/infrastructure/cache/ProductCache.ts
const cache = new Map<string, any>()
const maxSize = 100

export const getFromCache = (key: string): any | null => {
  return cache.get(key) || null
}

export const setToCache = (key: string, value: any): void => {
  if (cache.size >= maxSize) {
    const firstKey = cache.keys().next().value
    if (firstKey) {
      cache.delete(firstKey)
    }
  }
  cache.set(key, value)
}

export const clearCache = (): void => {
  cache.clear()
}
