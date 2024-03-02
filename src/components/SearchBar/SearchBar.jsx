import css from './SearchBar.module.css'
import { useRef } from 'react';

const SearchBar = ({onSubmit}) => {
    const inputRef = useRef(null);

const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
    onSubmit(query);
}
    
    return (
        <header className={css.header}>
  <form onSubmit={handleSubmit} className={css.form}>
    <input className={css.container}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      ref={inputRef}
    />
    <button type="submit">Search</button>
  </form>
</header>

    )
}

export default SearchBar