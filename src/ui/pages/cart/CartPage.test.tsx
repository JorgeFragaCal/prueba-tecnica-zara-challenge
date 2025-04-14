import { render, screen } from '@testing-library/react'
import { CartPage } from './CartPage'
import { expect, describe, it, vi, afterEach, beforeEach } from 'vitest'
import { mockCartItems } from '@/test/mocks'
import { mockUseCart } from '@/test/mocks'
import * as CartContextModule from '@/context/CartContext'
describe('CartPage', () => {
  beforeEach(() => {
    vi.spyOn(CartContextModule, 'useCart').mockImplementation(mockUseCart)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('should render the cart page', () => {
    render(<CartPage />)
    expect(screen.getByText('Cart (1)')).toBeInTheDocument()
  })

  it('should render the cart items', () => {
    render(<CartPage />)
    expect(screen.getByText('iPhone 13 Pro')).toBeInTheDocument()
  })

  it('should render correct number of cart items', () => {
    vi.spyOn(CartContextModule, 'useCart').mockImplementation(() => ({
      cartItems: [mockCartItems[0], { ...mockCartItems[0], id: '2' }, { ...mockCartItems[0], id: '3' }],
      addItemToCart: vi.fn(),
      removeItemFromCart: vi.fn(),
      clearCart: vi.fn(),
    }))
    render(<CartPage />)
    expect(screen.getByText('Cart (3)')).toBeInTheDocument()
  })
})
