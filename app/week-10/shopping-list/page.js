"use client";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { redirect } from "next/navigation";

import ItemList from "./item-list";
import NewIem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItem, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);
  const [ingredient, setIngredient] = useState(null);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };


  const loadItems = async () => {
    const loadedItems = await getItem(user.uid);
    setItems(loadedItems);
  };

  useEffect(() => {
    loadItems();
  }, [items]);  

  const handleItemAdd = (item) => {
    let id = addItem(user.uid, item);
    setItems((prevItems) => [...prevItems, {id:id, ...item}]);
  };

  const handleItemClicked = (itemName) => {
    setIngredient(
      itemName
        .replace(/[^a-z\s]+$/i, " ")
        .trim()
        .split(",")[0]
        .replace(" ", "_")
    );
  };

  if (!user) {
    alert("You must be signed in to view this page");
    redirect("/week10", "replace");
  }
  if (user) {
    return (
   
      <div className="bg-slate-950 w-full p-8 flex">
        <div className="pr-4">
            <h1 className="text-2xl font-bold mb-4 text-white">Shopping List</h1>
            <h3 className="text-xl font- text-black ">Add New Item</h3>
          <NewIem onAddItem={handleItemAdd} />
          <ItemList items={items} handleClick={handleItemClicked} />
        </div>
        <div>
        <h1 className="text-2xl font-bold mb-4 text-white">Meal Ideas</h1>
        <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
     


 
    );
  }
}