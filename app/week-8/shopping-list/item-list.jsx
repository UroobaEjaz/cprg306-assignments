"use client";
import Item from "./item.js";
import React, { useState } from "react";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = items
    .map((item) => item)
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

  return (
    <div className="mt-8 text-white">
      <div>
        <label htmlFor="sort">Sort by: </label>
        <button
          onClick={() => setSortBy("name")}
          className={`p-1 m-2 w-28 ${
            sortBy === "name" ? "bg-orange-400" : "bg-orange-500"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-1 m-2 w-28 ${
            sortBy === "category" ? "bg-orange-400" : "bg-orange-500"
          }`}
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item.name)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;