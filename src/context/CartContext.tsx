import { createContext, useContext, useState, ReactNode } from 'react'
import {
  addItemToLocalStorageCart,
  removeItemFromLocalStorageCart,
  clearLocalStorageCart,
  getCartItems,
} from '@/infrastructure/persistence/LocalStorageCart'

interface CartContextType {
  cartItems: string[]
  addItemToCart: (id: string) => void
  removeItemFromCart: (id: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<string[]>(() => {
    return getCartItems()
  })

  const addItemToCart = (id: string) => {
    setCartItems((prevItems) => [...prevItems, id])
    addItemToLocalStorageCart(id)
  }

  const removeItemFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item !== id))
    removeItemFromLocalStorageCart(id)
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
