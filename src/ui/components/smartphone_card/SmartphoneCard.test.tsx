import { render, screen } from '@testing-library/react'
import { SmartphoneCard } from './SmartphoneCard'
import { describe, expect, it } from 'vitest'

import { mockProduct } from '@/test/mocks'
describe('SmartphoneCard url', () => {
  it('renders the product card with the correct data', () => {
    render(<SmartphoneCard url={'/product/1'} product={mockProduct} />)
    expect(screen.getByText('iPhone 13 Pro')).toBeInTheDocument()
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('100 EUR')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://example.com/image.jpg',
    )
  })

  it('link to product detail', () => {
    render(<SmartphoneCard url={'/product/1'} product={mockProduct} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/product/1')
  })
})
