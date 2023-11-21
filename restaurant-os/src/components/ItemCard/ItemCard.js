import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { MdAddCircleOutline } from 'react-icons/md';
import './ItemCard.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ItemCard({ title, description, imageSrc, price }) {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card className='foodItemCard'>
      {showModal ? (
        <div className="d-flex justify-content-center align-items-center quantity-control">
        <Button variant="secondary" onClick={decreaseQuantity} className="quantity-subtract-button">
          -
        </Button>
        <span className="quantity-display">{quantity}</span>
        <Button variant="secondary" onClick={increaseQuantity} className="quantity-add-button">
          +
        </Button>
      </div>
      ) : (
        <Button variant="primary" className="addIcon" onClick={handleShowModal}>
          <MdAddCircleOutline />
        </Button>
      )}
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Row>
          <Col md={8}>
            <Card.Title style={{ color: 'black', fontFamily: "'Playpen Sans', sans-serif", fontSize: '1rem' }}>
              {title}
            </Card.Title>
            <Card.Text style={{ color: "rgba(78, 78, 78)", fontFamily: "'Playpen Sans', sans-serif", fontSize: '1.0rem' }}>
              {description}
            </Card.Text>
            <Button variant="primary" className="moreDetailsButton">
              More Details
            </Button>
          </Col>
          
          <Col md={4} className="price-col">
            <Card.Text style={{ color: 'green', fontFamily: "'Playpen Sans', sans-serif", fontSize: '1.2rem', fontWeight: 'bold' }}>
              {price ? `$${price.toFixed(2)}` : 'Price: N/A'}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;