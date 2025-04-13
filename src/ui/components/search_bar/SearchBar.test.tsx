import { render, screen, fireEvent } from '@testing-library/react'
import { SearchBar } from './SearchBar'
import { describe, it, expect } from 'vitest'

describe('SearchBar', () => {
  it('should render', () => {
    render(<SearchBar />)
    expect(screen.getByRole('search')).toBeInTheDocument()
  })

  it('should render label', () => {
    render(<SearchBar />)
    expect(screen.getByText('Search for a smartphone...')).toBeInTheDocument()
  })

  it('should render input', () => {
    render(<SearchBar />)
    expect(screen.getByLabelText('Campo de búsqueda')).toBeInTheDocument()
  })

  it('should render correct number of results', () => {
    render(<SearchBar results={100} />)
    expect(screen.getByText('100 Results')).toBeInTheDocument()
  })
  it('should have value', () => {
    render(<SearchBar value='test' />)
    expect(screen.getByLabelText('search-input')).toHaveValue('test')
  })

  it('should show clear button if value is present', () => {
    render(<SearchBar value='test' />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('button should clear input', () => {
    const { rerender } = render(<SearchBar value='test' />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    rerender(<SearchBar value='' />)
    expect(screen.getByLabelText('search-input')).toHaveValue('')
  })
})
