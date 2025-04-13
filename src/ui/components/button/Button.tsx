import styles from './Button.module.css'

export const Button = ({
  children,
  disabled,
  onClick,
  ariaLabel,
}: {
  children: React.ReactNode
  disabled: boolean
  onClick: () => void
  ariaLabel?: string
}) => {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      {children}
    </button>
  )
}
