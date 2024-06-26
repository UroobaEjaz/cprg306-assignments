import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState('name');

  const itemList = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }

    return 0;
  });

  return (
    <div className="use client mt-8 text-white">
      <div>
        <label htmlFor="sort">Sort by: </label>
        <button
          onClick={() => setSortBy('name')}
          className={`p-1 m-2 w-28 ${
            sortBy === 'name' ? 'bg-orange-400' : 'bg-orange-500'
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`p-1 m-2 w-28 ${
            sortBy === 'category' ? 'bg-orange-400' : 'bg-orange-500'
          }`}
        >
          Category
        </button>
      </div>
      <ul>
        {itemList.map((item) => (
          <li className="bg-slate-800 my-3" key={item.id}>
            <Item item={item} onSelect={onItemSelect} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
