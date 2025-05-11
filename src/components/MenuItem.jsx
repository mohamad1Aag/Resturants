import React from 'react';

function MenuItem({ name, price, description, image }) {
  return (
    <div className="menu-item">
      <img src={image} alt={name} style={{ width: '200px', borderRadius: '8px' }} />
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{price} USD</span>
    </div>
  );
}

export default MenuItem;
