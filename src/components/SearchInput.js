import { FaSearch } from 'react-icons/fa'
import '../styles/searchInput.css'

export const SearchInput = ({changer, val, placeholder}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    changer('')
  }

  const handleChange = (e) => changer(e.target.value)

  return (
    <form
      onSubmit={handleSubmit}
      className="search-bg"
    >
      <label htmlFor='searchInput'>
        <FaSearch className="search__icon"/>
      </label>
      
      <input 
        className="search__input"
        placeholder={placeholder}
        onChange={handleChange} 
        value={val} 
        id='searchInput'
        type='text'
        autoComplete="new-password"
      />
    </form>
  )
}