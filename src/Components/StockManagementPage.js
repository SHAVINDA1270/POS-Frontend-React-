// StockManagementPage.js
import React, { useState } from 'react';

const StockManagementPage = () => {
  const [stockItems, setStockItems] = useState([
    { id: 1, itemName: 'Product A', quantity: 100 },
    { id: 2, itemName: 'Product B', quantity: 50 },
    // Add more stock items as needed
  ]);

  const handleUpdateStock = (itemId, newQuantity) => {
    // Update the stock quantity for the specified item
    const updatedStock = stockItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setStockItems(updatedStock);
  };

  return (
    <div>
      <h2>Stock Management</h2>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stockItems.map(item => (
            <tr key={item.id}>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>
                {/* Button to update stock */}
                <button onClick={() => handleUpdateStock(item.id, item.quantity + 1)}>
                  Increase
                </button>
                <button onClick={() => handleUpdateStock(item.id, item.quantity - 1)}>
                  Decrease
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockManagementPage;
