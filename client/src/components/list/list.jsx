import React from 'react';

const List = ({ items, icons }) => (
  Object.keys(items).map((item,i) => (
    <div key={i} className='List'>
      <img className='List__Image' src={icons[item]} alt='icon' />
      <span className='List__Text'>{items[item]}</span>
    </div>
  ))
);

export default List;
