import css from './SearchBar.module.css'
import { useRef } from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBar = ({onSubmit}) => {
    const inputRef = useRef(null);

const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
    onSubmit(query);
    inputRef.current.value = '';
}
    
    return (
        <header className={css.header}>
  <form onSubmit={handleSubmit} className={css.form}>
  <div>
  
    <input className={css.input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      ref={inputRef}
      required
    />
<FaSearch className={css.searchIcon} size='14px'/>
   </div>
   <button className={css.button} type="submit">Search</button>
   
  </form>
</header>

    )
}

export default SearchBar