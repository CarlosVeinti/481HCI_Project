import React from 'react';
import './WelcomeSection.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function WelcomeSection() {
    const navigate = useNavigate();
    return (
        <div className="welcome-section">
            <h2>WELCOME</h2>
            <p>Browse our menu</p>
            <Button variant="danger" onClick={()=>{navigate("/categories")}} className="custom-button">Menu</Button>
        </div>
    );
}

export default WelcomeSection;
