export const ensureHttps = (url: string): string => {
  if (url.startsWith('//')) {
    return `https:${url}`
  }
  if (url.startsWith('http://')) {
    return url.replace('http://', 'https://')
  }
  if (
    !url.startsWith('https://') &&
    !url.startsWith('data:') &&
    !url.startsWith('/')
  ) {
    return `https://${url}`
  }
  return url
}
