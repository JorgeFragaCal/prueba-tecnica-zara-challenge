import './Slider.modules.css'
import { useScroll } from '../hooks/useScroll'

export const Slider = ({ children }: { children: React.ReactNode }) => {
  const { containerRef, scrollPercentage, scrollWidth, clientWidth } =
    useScroll()

  return (
    <div className='slider__container'>
      <section className='slider' ref={containerRef}>
        <div className='slider__content'>{children}</div>
      </section>
      <div className='slider__scroll'>
        <div
          style={{
            width: `${(clientWidth * 100) / scrollWidth}%`,
            transform: `translateX(${scrollPercentage}%)`,
          }}
          className='slider__scroll-bar'
        ></div>
      </div>
    </div>
  )
}
