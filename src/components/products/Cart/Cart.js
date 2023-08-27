import React from 'react';

function Cart({ items }) {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
            {/* add buttons to adjust quantity */}
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
      <button onClick={() => alert('Proceed to checkout')}>Checkout</button>
    </div>
  );
}

export default Cart;
