import { fireEvent, render, screen } from '@testing-library/react'
import { ProductInfoHeader } from './ProductInfoHeader'
import { expect, describe, it, vi, beforeEach, afterEach } from 'vitest'
import * as CartContextModule from '@/context/CartContext'
import { mockCartItems } from '@/test/mocks'
describe('ProductInfoHeader', () => {
  const mockCart = {
    cartItems: mockCartItems,
    addItemToCart: vi.fn(),
    removeItemFromCart: vi.fn(),
    clearCart: vi.fn(),
  }

  const mockUseCart = () => mockCart

  beforeEach(() => {
    vi.spyOn(CartContextModule, 'useCart').mockImplementation(mockUseCart)
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.restoreAllMocks()
  })

  it('should render the product info header', () => {
    render(<ProductInfoHeader product={mockCartItems[0]} />)
    expect(screen.getByText('iPhone 13 Pro')).toBeInTheDocument()
    expect(screen.getByText('From 100 EUR')).toBeInTheDocument()
    expect(screen.getByText('256')).toBeInTheDocument()
    expect(screen.getByTitle('Color 1')).toBeInTheDocument()
  })

  it('should render correct number of color options', () => {
    render(<ProductInfoHeader product={mockCartItems[0]} />)
    expect(screen.getByRole('button', { name: 'Color 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Color 2' })).toBeInTheDocument()
  })

  it('should render correct number of storage options', () => {
    render(<ProductInfoHeader product={mockCartItems[0]} />)
    expect(screen.getByRole('button', { name: '256' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '512' })).toBeInTheDocument()
  })

  it('should select color and storage options', () => {
    render(<ProductInfoHeader product={mockCartItems[0]} />)

    const colorButton = screen.getByRole('button', { name: 'Color 2' })
    const storageButton = screen.getByRole('button', { name: '512' })

    fireEvent.click(colorButton)
    fireEvent.click(storageButton)

    expect(screen.getByRole('img').getAttribute('src')).toBe(
      'https://example.com/image2.jpg',
    )
    expect(screen.getByText('From 150 EUR')).toBeInTheDocument()
  })

  it('should add product to cart when button is clicked', () => {
    render(<ProductInfoHeader product={mockCartItems[0]} />)

    const colorButton = screen.getByRole('button', { name: 'Color 2' })
    const storageButton = screen.getByRole('button', { name: '512' })

    fireEvent.click(colorButton)
    fireEvent.click(storageButton)

    const addToCartButton = screen.getByLabelText('Add to cart')
    expect(addToCartButton).toBeEnabled()

    fireEvent.click(addToCartButton)
    expect(mockCart.addItemToCart).toHaveBeenCalledWith({
      ...mockCartItems[0],
      colorOptions: [mockCartItems[0].colorOptions[1]],
      storageOptions: [mockCartItems[0].storageOptions[1]],
    })
  })
})
