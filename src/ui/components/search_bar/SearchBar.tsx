import './SearchBar.modules.css'
import { Close } from '@/ui/icons'
export const SearchBar = ({
  placeholder = 'Search for a smartphone...',
  results = 20,
  value = '',
  onChange = () => {},
}: {
  placeholder?: string
  results?: number
  value?: string
  onChange?: (value: string) => void
}) => {
  return (
    <div className='search-bar' role='search'>
      <label className='visually-hidden'>
        {!value && <span>{placeholder}</span>}
        <input
          id='search-input'
          type='text'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label='Campo de búsqueda'
          aria-describedby='search-results'
        />
        {value && (
          <button
            onClick={() => onChange('')}
            aria-label='Limpiar búsqueda'
            className='search-bar__close-button'
          >
            <Close className='search-bar__close' />
          </button>
        )}
      </label>
      <span id='search-results' aria-live='polite'>
        {results} Results
      </span>
    </div>
  )
}
