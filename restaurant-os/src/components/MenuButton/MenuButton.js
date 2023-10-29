import React from 'react';
import './MenuButton.css';
import Button from 'react-bootstrap/Button';

function MenuButton() {
    return (
        <div className='menu-button'>
        <Button variant="danger">Menu</Button>
        </div>
    );
}

export default MenuButton;
