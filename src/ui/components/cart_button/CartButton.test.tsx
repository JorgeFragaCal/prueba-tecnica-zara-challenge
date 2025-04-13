import { render, screen } from '@testing-library/react'
import { CartButton } from './CartButton'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import * as CartContextModule from '@/context/CartContext'

import { mockUseCart } from '@/test/mocks'
describe('CartButton', () => {
  beforeEach(() => {
    vi.spyOn(CartContextModule, 'useCart').mockImplementation(mockUseCart)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('renders a default cart button', () => {
    render(<CartButton />)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it('shows and icon when there are items in the cart', () => {
    render(<CartButton />)
    expect(screen.getByLabelText('bag-active')).toBeInTheDocument()
  })

  it('shows and icon when there are no items in the cart', () => {
    vi.spyOn(CartContextModule, 'useCart').mockImplementation(() => ({
      cartItems: [],
      addItemToCart: vi.fn(),
      removeItemFromCart: vi.fn(),
      clearCart: vi.fn(),
    }))
    render(<CartButton />)
    expect(screen.getByLabelText('bag')).toBeInTheDocument()
  })

  it('shows the correct number of items in the cart', () => {
    render(<CartButton />)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('shows 0 when cart is empty', () => {
    vi.spyOn(CartContextModule, 'useCart').mockImplementation(() => ({
      cartItems: [],
      addItemToCart: vi.fn(),
      removeItemFromCart: vi.fn(),
      clearCart: vi.fn(),
    }))
    render(<CartButton />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('links to the cart page', () => {
    render(<CartButton />)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/cart')
  })
})
