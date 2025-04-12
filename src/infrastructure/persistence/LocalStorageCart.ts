import { ProductBase } from '@/domain/models/interfaces'
import { Price } from '@/domain/models/value-objects'

const CART_KEY = 'cart'

export const getCartItems = (): (Omit<ProductBase, 'brand'> & {
  quantity?: number
})[] => {
  const data = localStorage.getItem(CART_KEY)
  if (!data) return []

  const parsedItems = JSON.parse(data)
  return parsedItems.map((item: any) => ({
    ...item,
    basePrice: Price.create(item.basePrice.amount, item.basePrice.currency),
  }))
}

export const addItemToLocalStorageCart = (
  item: Omit<ProductBase, 'brand'> & { quantity?: number },
): void => {
  const items = getCartItems()
  const itemIndex = items.findIndex(
    (i) =>
      i.id === item.id &&
      i.basePrice.getValue() === item.basePrice.getValue() &&
      i.imageUrl === item.imageUrl,
  )

  if (itemIndex !== -1) {
    items[itemIndex].quantity = (items[itemIndex].quantity ?? 1) + 1
  } else {
    items.push({ ...item, quantity: 1 })
  }

  localStorage.setItem(CART_KEY, JSON.stringify(items))
}

export const removeItemFromLocalStorageCart = (
  item: Omit<ProductBase, 'brand'>,
): void => {
  const items = getCartItems().filter((i) => i !== item)
  localStorage.setItem(CART_KEY, JSON.stringify(items))
}

export const clearLocalStorageCart = (): void => {
  localStorage.removeItem(CART_KEY)
}
