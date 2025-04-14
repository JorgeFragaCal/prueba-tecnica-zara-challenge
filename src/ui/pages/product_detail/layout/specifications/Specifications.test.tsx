import { render, screen } from '@testing-library/react'
import { mockCartItems } from '@/test/mocks'
import { Specifications } from './Specifications'
import { expect, describe, it } from 'vitest'

describe('Specifications', () => {
  it('should render the specifications', () => {
    render(<Specifications product={mockCartItems[0]} />)
    expect(screen.getByText('SPECIFICATIONS')).toBeInTheDocument()
    expect(screen.getByText('Screen')).toBeInTheDocument()
    expect(screen.getByText('Resolution')).toBeInTheDocument()
    expect(screen.getByText('Processor')).toBeInTheDocument()
    expect(screen.getByText('Main Camera')).toBeInTheDocument()
    expect(screen.getByText('Selfie Camera')).toBeInTheDocument()
    expect(screen.getByText('Battery')).toBeInTheDocument()
    expect(screen.getByText('OS')).toBeInTheDocument()
    expect(screen.getByText('Screen Refresh Rate')).toBeInTheDocument()
    expect(screen.getByText('6.1"')).toBeInTheDocument()
    expect(screen.getByText('1170 x 2532')).toBeInTheDocument()
    expect(screen.getByText('A15 Bionic')).toBeInTheDocument()
    expect(screen.getByText('3240mAh')).toBeInTheDocument()
    expect(screen.getByText('iOS 15')).toBeInTheDocument()
    expect(screen.getByText('60Hz')).toBeInTheDocument()
    expect(screen.getByText('12MP')).toBeInTheDocument()
    expect(screen.getByText('24MP')).toBeInTheDocument()
  })
})
