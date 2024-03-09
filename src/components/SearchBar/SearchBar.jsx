import css from './SearchBar.module.css'
import { useRef } from 'react';
import { FaSearch } from "react-icons/fa";
import { toast } from 'react-hot-toast';

const SearchBar = ({onSubmit}) => {
    const inputRef = useRef(null);

const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
if (!query.trim()) {
    toast.error('Please enter a search query.');
    
    return;
}
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
<FaSearch className={css.searchIcon} size='14px'
onClick={handleSubmit}
/>
   </div>
   <button className={css.button} type="submit">Search</button>
   
  </form>
  
</header>

    )
}

export default SearchBar