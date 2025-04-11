import './Button.modules.css'

export const Button = ({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode
  disabled: boolean
  onClick: () => void
}) => {
  return (
    <button className='button' disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
