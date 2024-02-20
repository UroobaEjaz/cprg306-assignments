// item-list.js

import React, { useState } from 'react';
import Item from './item';
import { list } from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  const sortItems = (a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  };

  const items = [...list].sort(sortItems);

  const renderItems = () => {
    return items.map((item) => (
      <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
    ));
  };

  const groupItemsByCategory = () => {
    const groupedItems = items.reduce((acc, item) => {
      const category = item.category.toLowerCase();
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});

    return Object.entries(groupedItems).map(([category, items]) => (
      <div key={category} className="mb-8">
        <h2 className="text-2xl font-bold capitalize mb-4 text-white">{category}</h2>
        <ul className="list-none">{items.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}</ul>
      </div>
    ));
  };

  return (
    <div className="m-4">
      <div className="">
        <label htmlFor="sort" className="text-white">Sort by: </label>
        <button
          className={`p-1 m-2 w-28 ${sortBy === 'name' ? 'bg-orange-500 text-white' : 'bg-orange-500 text-gray-800'}`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>

        <button
          className={`p-1 m-2 w-28 ${sortBy === 'category' ? 'bg-orange-500 text-white' : 'bg-orange-700 text-gray-800'}`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
        <button
          className={`p-1 m-2 w-28 ${sortBy === 'grouped' ? 'bg-orange-500 text-white' : 'bg-orange-700 text-gray-800'}`}
          onClick={() => setSortBy('grouped')}
        >
          Group by Category
        </button>
        <label className="absolute top-20 left-240 text-gray-600 text-xs italic" htmlFor="group-category">← "Grouped Category" is an optional extra challenge</label>
      </div>

      {sortBy === 'grouped' ? groupItemsByCategory() : <ul className="list-none">{renderItems()}</ul>}

    </div>
  );

};

export default ItemList;
