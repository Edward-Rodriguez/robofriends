import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
  return (
    <div className='cardContainer'>
      <div className='card'>
        <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
        <div>
          <h2 className='name'>{name}</h2>
          <p className='email'>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
