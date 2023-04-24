import { Component } from "react";
import Cardlist from "./components/card-list/card-list.component";
import SearchBar from "./components/search-bar/search-bar.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchstring: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  OnSearchChange = (event) => {
    const searchstring = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchstring }; // set the value of search string
    });
  };

  render() {
    // const {onSearchChange} = this;

    const monsterlist = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchstring);
    });

    return (
      <div className="App">

      <h1 className="app-title"> Search Game </h1>
        {/* <input
          className="search-box"
          type="search"
          placeholder="search profiles"
          onChange={onSearchChange}
        /> */}

        {/* {monsterlist.map((monster) => {
          return (
            <div key={monster.id}>
              <h1> {monster.name}</h1>
            </div>
          );
        })} */}
        <SearchBar
          OnSearchChangeHandler={this.OnSearchChange}
          className='search-box'
          placeholder='search'
        />

        <Cardlist monsters={monsterlist} />

        
      </div>
    );
  }
}

export default App;
