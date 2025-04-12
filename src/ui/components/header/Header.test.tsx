import { render, screen } from '@testing-library/react'
import { Header } from './Header'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import * as CartContextModule from '@/context/CartContext'
describe('Header', () => {
  const mockUseCart = () => ({
    cartItems: [],
    addItemToCart: vi.fn(),
    removeItemFromCart: vi.fn(),
    clearCart: vi.fn(),
  })

  beforeEach(() => {
    vi.spyOn(CartContextModule, 'useCart').mockImplementation(mockUseCart)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the header', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('renders the cart button', () => {
    render(<Header />)
    expect(screen.getByLabelText('Ir al carrito de compras')).toHaveAttribute(
      'href',
      '/cart',
    )
  })

  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByLabelText('Ir a la página principal')).toHaveAttribute(
      'href',
      '/',
    )
  })
})
