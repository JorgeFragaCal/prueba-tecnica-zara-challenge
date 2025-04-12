import './Slider.modules.css'
import { useScroll } from '../hooks/useScroll'

export const Slider = ({ children }: { children: React.ReactNode }) => {
  const { containerRef, scrollPercentage, scrollWidth, clientWidth } =
    useScroll()

  return (
    <section className='slider__container' aria-label='SIMILAR ITEMS'>
      <h2 className='slider__title'>SIMILAR ITEMS</h2>
      <div className='slider' ref={containerRef}>
        <div className='slider__content'>{children}</div>
      </div>
      <div className='slider__scroll'>
        <div
          style={{
            width: `${(clientWidth * 100) / scrollWidth}%`,
            transform: `translateX(${scrollPercentage}%)`,
          }}
          className='slider__scroll-bar'
        ></div>
      </div>
    </section>
  )
}
