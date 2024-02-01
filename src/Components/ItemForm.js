// ItemForm.js
import React, { useState } from 'react';

const ItemForm = ({ onSubmit }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit the form data
    onSubmit({ itemName, itemPrice });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Item Name:</label>
      <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
      <label>Item Price:</label>
      <input type="number" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ItemForm;
