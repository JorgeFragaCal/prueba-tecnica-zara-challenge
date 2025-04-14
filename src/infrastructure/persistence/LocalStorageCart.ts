import { Product } from '@/domain/models/interfaces'
import { Price } from '@/domain/models/value-objects'
import { Color, Storage } from '@/domain/models/value-objects'
const CART_KEY = 'cart'

export const getCartItems = (): (Product & { quantity?: number })[] => {
  const data = localStorage.getItem(CART_KEY)
  if (!data) return []

  const parsedItems = JSON.parse(data)
  return parsedItems.map((item: any) => ({
    ...item,
    basePrice: Price.create(item.basePrice.amount, item.basePrice.currency),
    colorOptions: item.colorOptions.map((color: any) =>
      Color.create(color.name, color.hexCode, color.imageUrl),
    ),
    storageOptions: item.storageOptions.map((storage: any) =>
      Storage.create(storage.capacity, storage.price),
    ),
  }))
}

export const addItemToLocalStorageCart = (
  item: Product & { quantity?: number },
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

export const removeItemFromLocalStorageCart = (item: Product): void => {
  const items = getCartItems()
  const itemIndex = items.findIndex(
    (i) =>
      i.id === item.id &&
      i.basePrice.getValue() === item.basePrice.getValue() &&
      i.imageUrl === item.imageUrl,
  )
  if (itemIndex !== -1 && items[itemIndex].quantity === 1) {
    items.splice(itemIndex, 1)
  } else if (itemIndex !== -1) {
    items[itemIndex].quantity = (items[itemIndex].quantity ?? 1) - 1
  }
  localStorage.setItem(CART_KEY, JSON.stringify(items))
}

export const clearLocalStorageCart = (): void => {
  localStorage.removeItem(CART_KEY)
}
