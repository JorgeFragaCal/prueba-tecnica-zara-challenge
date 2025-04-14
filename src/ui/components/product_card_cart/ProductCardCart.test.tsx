import { render, screen, fireEvent } from '@testing-library/react'
import { ProductCardCart } from './ProductCardCart'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import * as CartContextModule from '@/context/CartContext'
import { mockCartItems } from '@/test/mocks'
describe('ProductCardCart', () => {
  const mockCart = {
    cartItems: [],
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

  it('renders the product card with the correct data', () => {
    render(<ProductCardCart product={mockCartItems[0]} />)
    expect(screen.getByText('iPhone 13 Pro')).toBeInTheDocument()
    expect(screen.getByText('100 EUR')).toBeInTheDocument()
    expect(screen.getByText('256 | Color 1')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://example.com/image.jpg',
    )
  })

  it('have correct number of items in the cart', () => {
    render(<ProductCardCart product={{ ...mockCartItems[0], quantity: 24 }} />)
    expect(screen.getByText('Remove (24)')).toBeInTheDocument()
  })

  it('remove 1 item from card', () => {
    const productWithQuantity = { ...mockCartItems[0], quantity: 2 }
    render(<ProductCardCart product={productWithQuantity} />)

    const removeButton = screen.getByText('Remove (2)')
    fireEvent.click(removeButton)

    expect(mockCart.removeItemFromCart).toHaveBeenCalledWith(
      productWithQuantity,
    )
  })

  it('update UI when the quantity of the product changes', () => {
    const productWithQuantity = { ...mockCartItems[0], quantity: 2 }

    const { rerender } = render(
      <ProductCardCart product={productWithQuantity} />,
    )
    expect(screen.getByText('Remove (2)')).toBeInTheDocument()

    const updatedProduct = { ...mockCartItems[0], quantity: 1 }
    rerender(<ProductCardCart product={updatedProduct} />)

    expect(screen.getByText('Remove (1)')).toBeInTheDocument()
  })
})
