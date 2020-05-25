import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue ma3 br3 tc'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
