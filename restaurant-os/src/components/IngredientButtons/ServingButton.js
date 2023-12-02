import React, { useState } from 'react';
import './ServingButton.css';

function ServingCounter({ onServingChange }) {
  const [servings, setServings] = useState(1); 

  const updateServings = (newServings) => {
    setServings(newServings);
    onServingChange(newServings);
  };

  return (
    <div className="serving-counter">
      <button onClick={() => updateServings(servings - 1)} disabled={servings <= 1}>-</button>
      <div className="serving-display">
        {servings} servings
      </div>
      <button onClick={() => updateServings(servings + 1)}>+</button>
    </div>
  );
}

export default ServingCounter;
