import React from 'react';
import MenuItem from '../components/MenuItem';
import menuData from '../data/menuData';

function Menu() {
  return (
    <div>
      <h1>قائمة الطعام</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {menuData.map(item => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
