import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './CartItem.css';

function CartItem({ item, removeFromCart, increaseQuantity, decreaseQuantity }) {
  const { itemName, description, quantity, price, imageSrc } = item;
  return (
    <div className="cart-item">
      <div className="item-details">
        <img src={item.imageSrc} alt="Food Item" className="food-image" />
        <div className="item-info">
          <h3>{item.itemName}</h3>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="quantity-container">
        <button className="btn btn-outline-secondary" onClick={() => decreaseQuantity(itemName)}>-</button>
        <span>{item.quantity}</span>
        <button className="btn btn-outline-secondary" onClick={() => increaseQuantity(itemName)}>+</button>
      </div>
      <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
      <button className="btn btn-link remove-button" onClick={() => removeFromCart(item.itemName)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;