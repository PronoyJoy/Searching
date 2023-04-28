

import './search-bar.styles.css'
const SearchBar = (className,placeholder,OnSearchChangeHandler) => {

    return (
      <div>
        <input
          className={`search-bar ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.OnSearchChangeHandler}
        />
      </div>
    );
  }

export default SearchBar;
