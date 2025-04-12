import { render, screen } from '@testing-library/react'
import { SmartphoneCard } from './SmartphoneCard'
import { describe, expect, it } from 'vitest'
import { Price } from '@/domain/models/value-objects'
import { ProductList } from '@/domain/models/ProductList'

describe('SmartphoneCard url', () => {
  const product: ProductList = {
    id: '1',
    name: 'Product 1',
    basePrice: Price.create(100),
    brand: 'Brand 1',
    imageUrl: 'https://example.com/image.jpg',
  }
  it('renders the product card with the correct data', () => {
    render(<SmartphoneCard url={'/product/1'} product={product} />)
    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(screen.getByText('Brand 1')).toBeInTheDocument()
    expect(screen.getByText('100 EUR')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://example.com/image.jpg',
    )
  })

  it('link to product detail', () => {
    render(<SmartphoneCard url={'/product/1'} product={product} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/product/1')
  })
})
