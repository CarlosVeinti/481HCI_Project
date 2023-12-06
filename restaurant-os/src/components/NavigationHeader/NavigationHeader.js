import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import './NavigationHeader.css'; // Import your custom styles
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaArrowLeft, FaReceipt } from 'react-icons/fa';
import { LuConciergeBell } from "react-icons/lu";
import MyDictionaryComponent from '../ItemCard/MyDictionaryComponent';
import useMyDictionary from '../ItemCard/MyDictionaryHook';

function NavigationHeader({allItems, updateServings, calculateTotalItems}) {


  const [showCallWaiterModal, setShowCallWaiterModal] = useState(false);
  const [showRequestBillModal, setShowRequestBillModal] = useState(false);
  const [showHowManyBillsModal, setShowHowManyBillsModal] = useState(false);
  const [numberOfBills, setNumberOfBills] = useState(1);
  const [splitBillRequested, setSplitBillRequested] = useState(false);

  const handleCallWaiterClick = () => setShowCallWaiterModal(true);
  const handleRequestBillClick = () => setShowRequestBillModal(true);
  const handleHowManyBillsClick = () => {
    setShowHowManyBillsModal(true);
    setSplitBillRequested(true);
  };

  const handleDecreaseBills = () => setNumberOfBills((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  const handleIncreaseBills = () => setNumberOfBills((prevCount) => prevCount + 1);

  const handleCloseModals = () => {
    setShowCallWaiterModal(false);
    setShowRequestBillModal(false);
    setShowHowManyBillsModal(false);
    setNumberOfBills(1);
    setSplitBillRequested(false);
  };

  const handleOkButtonClick = () => {
    // Add any additional logic you want to execute before closing the modal
    handleCloseModals(); // Close the modal
  };

  const handleNumberOfBillsChange = (event) => {
    const enteredValue = event.target.value;
    if (/^[1-9]\d*$/.test(enteredValue) || enteredValue === '') {
      setNumberOfBills(Number(enteredValue));
    }
  };

  const navigate = useNavigate();

 


  return (
    <>
      <Navbar className="customNavbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="navbarButtonsContainer">
            <Button variant="danger" className="navbarButtons" onClick={() => navigate(-1)}>
              <FaArrowLeft size={30} /> Back
            </Button>
            <Button variant="primary" className="navbarButtons" onClick={handleRequestBillClick}>
              <FaReceipt size={30} /> Request Bill
            </Button>
            <Navbar.Brand className="customNavbarBrand">
              <Image src= {process.env.PUBLIC_URL + "/logo.png"} alt="Logo" width="64" height="64" className="customImage" />
              <span className="customMargin"></span>
            </Navbar.Brand>
            <Button variant="primary" className="navbarButtons" onClick={handleCallWaiterClick}>
            <LuConciergeBell size={30}/> Call Waiter
            </Button>
            <Button variant="primary" className="navbarButtons" onClick={() => navigate("/cart")}>
            <FaShoppingCart size={30} /> Cart (
              {allItems ? Object.values(allItems).reduce((acc, curr) => acc + curr, 0) : 0}
              )
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>

      {/* Modal for Call Waiter */}
      <Modal show={showCallWaiterModal} onHide={handleCloseModals}>
        <Modal.Header closeButton>
          <Modal.Title>Call Waiter</Modal.Title>
      
        </Modal.Header>
        <Modal.Body>
          <p style={{ color: 'black' }}>A waiter will be with you shortly.</p>
          <div className="d-flex justify-content-center mt-3">
            <Button variant="success" onClick={handleOkButtonClick}>
              Ok
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Modal for Request Bill */}
      <Modal show={showRequestBillModal} onHide={handleCloseModals}>
        <Modal.Header closeButton>
          <Modal.Title>Request Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p style={{ color: 'black' }}>Would you want to split the bill?</p>
          <div className="d-flex justify-content-center mb-3">
            <Button variant="success" onClick={handleHowManyBillsClick}>
              Yes
            </Button>
            <div className="mx-2"></div>
            <Button variant="danger" onClick={handleCallWaiterClick}>
              No
            </Button>
          </div>
          {splitBillRequested && (
            <div>
              {/* Render the content of the "How Many Bills" modal here */}
              <p style={{ color: 'black' }}>Total bill should be split into these many bills:</p>
              <div className="d-flex justify-content-center">
                <Button variant="primary" onClick={handleDecreaseBills} style={{ fontSize: '20px', minWidth: '80px' }}>
                  -
                </Button>
                <input
                  className="form-control mx-2 center-value"
                  value={numberOfBills}
                  onChange={handleNumberOfBillsChange}
                />
                <Button variant="primary" onClick={handleIncreaseBills} style={{ fontSize: '20px', minWidth: '80px' }}>
                  +
                </Button>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <Button variant="primary" onClick={handleCallWaiterClick}>
                  Submit
                </Button>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavigationHeader;