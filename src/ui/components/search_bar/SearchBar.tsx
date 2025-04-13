import { Icon } from '@/ui/icons/Icon'
import styles from './SearchBar.module.css'
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
    <div className={styles.searchBar} role='search'>
      <label className='visually-hidden' aria-label='Campo de búsqueda'>
        {!value && <span>{placeholder}</span>}
        <input
          id='search-input'
          type='text'
          value={value}
          autoFocus
          onChange={(e) => onChange(e.target.value)}
          aria-label='Campo de búsqueda'
          aria-describedby='search-results'
          list='search-suggestions'
        />
        <datalist id='search-suggestions' role='listbox'>
          <option value='Oppo'></option>
          <option value='Samsung'></option>
          <option value='Apple'></option>
          <option value='Huawei'></option>
        </datalist>
        {value && (
          <button
            onClick={() => onChange('')}
            aria-label='Limpiar búsqueda'
            className={styles.searchBar__closeButton}
          >
            <Icon
              className={styles.searchBar__close}
              name='close'
              width={8}
              height={9}
            />
          </button>
        )}
      </label>
      <span
        id='searchResults'
        className={styles.searchBar__results}
        aria-live='polite'
      >
        {results} Results
      </span>
    </div>
  )
}
