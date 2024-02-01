// ItemPage.js
import React, { useState } from 'react';
import ItemForm from './ItemForm';

const ItemPage = () => {
  const [items, setItems] = useState([]);
  
  const handleAddItem = (newItem) => {
    // Add the new item to the items list
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h2>Item Page</h2>
      <ItemForm onSubmit={handleAddItem} />
      {/* Display items here */}
    </div>
  );
};

export default ItemPage;
