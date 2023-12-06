// MyDictionaryHook.js
import { useState, useEffect } from 'react';

function useMyDictionary() {
  const initialItems = {
    Gyoza: 0,
    'Spring Rolls': 0,
    Edamame: 0,
  };

  const [allItems, setAllItems] = useState(initialItems);

  const updateServings = (itemName, numberOfServings) => {
    setAllItems((prevItems) => ({
      ...prevItems,
      [itemName]: numberOfServings,
    }));
  };

  const calculateTotalItems = () => {
    return Object.values(allItems).reduce((acc, curr) => acc + curr, 0);
  };

  useEffect(() => {
    console.log('Updated allItems:', allItems);
  }, [allItems]);

  return { allItems, updateServings, calculateTotalItems };
}

export default useMyDictionary;