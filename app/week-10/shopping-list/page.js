
import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { loadItems, addItem, deleteItem } from "../_services/shopping-list-service";

const ShoppingList = ({ user }) => {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user) {
      loadItems(user, setItems);
    }
  }, [user]); // Dependency: user, to trigger the effect when user changes

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

  const handleAddItem = async (newItem) => {
    try {
      if (user) {
        const newItemId = await addItem(user.uid, newItem);
        setItems(prevItems => [...prevItems, { id: newItemId, ...newItem }]);
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      if (user) {
        await deleteItem(user.uid, itemId);
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <main className="bg-slate-950 w-full p-8 flex">
      <div className="  pr-4  ">
        <h1 className="text-2xl font-bold mb-4 text-white">Shopping List</h1>
        <h3 className="text-xl font- text-white">Add New Item</h3>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} onDeleteItem={handleDeleteItem} />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4 text-white">Meal Ideas</h1>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default ShoppingList;
