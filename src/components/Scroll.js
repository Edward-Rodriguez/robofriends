import React from 'react';

//props
//state
//children (Scroll)
// Scroll wraps CardList in App.js, hence CardList is a child of Scroll

const Scroll = (props) => {
  // can add style to div in React using double curly brackets, {js expression}
  return (
    <div
      style={{
        overflowY: 'scroll',
        borderTop: '6px solid  #0ccac4',
        height: '500px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
