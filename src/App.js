import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

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

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value.toLowerCase() });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField);
    });
    return (
      <div className='tc'>
        <header>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
        </header>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
