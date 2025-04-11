const CART_KEY = 'cart'

export const getCartItems = (): string[] => {
  const data = localStorage.getItem(CART_KEY)
  return data ? JSON.parse(data) : []
}

export const addItemToLocalStorageCart = (id: string): void => {
  const items = getCartItems()
  items.push(id)
  localStorage.setItem(CART_KEY, JSON.stringify(items))
}

export const removeItemFromLocalStorageCart = (id: string): void => {
  const items = getCartItems().filter((i) => i !== id)
  localStorage.setItem(CART_KEY, JSON.stringify(items))
}

export const clearLocalStorageCart = (): void => {
  localStorage.removeItem(CART_KEY)
}
