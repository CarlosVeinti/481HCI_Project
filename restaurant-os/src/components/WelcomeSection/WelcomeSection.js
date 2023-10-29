import React from 'react';
import './WelcomeSection.css';
import MenuButton from '../../components/MenuButton/MenuButton';

function WelcomeSection() {
    return (
        <div className="welcome-section">
            <h2>WELCOME</h2>
            <p>Browse our menu</p>
            <MenuButton />
        </div>
    );
}

export default WelcomeSection;
