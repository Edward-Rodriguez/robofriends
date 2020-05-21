import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <input
      className='pa3 ba b--green bg-lightest-blue tc'
      type='search'
      placeholder='search robots'
      onChange={searchChange}
    ></input>
  );
};

export default SearchBox;
