import React, {useState} from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';
import CartItem from '../../components/CartItem/CartItem';
import './CartPage.css';
import { FaTrash } from 'react-icons/fa'; // Import the trash can icon
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../context';


function CartPage() {
    const navigate = useNavigate();
    const { cartItems, updateCart,removeFromCart } = useContext(MyContext);
    // Currently hard coded to show cart page
    console.log("Cart items:", cartItems);
    const [servings, setservings] = useState(1);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.totalPrice * 1, 0).toFixed(2);
    }

    const LocalremoveFromCart = (itemName) => {
        removeFromCart(itemName)
    }

  const increaseQuantity = (itemName) => {

   
    updateCart(
        cartItems.map((item) =>{
            return item.itemName === itemName ? { ...item, servings: item.servings + 1,price: item.price, totalPrice: item.totalPrice + (item.price) } : item
          }
        )
    );
  };

  const decreaseQuantity = (itemName) => {
    updateCart(
        cartItems.map((item) =>{
            return item.itemName === itemName ? { ...item, servings: item.servings -1,price: item.price, totalPrice: item.totalPrice - (item.price) } : item
          }
        )
    );
  };
      
    return (
        <div className="nav_Header">
        <NavigationHeader />
            <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cartItems.map((item) => (
                <CartItem 
                    key={item.itemName} 
                    item={item} 
                    removeFromCart={LocalremoveFromCart} 
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    />
                ))}
                </div>

                <p className = "total-price">Total: ${calculateTotalPrice()}</p>
                <div className = "returnsubmitbutton-container">
                    <div className = "return-to-menu">
                        <button className = "btn btn-primary" onClick={() => navigate("/categories")} >Return to Menu</button>
                    </div>
                    <div className="cart-summary">
                        <button className="btn btn-success">Submit Order</button>
                    </div>
                </div>
            </div>
            
        </div>
      );
}

export default CartPage;