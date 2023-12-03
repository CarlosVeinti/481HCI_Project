import { MyContext } from "./context";
import React, { createContext, useState } from "react";

export const MyProvider = ({ children }) => {
    const [myArray, setMyArray] = useState([]);
    const [cartItems, setCartItems] = useState([]); 

    // Function to update the array
    const updateMyArray = (newItem) => {
        setMyArray([...myArray, newItem]);
    };

    const addToCart = (item) => {
        setCartItems(currentItems => [...currentItems, item]);
    };

    const updateCart = (updatedItem) => {
        console.log("updatedItem.servings", updatedItem[0].servings);
     
        if(updatedItem[0].servings == 0){
            removeFromCart(updatedItem[0].itemName);
            return;
        }

        const updatedCartItem = updatedItem.filter(cartItems => cartItems.itemName === updatedItem.itemName);
        // console.log("Updated cart item:", updatedCartItem);

        setCartItems(...updatedCartItem,updatedItem)
        // setCartItems(cartItems => cartItems.map(item => 
        //     item.itemName === updatedItem.itemName ? updatedItem : item
        // ));
    
        // console.log("Cart items after update:", cartItems);
    };
    
    const removeFromCart = (itemName) => {
        setCartItems(cartItems.filter((item) => item.itemName !== itemName));
    };

    return (
        <MyContext.Provider value={{ myArray, updateMyArray, cartItems, addToCart, updateCart,removeFromCart }}>
            {children}
        </MyContext.Provider>
    );
};
