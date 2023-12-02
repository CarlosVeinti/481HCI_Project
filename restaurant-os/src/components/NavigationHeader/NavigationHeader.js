import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import './NavigationHeader.css'; // Import your custom styles
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaArrowLeft, FaReceipt } from 'react-icons/fa';

function NavigationHeader() {
  const [showCallWaiterModal, setShowCallWaiterModal] = useState(false);
  const [showRequestBillModal, setShowRequestBillModal] = useState(false);

  const handleCallWaiterClick = () => setShowCallWaiterModal(true);
  const handleRequestBillClick = () => setShowRequestBillModal(true);

  const handleCloseModals = () => {
    setShowCallWaiterModal(false);
    setShowRequestBillModal(false);
    // Reset splitBill state when closing modals
  };

  const navigate = useNavigate();

  return (
    <>
      <Navbar className="customNavbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="navbarButtonsContainer">
            <Button variant="primary" className="navbarButtons" onClick={() => navigate(-1)}>
              <FaArrowLeft size={30} /> Back
            </Button>
            <Button variant="primary" className="navbarButtons" onClick={handleRequestBillClick}>
              <FaReceipt size={30} /> Request Bill
            </Button>
            <Navbar.Brand className="customNavbarBrand">
              <Image src="/logo.png" alt="Logo" width="64" height="64" className="customImage" />
              <span className="customMargin"></span>
            </Navbar.Brand>
            <Button variant="primary" className="navbarButtons" onClick={handleCallWaiterClick}>
              Call Waiter
            </Button>
            <Button variant="primary" className="navbarButtons" onClick={() => navigate("/cart")}>
              <FaShoppingCart size={30} /> Cart
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
            <Button variant="success" onClick={handleCallWaiterClick}>
              Yes
            </Button>
            <div className="mx-2"></div>
            <Button variant="danger" onClick={handleCallWaiterClick}>
              No
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavigationHeader;
