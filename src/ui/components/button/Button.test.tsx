import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'
import { describe, expect, it, vi } from 'vitest'

describe('Button', () => {
  it('renders a default button', () => {
    render(
      <Button disabled={false} onClick={() => {}}>
        Click me
      </Button>,
    )
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders a disabled button', () => {
    render(
      <Button disabled={true} onClick={() => {}}>
        Click me
      </Button>,
    )
    expect(screen.getByText('Click me')).toBeDisabled()
  })

  it('button calls onClick prop when clicked', () => {
    const handleClick = vi.fn()
    render(
      <Button disabled={false} onClick={handleClick}>
        Click me
      </Button>,
    )
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalled()
  })
})
