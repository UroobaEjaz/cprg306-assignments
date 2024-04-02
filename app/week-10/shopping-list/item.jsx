import React from 'react';

export default function Item({ item, onSelect }) {
  return (
    <ul className="border p-2 my-2 bg-blue-950" onClick={() => onSelect && onSelect(item)}>
      <li className="font-bold text-white">{item.name}</li>
      <li className="text-gray-400">Category: {item.category}</li>
      <li className="text-gray-400">Quantity: {item.quantity}</li>
    </ul>
  );
}
