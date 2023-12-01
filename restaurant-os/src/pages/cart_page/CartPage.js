import React, {useState} from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';
import CartItem from '../../components/CartItem/CartItem';
import './CartPage.css';
import { FaTrash } from 'react-icons/fa'; // Import the trash can icon
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import { useNavigate } from 'react-router-dom';


function CartPage() {
    const navigate = useNavigate();
    // Currently hard coded to show cart page
    const [cartItems, setCartItems] = useState([
        {
            itemName: "Uptown Ramen",
            description: "Remove pork",
            quantity: 1,
            price: 16.0,
            imageSrc: "/uptownramen.jpg"
        },
        {
            itemName: "California Roll",
            description: "",
            quantity: 1,
            price: 10.0,
            imageSrc: "/californiaroll.jpg"
        },
        {
            itemName: "Dynamite Roll",
            description: "",
            quantity: 1,
            price: 11.0,
            imageSrc: "/dynamiteroll.jpg"
        },
        {
            itemName: "Kappa Maki (6pcs)",
            description: "",
            quantity: 2,
            price: 6.0,
            imageSrc: "/kappamaki.jpeg"
        },
        {
            itemName: "Matcha Cheesecake",
            description: "",
            quantity: 1,
            price: 6.0,
            imageSrc: "/desert.png"
        },
        {
            itemName: "Philadelphia Roll",
            description: "Extra avocado",
            quantity: 1,
            price: 12.0,
            imageSrc: "/californiaroll.jpg"
        },
        {
            itemName: "Tempura Udon",
            description: "",
            quantity: 1,
            price: 14.0,
            imageSrc: "/tempuraudon.jpg"
        }
    ]);

    const [quantity, setQuantity] = useState(1);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }

    const removeFromCart = (itemName) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.itemName !== itemName));
    }

  const increaseQuantity = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.itemName === itemName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.itemName === itemName && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
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
                    removeFromCart={removeFromCart} 
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