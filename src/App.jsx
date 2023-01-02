import React, { useState } from 'react';
import ItemList from './components/ItemList';
import './styles/App.css';
import Title from './components/Title'
import AddItemForm from './components/AddItemForm';
import data from './data/data';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [items, setItems] = useState(data);

  const addItem = (item) => {
    setItems([...items, item]);
  };
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  {console.log("Items: ", items)}
  return (
    <>
      <Title text="Productos"></Title>
      <AddItemForm addItem={addItem} />
      <ItemList 
        items={items} 
        render={(item) => (
          <>
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-value">${item.value}</div>
            <button className='btnSubmit danger' onClick={() => removeItem(item.id)}>Remove</button>
          </>
        )} />
    </>
  );
};

export default App;

