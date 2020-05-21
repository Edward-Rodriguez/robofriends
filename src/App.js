import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

// STATE : description of app / object that describes application
// ex: robot and whatever is entered in the searchbox

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: '',
    };
  }

  onSearchChange(event) {
    console.log(event);
  }

  render() {
    return (
      <div className='tc'>
        <header>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
        </header>
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
