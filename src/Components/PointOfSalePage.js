// PointOfSalePage.js
import React, { useState } from 'react';

const PointOfSalePage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddToCart = (item) => {
    // Add item to the shopping cart
    setCartItems([...cartItems, item]);
    // Update total amount
    setTotalAmount(totalAmount + item.price);
  };

  const handleCheckout = () => {
    // Implement backend integration for transaction handling
    // For demonstration, clear the cart and reset the total amount
    setCartItems([]);
    setTotalAmount(0);
    alert('Checkout successful!'); // You can replace this with an API call to your backend
  };

  return (
    <div>
      <h2>Point of Sale</h2>
      <div>
        {/* Display items for sale */}
        <p>Items for Sale:</p>
        {/* Example items - Replace with actual items from your backend */}
        <button onClick={() => handleAddToCart({ id: 1, itemName: 'Product A', price: 20 })}>
          Add Product A to Cart
        </button>
        <button onClick={() => handleAddToCart({ id: 2, itemName: 'Product B', price: 30 })}>
          Add Product B to Cart
        </button>
      </div>
      <div>
        {/* Display shopping cart */}
        <p>Shopping Cart:</p>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>{item.itemName} - ${item.price}</li>
          ))}
        </ul>
        <p>Total Amount: ${totalAmount}</p>
        {/* Checkout button */}
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default PointOfSalePage;
