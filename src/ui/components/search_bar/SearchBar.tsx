import './SearchBar.modules.css'
export const SearchBar = ({
  placeholder = 'Search for a smartphone...',
  results = 0,
  value = '',
  onChange = () => {},
}: {
  placeholder?: string
  results?: number
  value?: string
  onChange?: (value: string) => void
}) => {
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span>{results} results</span>
    </div>
  )
}
