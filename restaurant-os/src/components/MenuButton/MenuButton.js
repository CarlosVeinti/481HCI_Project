import React from 'react';
import './MenuButton.css';
import Button from 'react-bootstrap/Button';

function MenuButton() {
    return (
        <div className='menu-button'>
            <Button variant="danger" className="custom-button">Menu</Button>
        </div>
    );
}

export default MenuButton;
