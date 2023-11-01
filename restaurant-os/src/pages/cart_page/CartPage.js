import React from 'react';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import './CartPage.css';

function CartPage() {
    return (
        <div className="cart-container">
          <h2>Your Cart</h2>
          <div className="cart-items">
            <div className="cart-item">
            <span>Uptown Ramen</span>
            <div className="quantity-container">
            <button className="btn btn-outline-secondary">-</button>
            <span>Quantity: 1</span>
            <button className="btn btn-outline-secondary">+</button>
            </div>
            <div className="edits">
            <span>Edits: Remove pork</span>
            </div>
            <span>Total: $16.00</span>
            </div>

            <div className="cart-item">
            <span>California Roll</span>
            <div className="quantity-container">
            <button className="btn btn-outline-secondary">-</button>
            <span>Quantity: 2</span>
            <button className="btn btn-outline-secondary">+</button>
            </div>
            <span>Total: $20.00</span>
            </div>
            <div className="cart-item">
            <span>California Roll</span>
            <div className="quantity-container">
            <button className="btn btn-outline-secondary">-</button>
            <span>Quantity: 2</span>
            <button className="btn btn-outline-secondary">+</button>
            </div>
            <span>Total: $20.00</span>
            </div>
            <div className="cart-item">
            <span>California Roll</span>
            <div className="quantity-container">
            <button className="btn btn-outline-secondary">-</button>
            <span>Quantity: 2</span>
            <button className="btn btn-outline-secondary">+</button>
            </div>
            <span>Total: $20.00</span>
            </div>
            <div className="cart-item">
            <span>California Roll</span>
            <div className="quantity-container">
            <button className="btn btn-outline-secondary">-</button>
            <span>Quantity: 2</span>
            <button className="btn btn-outline-secondary">+</button>
            </div>
            <span>Total: $20.00</span>
            </div>
            <div className="cart-item">
            <span>California Roll</span>
            <div className="quantity-container">
            <button className="btn btn-outline-secondary">-</button>
            <span>Quantity: 2</span>
            <button className="btn btn-outline-secondary">+</button>
            </div>
            <span>Total: $20.00</span>
            </div>
            <div className="cart-item">
            <span>California Roll</span>
            <div className="quantity-container">
            <button className="btn btn-outline-secondary">-</button>
            <span>Quantity: 2</span>
            <button className="btn btn-outline-secondary">+</button>
            </div>
            <span>Total: $20.00</span>
            </div>
            <div className="cart-item">
            <span>California Roll</span>
            <div className="quantity-container">
            <button className="btn btn-outline-secondary">-</button>
            <span>Quantity: 2</span>
            <button className="btn btn-outline-secondary">+</button>
            </div>
            <span>Total: $20.00</span>
            </div>
            <div className="cart-item">
            <span>California Roll</span>
            <div className="quantity-container">
            <button className="btn btn-outline-secondary">-</button>
            <span>Quantity: 2</span>
            <button className="btn btn-outline-secondary">+</button>
            </div>
            <span>Total: $20.00</span>
            </div>
            <div className="cart-item">
            <span>California Roll</span>
            <div className="quantity-container">
            <button className="btn btn-outline-secondary">-</button>
            <span>Quantity: 2</span>
            <button className="btn btn-outline-secondary">+</button>
            </div>
            <span>Total: $20.00</span>
            </div>
            <div className="cart-item">
            <span>California Roll</span>
            <div className="quantity-container">
            <button className="btn btn-outline-secondary">-</button>
            <span>Quantity: 2</span>
            <button className="btn btn-outline-secondary">+</button>
            </div>
            <span>Total: $20.00</span>
            </div>
            <div className="cart-item">
            <span>California Roll</span>
            <div className="quantity-container">
            <button className="btn btn-outline-secondary">-</button>
            <span>Quantity: 2</span>
            <button className="btn btn-outline-secondary">+</button>
            </div>
            <span>Total: $20.00</span>
            </div>
            <div className="cart-item">
            <span>California Roll</span>
            <div className="quantity-container">
            <button className="btn btn-outline-secondary">-</button>
            <span>Quantity: 2</span>
            <button className="btn btn-outline-secondary">+</button>
            </div>
            <span>Total: $20.00</span>
            </div>
            <div className="cart-item">
            <span>California Roll</span>
            <div className="quantity-container">
            <button className="btn btn-outline-secondary">-</button>
            <span>Quantity: 2</span>
            <button className="btn btn-outline-secondary">+</button>
            </div>
            <span>Total: $20.00</span>
            </div>
            <div className="cart-item">
            <span>California Roll</span>
            <div className="quantity-container">
            <button className="btn btn-outline-secondary">-</button>
            <span>Quantity: 2</span>
            <button className="btn btn-outline-secondary">+</button>
            </div>
            <span>Total: $20.00</span>
            </div>
          </div>
          <div className="cart-summary">
            <p>Total: $36.00</p>
            <button className="btn btn-success">Proceed to Checkout</button>
          </div>
        </div>
      );
}

export default CartPage;
