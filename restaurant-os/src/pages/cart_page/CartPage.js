import React from 'react';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import './CartPage.css';
import { FaTrash } from 'react-icons/fa'; // Import the trash can icon

function CartPage() {
    return (
        <div className="cart-container">
          <h2>Your Cart</h2>
          <div className="cart-items">
            
            <div className="cart-item">
                <div className="item-details">
                    <img src="/noodles.jpeg" alt="Food Item" className="food-image" />
                    <div className="item-info">
                        <h3>Uptown Ramen</h3>
                        
                        <p>Remove pork</p>
                    </div>
                </div>
                <div className="quantity-container">
                    <button className="btn btn-outline-secondary mr-2">-</button>
                    <span>1</span>
                    <button className="btn btn-outline-secondary">+</button>
                </div>
            <span className="cart-item-price">$16.00</span>
            <button className="btn btn-link remove-button">
            <FaTrash />
            </button>
            </div>

            <div className="cart-item">
                <div className="item-details">
                    <img src="/sushi.png" alt="Food Item" className="food-image" />
                    <div className="item-info">
                        <h3>California Roll</h3>
                        
                        <p></p>
                    </div>
                </div>
                <div className="quantity-container">
                    <button className="btn btn-outline-secondary mr-2">-</button>
                    <span>1</span>
                    <button className="btn btn-outline-secondary">+</button>
                </div>
            <span className="cart-item-price">$10.00</span>
            <button className="btn btn-link remove-button">
            <FaTrash />
            </button>
            </div>

            <div className="cart-item">
                <div className="item-details">
                    <img src="/sushi.png" alt="Food Item" className="food-image" />
                    <div className="item-info">
                        <h3>Dynamite Roll</h3>
                        
                        <p></p>
                    </div>
                </div>
                <div className="quantity-container">
                    <button className="btn btn-outline-secondary mr-2">-</button>
                    <span>1</span>
                    <button className="btn btn-outline-secondary">+</button>
                </div>
            <span className="cart-item-price">$11.00</span>
            <button className="btn btn-link remove-button">
            <FaTrash />
            </button>
            </div>

            <div className="cart-item">
                <div className="item-details">
                    <img src="/kappamaki.jpeg" alt="Food Item" className="food-image" />
                    <div className="item-info">
                        <h3>Kappa Maki (6pcs)</h3>
                        
                        <p></p>
                    </div>
                </div>
                <div className="quantity-container">
                    <button className="btn btn-outline-secondary mr-2">-</button>
                    <span>2</span>
                    <button className="btn btn-outline-secondary">+</button>
                </div>
            <span className="cart-item-price">$12.00</span>
            <button className="btn btn-link remove-button">
            <FaTrash />
            </button>
            </div>

            <div className="cart-item">
                <div className="item-details">
                    <img src="/desert.png" alt="Food Item" className="food-image" />
                    <div className="item-info">
                        <h3>Matcha Cheesecake</h3>
                        
                        <p></p>
                    </div>
                </div>
                <div className="quantity-container">
                    <button className="btn btn-outline-secondary mr-2">-</button>
                    <span>1</span>
                    <button className="btn btn-outline-secondary">+</button>
                </div>
            <span className="cart-item-price">$6.00</span>
            <button className="btn btn-link remove-button">
            <FaTrash />
            </button>
            </div>

            <div className="cart-item">
                <div className="item-details">
                    <img src="/sushi.png" alt="Food Item" className="food-image" />
                    <div className="item-info">
                        <h3>Philadelphia Roll</h3>
                        
                        <p>Extra avocado</p>
                    </div>
                </div>
                <div className="quantity-container">
                    <button className="btn btn-outline-secondary mr-2">-</button>
                    <span>1</span>
                    <button className="btn btn-outline-secondary">+</button>
                </div>
            <span className="cart-item-price">$12.00</span>
            <button className="btn btn-link remove-button">
            <FaTrash />
            </button>
            </div>

            <div className="cart-item">
                <div className="item-details">
                    <img src="/noodles.jpeg" alt="Food Item" className="food-image" />
                    <div className="item-info">
                        <h3>Tempura Udon</h3>
                        
                        <p></p>
                    </div>
                </div>
                <div className="quantity-container">
                    <button className="btn btn-outline-secondary mr-2">-</button>
                    <span>1</span>
                    <button className="btn btn-outline-secondary">+</button>
                </div>
            <span className="cart-item-price">$14.00</span>
            <button className="btn btn-link remove-button">
            <FaTrash />
            </button>
            </div>

            <div className="cart-item">
                <div className="item-details">
                    <img src="/appetizers.jpeg" alt="Food Item" className="food-image" />
                    <div className="item-info">
                        <h3>Gyoza (6 pcs)</h3>
                        
                        <p></p>
                    </div>
                </div>
                <div className="quantity-container">
                    <button className="btn btn-outline-secondary mr-2">-</button>
                    <span>1</span>
                    <button className="btn btn-outline-secondary">+</button>
                </div>
            <span className="cart-item-price">$6.00</span>
            <button className="btn btn-link remove-button">
            <FaTrash />
            </button>
            </div>


          </div>
          <p className="total-price">Total: $36.00</p>


          <div className="button-container">
            
            <div className="return-to-menu">
                <button className="btn btn-primary">Return to Menu</button>
            </div>

            <div className="cart-summary">
                <button className="btn btn-success">Submit Order</button>
            </div>

          </div>

        </div>
      );
}

export default CartPage;
