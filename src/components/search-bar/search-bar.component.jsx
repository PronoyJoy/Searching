

import './search-bar.styles.css'
const SearchBar = (className,placeholder,OnSearchChangeHandler) => {

    return (
      <div>
        <input
          className={`search-bar ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={OnSearchChangeHandler}
        />
      </div>
    );
  }

export default SearchBar;
