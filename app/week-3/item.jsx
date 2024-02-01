
 import React from 'react';
import ItemList from "./item-list";

const Item = () => {
  return (
    <ul className="list-none">
      {ItemList.list.map((item, index) => (
        <li key={index} className="p-2 m-4 bg-slate-900 max-w-sm">
          <h2 className="text-xl font-bold">{`${item.name}`}</h2>
          <div className="text-sm">
            Buy { `${item.quantity}`} in {`${item.category}`}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Item;


  