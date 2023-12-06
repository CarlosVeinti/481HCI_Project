import React, { useState, useEffect } from 'react';

function MyDictionaryComponent() {

  const initialItems = {
    Gyoza: 0,
    'Spring Rolls': 0,
    Edamame: 0,
  };

  // State to store the items and their servings
  const [allItems, setAllItems] = useState(initialItems);

  // Function to update servings for a specific item
  const updateServings = (itemName, numberOfServings) => {
    setAllItems((prevItems) => {
      const updatedItems = {
        ...prevItems,
        [itemName]: numberOfServings,
      };
  
      console.log(`Updated servings for ${itemName}:`, updatedItems[itemName]);
  
      return updatedItems;
    });
  };

  // Function to calculate the total sum of servings
  const calculateTotalItems = () => {
    return Object.values(allItems).reduce((acc, curr) => acc + curr, 0);
  };


  // Export the state, update function, and calculate function for use in ItemCard.js
  return { allItems, updateServings, calculateTotalItems };
}

export default MyDictionaryComponent;
