import React from "react";

const RemoveItemButton = ({ removeItem, item }) => (
  <button onClick={() => removeItem(item.id)}>Remove item</button>
);

export default RemoveItemButton;
