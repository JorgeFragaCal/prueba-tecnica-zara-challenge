import { createContext, useContext, useState, ReactNode } from 'react'
import {
  addItemToLocalStorageCart,
  removeItemFromLocalStorageCart,
  clearLocalStorageCart,
  getCartItems,
} from '@/infrastructure/persistence/LocalStorageCart'
import { ProductBase } from '@/domain/models/interfaces'

interface CartContextType {
  cartItems: (Omit<ProductBase, 'brand'> & { quantity?: number })[]
  addItemToCart: (item: Omit<ProductBase, 'brand'>) => void
  removeItemFromCart: (item: Omit<ProductBase, 'brand'>) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<
    (Omit<ProductBase, 'brand'> & { quantity?: number })[]
  >(() => {
    return getCartItems()
  })

  const addItemToCart = (
    item: Omit<ProductBase, 'brand'> & { quantity?: number },
  ) => {
    const existingItem = cartItems.find(
      (i) =>
        i.id === item.id &&
        i.basePrice === item.basePrice &&
        i.imageUrl === item.imageUrl,
    )

    if (existingItem) {
      const updatedItems = cartItems.map((i) =>
        i.id === item.id &&
        i.basePrice === item.basePrice &&
        i.imageUrl === item.imageUrl
          ? { ...i, quantity: (i.quantity ?? 1) + 1 }
          : i,
      )
      setCartItems(updatedItems)
      addItemToLocalStorageCart({
        ...item,
        quantity: (existingItem.quantity ?? 1) + 1,
      })
    } else {
      const newItem = { ...item, quantity: 1 }
      setCartItems((prevItems) => [...prevItems, newItem])
      addItemToLocalStorageCart(newItem)
    }
  }

  const removeItemFromCart = (item: Omit<ProductBase, 'brand'>) => {
    const existingItem = cartItems.find(
      (i) =>
        i.id === item.id &&
        i.basePrice === item.basePrice &&
        i.imageUrl === item.imageUrl,
    )
    if (existingItem) {
      const updatedItems = cartItems.map((i) =>
        i.id === item.id &&
        i.basePrice === item.basePrice &&
        i.imageUrl === item.imageUrl
          ? { ...i, quantity: (i.quantity ?? 1) - 1 }
          : i,
      )
      if (updatedItems.some((i) => i.quantity === 0)) {
        setCartItems(updatedItems.filter((i) => i.quantity !== 0))
      } else {
        setCartItems(updatedItems)
      }
    } else {
      setCartItems((prevItems) => prevItems.filter((i) => i !== item))
    }
    removeItemFromLocalStorageCart(item)
  }

  const clearCart = () => {
    setCartItems([])
    clearLocalStorageCart()
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
