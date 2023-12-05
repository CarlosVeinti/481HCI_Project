import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './CartItem.css';

function CartItem({ item, removeFromCart, increaseQuantity, decreaseQuantity }) {
  const { itemName, description, quantity, price, imageSrc, servings } = item;
  //console.log("Item:", item);
  console.log("ingredfient selection:", item.ingredientSelections);
  return (
    <div className="cart-item">
      <div className="item-details">
        <img src={imageSrc} alt="Food Item" className="food-image" />
        <div className="item-info">
          <h3>{itemName}</h3>
          <p>{Object.entries(item.ingredientSelections).map(([ingredient, selection]) => (
              selection !== 'regular' && (
                <li key={ingredient}>
                  <strong>{ingredient}:</strong> {selection}
                </li>
              )
            ))}
          </p>
          
        </div>
      </div>
      <div className="quantity-container">
        <button className="btn btn-outline-secondary" onClick={() => decreaseQuantity(itemName)}>-</button>
        <span>{servings}</span>
        <button className="btn btn-outline-secondary" onClick={() => increaseQuantity(itemName)}>+</button>
      </div>
      <span className="cart-item-price">${(item.totalPrice).toFixed(2)}</span>
      <button className="btn btn-link remove-button" onClick={() => removeFromCart(itemName)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;
