// /app/week-4/new-item.js
"use client";
import React, { useState } from 'react';

const NewItem = () => {
  // State variables
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-blue-1500 rounded-md shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='item name'
            className="w-full border border-gray-100 rounded px-3 py-2 focus:outline-none focus:border-blue-500 text-gray-500"
          />
        </div>

        {/* Quantity and Category Fields Side by Side */}
        <div className="flex space-x-4">
          {/* Quantity Field with half width */}
          <div className="flex-1">
            <input
              type="number"
              id="quantity"
              min="1"
              max="99"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
              className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Category Field with added margin-right */}
          <div className="flex-1" style={{ marginRight: '8px' }}>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>Category</option>
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen-food">Frozen Foods</option>
              <option value="canned-goods">Canned Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          +
        </button>
      </form>
    </div>
  );
};

export default NewItem;
