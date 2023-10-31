import React from 'react';
import './LanguageButton.css';
import Button from 'react-bootstrap/Button';

function LanguageButton() {
    return (
        <div className='lang-button'>
        <Button variant="warning" className='custom-button'>Language</Button>
        </div>
    );
}

export default LanguageButton;
