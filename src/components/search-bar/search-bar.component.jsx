import { Component } from "react";
import './search-bar.styles.css'
class SearchBar extends Component {
  render() {
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
}
export default SearchBar;
