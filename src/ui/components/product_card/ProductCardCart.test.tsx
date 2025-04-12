import { render, screen, fireEvent } from '@testing-library/react'
import { ProductCardCart } from './ProductCardCart'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Product } from '@/domain/models/interfaces'
import * as CartContextModule from '@/context/CartContext'
import { Color, Storage, Price } from '@/domain/models/value-objects'

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
  const product: Product & { quantity?: number } = {
    id: '1',
    name: 'Product 1',
    basePrice: Price.create(100),
    brand: 'Brand 1',
    description: 'Description 1',
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
    colorOptions: [
      Color.create('Color 1', '#000000', 'https://example.com/image.jpg'),
    ],
    storageOptions: [Storage.create('256', Price.create(100))],
    similarProducts: [],
    quantity: 1,
  }
  it('renders the product card with the correct data', () => {
    render(<ProductCardCart product={product} />)
    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(screen.getByText('100 EUR')).toBeInTheDocument()
    expect(screen.getByText('256 | Color 1')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://example.com/image.jpg',
    )
  })

  it('have correct number of items in the cart', () => {
    render(<ProductCardCart product={{ ...product, quantity: 24 }} />)
    expect(screen.getByText('Remove (24)')).toBeInTheDocument()
  })

  it('remove 1 item from card', () => {
    const productWithQuantity = { ...product, quantity: 2 }
    render(<ProductCardCart product={productWithQuantity} />)

    const removeButton = screen.getByText('Remove (2)')
    fireEvent.click(removeButton)

    expect(mockCart.removeItemFromCart).toHaveBeenCalledWith(
      productWithQuantity,
    )
  })

  it('update UI when the quantity of the product changes', () => {
    const productWithQuantity = { ...product, quantity: 2 }

    const { rerender } = render(
      <ProductCardCart product={productWithQuantity} />,
    )
    expect(screen.getByText('Remove (2)')).toBeInTheDocument()

    const updatedProduct = { ...product, quantity: 1 }
    rerender(<ProductCardCart product={updatedProduct} />)

    expect(screen.getByText('Remove (1)')).toBeInTheDocument()
  })
})
