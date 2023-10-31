import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar } from 'react-bootstrap';

const circleButtonStyle = {
    backgroundColor: '#719579', // Replace with your desired color
    color: '#fff5ee',
    border: '2px solid #8D6E63',
    width: '75px',  // Adjust the width and height as needed for your design
    height: '75px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 110px',
  };

const brandStyle = {
    border: '2px solid #8D6E63', // Border around the text
    borderRadius: '10%', // Make the border round
    padding: '5px', // Padding to separate the border from text
};

function NavigationHeader() {
    return (
        <div className='navHeader'>
            <Navbar>
                <Button variant="primary" style={circleButtonStyle}>Back</Button>
                <Button variant="primary" style={circleButtonStyle}>Request Bill</Button>
                <Navbar.Brand>
                    <span style={brandStyle}>Sushi-Ya</span>
                </Navbar.Brand>
                <Button variant="primary" style={circleButtonStyle}>Back</Button>
                <Button variant="primary" style={circleButtonStyle}>View</Button>
            </Navbar>
        </div>
    );
}

export default NavigationHeader;
