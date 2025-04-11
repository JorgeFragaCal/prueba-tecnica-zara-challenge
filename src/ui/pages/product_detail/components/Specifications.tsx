import { Product } from '@/domain/models/Product'
import './Specifications.modules.css'

export const Specifications = ({ product }: { product: Product }) => {
  return (
    <section className='product-detail__specs'>
      <h2 className='product-detail__specs-title'>SPECIFICATIONS</h2>
      <div className='specs-grid'>
        <div className='spec-item'>
          <span>brand</span>
          <span>{product.brand}</span>
        </div>
        <div className='spec-item'>
          <span>Name</span>
          <span>{product.name}</span>
        </div>
        <div className='spec-item'>
          <span>Description</span>
          <span>{product.description}</span>
        </div>
        <div className='spec-item'>
          <span>Screen</span>
          <span>{product.specs.screen}</span>
        </div>
        <div className='spec-item'>
          <span>Resolution</span>
          <span>{product.specs.resolution}</span>
        </div>
        <div className='spec-item'>
          <span>Processor</span>
          <span>{product.specs.processor}</span>
        </div>
        <div className='spec-item'>
          <span>Main Camera</span>
          <span>{product.specs.mainCamera}</span>
        </div>
        <div className='spec-item'>
          <span>Selfie Camera</span>
          <span>{product.specs.selfieCamera}</span>
        </div>
        <div className='spec-item'>
          <span>Battery</span>
          <span>{product.specs.battery}</span>
        </div>
        <div className='spec-item'>
          <span>OS</span>
          <span>{product.specs.os}</span>
        </div>
        <div className='spec-item'>
          <span>Screen Refresh Rate</span>
          <span>{product.specs.screenRefreshRate}</span>
        </div>
      </div>
    </section>
  )
}
