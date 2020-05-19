import React, { Fragment } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

const App = () => {
  return (
    <Fragment>
      <header className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox />
      </header>
      <CardList robots={robots} />
    </Fragment>
  );
};

export default App;
