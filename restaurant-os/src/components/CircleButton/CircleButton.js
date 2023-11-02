import React from 'react';
import './CircleButton.css'; // Create a separate CSS file for styling

function CircleButton(props) {
    return (
        <button className="circle-button">
            {props.children}
        </button>
    );
}

export default CircleButton;