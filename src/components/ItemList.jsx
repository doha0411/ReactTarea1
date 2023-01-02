import React, { useState } from "react";
import '../styles/ItemList.css';

const ItemList = ({ items, render }) => {
  return (
    <div className="cart">
      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          {render(item)}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
