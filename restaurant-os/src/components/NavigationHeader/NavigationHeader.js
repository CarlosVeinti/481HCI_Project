import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import './NavigationHeader.css'; // Import your custom styles
import { useNavigate } from 'react-router-dom';


function NavigationHeader() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar className="customNavbar">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <div className="navbarButtonsContainer">
            {/* Your navigation links go here */}
            <Button variant="primary" className="navbarButtons" onClick={() => navigate(-1)}>Back</Button>
            <Button variant="primary" className="navbarButtons">Request Bill</Button>

            <Navbar.Brand className="customNavbarBrand">
              <Image
                src='/logo.png'
                alt="Logo"
                width="64"
                height="64"
                className="customImage"
              />
              <span className="customMargin"></span>
            </Navbar.Brand>

            {/* Your navigation links go here */}
            <Button variant="primary" className="navbarButtons">Call Waiter</Button>
            <Button variant="primary" className="navbarButtons">View Cart</Button>
          </div>
        </Navbar.Collapse>

      </Navbar>
    </>
  );
}

export default NavigationHeader;