import React, { useState } from 'react';
import Item from '../week-5/item';
import items from '../week-5/items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const handleSortByName = () => {
    setSortBy('name');
  };

  const handleSortByCategory = () => {
    setSortBy('category');
  };

  const handleGroupByCategory = () => {
    setSortBy('group');
  };

  const groupedItems = sortedItems.reduce((acc, item) => {
    const category = item.category.toLowerCase(); // Ensure case-insensitive sorting
    if (!acc[category]) {
      acc[category] = [item];
    } else {
      acc[category].push(item);
    }
    return acc;
  }, {});

  return (
    <div>
      {/* Sort Buttons */}
      <button onClick={handleSortByName} style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}>
        Sort by Name
      </button>
      <button onClick={handleSortByCategory} style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}>
        Sort by Category
      </button>
      <button onClick={handleGroupByCategory} style={{ backgroundColor: sortBy === 'group' ? 'lightblue' : 'white' }}>
        Group by Category
      </button>

      {/* Render the Items */}
      {sortBy === 'group' &&
        Object.entries(groupedItems).map(([category, items]) => (
          <div key={category}>
            <h2 className="capitalize">{category}</h2>
            {items.map((item) => (
              <Item key={item.id} {...item} />
            ))}
          </div>
        ))}

      {sortBy !== 'group' &&
        sortedItems.map((item) => <Item key={item.id} {...item} />)}
    </div>
  );
};

export default ItemList;
