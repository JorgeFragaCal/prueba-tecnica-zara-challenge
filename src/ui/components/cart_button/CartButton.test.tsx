import { render, screen } from '@testing-library/react'
import { CartButton } from './CartButton'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import * as CartContextModule from '@/context/CartContext'

import { Product } from '@/domain/models/interfaces'
import { Price } from '@/domain/models/value-objects'

describe('CartButton', () => {
  const cartItems: (Product & { quantity?: number })[] = [
    {
      id: '1',
      name: 'Product 1',
      basePrice: Price.create(100),
      brand: 'Test Brand',
      description: 'Test Description',
      rating: 4.5,
      specs: {
        screen: '6.1"',
        resolution: '1170 x 2532',
        processor: 'A15 Bionic',
        mainCamera: '12MP',
        selfieCamera: '12MP',
        battery: '3240mAh',
        os: 'iOS 15',
        screenRefreshRate: '60Hz',
      },
      colorOptions: [],
      storageOptions: [],
      similarProducts: [],
      quantity: 1,
    },
  ]

  const mockUseCart = () => ({
    cartItems: cartItems,
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
  it('renders a default cart button', () => {
    render(<CartButton />)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it('shows and icon when there are items in the cart', () => {
    render(<CartButton />)
    expect(screen.getByTestId('bag-icon-active')).toBeInTheDocument()
  })

  it('shows and icon when there are no items in the cart', () => {
    vi.spyOn(CartContextModule, 'useCart').mockImplementation(() => ({
      cartItems: [],
      addItemToCart: vi.fn(),
      removeItemFromCart: vi.fn(),
      clearCart: vi.fn(),
    }))
    render(<CartButton />)
    expect(screen.getByTestId('bag-icon')).toBeInTheDocument()
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
