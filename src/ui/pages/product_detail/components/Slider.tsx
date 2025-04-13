import styles from './Slider.module.css'
import { useScroll } from './hooks/useScroll'

export const Slider = ({ children }: { children: React.ReactNode }) => {
  const { containerRef, scrollPercentage, scrollWidth, clientWidth } =
    useScroll()

  return (
    <section className={styles.slider__container} aria-label='SIMILAR ITEMS'>
      <h2 className={styles.slider__title}>SIMILAR ITEMS</h2>
      <div className={styles.slider} ref={containerRef}>
        <div className={styles.slider__content}>{children}</div>
      </div>
      <div className={styles.slider__scroll}>
        <div
          style={{
            width: `${(clientWidth * 100) / scrollWidth}%`,
            transform: `translateX(${scrollPercentage}%)`,
          }}
          className={styles.slider__scrollBar}
        ></div>
      </div>
    </section>
  )
}
