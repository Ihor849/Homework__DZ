import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
    const [query, setQuery] = useState('');
  
    const hanleSubmit = event => {
      event.preventDefault();
      onSubmit(query);
      setQuery('');
    };
  
    const handleChange = event => {
      setQuery(event.target.value);
    };
    return (
      <form  onSubmit={hanleSubmit}>
        <label  htmlFor="search">
          Find movie by name
        </label>
        <input
          
          type="text"
          name="search"
          value={query}
          onChange={handleChange}
          placeholder="Search movie..."
          autoComplete="off"
        />
        <button type="submit">
          Search
        </button>
      </form>
    );
  };
  export default SearchForm