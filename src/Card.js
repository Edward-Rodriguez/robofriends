import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='cf ph2-ns fl w-100 w-25-ns pa2'>
      <div className='bg-light-green dib br3 grow bw2 pa2 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
