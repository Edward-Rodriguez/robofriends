import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div
      className='tc grow br3 pa3 dib ma2 bw2 shadow-5'
      style={{
        backgroundImage: 'linear-gradient(315deg, #001B44, #0ccac4)',
      }}
    >
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2 className='f5'>{name}</h2>
        <p className='f7'>{email}</p>
      </div>
    </div>
  );
};

export default Card;
