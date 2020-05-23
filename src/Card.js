import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='cf fl w-100 w-20-ns pb3'>
      <div className='bg-light-green dib br3 grow bw2 pa3 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
        <div>
          <h2 className='f5'>{name}</h2>
          <p className='f7'>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
