import { render, screen } from '@testing-library/react'
import { Slider } from './Slider'
import { expect, describe, it } from 'vitest'
import { SmartphoneCard } from '@/ui/components/smartphone_card/SmartphoneCard'
import { mockProductList } from '@/test/mocks'
describe('Slider', () => {
  it('should render', () => {
    render(
      <Slider>
        <SmartphoneCard
          product={mockProductList[0]}
          url='https://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-A60-midnight-purple.webp'
        />
        <SmartphoneCard
          product={mockProductList[1]}
          url='https://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-A60-midnight-purple.webp'
        />
      </Slider>,
    )
    expect(screen.getByLabelText('SIMILAR ITEMS')).toBeInTheDocument()
  })

  it('should render the correct number of elements', () => {
    render(
      <Slider>
        <SmartphoneCard
          product={mockProductList[0]}
          url='https://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-A60-midnight-purple.webp'
        />
        <SmartphoneCard
          product={mockProductList[1]}
          url='https://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-A60-midnight-purple.webp'
        />
      </Slider>,
    )
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })
})
