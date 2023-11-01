import React, { useState } from 'react';
import './ServingButton.css';

function ServingCounter() {
    const [servings, setServings] = useState(1); 

    return (
        <div className="serving-counter">
            <button onClick={() => setServings(servings - 1)} disabled={servings <= 1}>-</button>
            <div className="serving-display">
                {servings} servings
            </div>
            <button onClick={() => setServings(servings + 1)}>+</button>
        </div>
    );
}

export default ServingCounter;