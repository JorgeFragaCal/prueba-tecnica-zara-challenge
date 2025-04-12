import { render, screen } from '@testing-library/react'
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
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render correct number of results', () => {
    render(<SearchBar results={100} />)
    expect(screen.getByText('100 Results')).toBeInTheDocument()
  })
})
