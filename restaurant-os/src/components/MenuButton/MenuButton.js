import React from 'react';
import './MenuButton.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function MenuButton() {
    const navigate = useNavigate();

    return (
        <div className='menu-button'>
            <Button variant="danger" onClick={()=>{navigate("/categories")}} className="custom-button">Menu</Button>
        </div>
    );
}

export default MenuButton;
