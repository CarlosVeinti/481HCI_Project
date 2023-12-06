import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { MdAddCircleOutline } from 'react-icons/md';
import './ItemCard.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../store/cartActions';
import MyDictionaryComponent from './MyDictionaryComponent';
import { BsPlus, BsDash } from 'react-icons/bs';

function ItemCard({ itemName, briefDescri, imageSrc, price, longDescri, allItems, updateServings }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  
  const quantity = allItems[itemName] || 0;

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleButtonClick = () => {
    handleShowModal();
    increaseQuantity();
  };

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    updateServings(itemName, newQuantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      if (newQuantity === 0) {
        handleCloseModal();
      }
      updateServings(itemName, newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Dispatch the addItemToCart action with the item details and quantity
    dispatch(addItemToCart({
      itemName,
      price,
      quantity,
    }));
    handleCloseModal();
  };

  return (
    <Card className='foodItemCard'>
      {showModal ? (
        <div className="d-flex justify-content-center align-items-center quantity-control">
          <Button variant="secondary" onClick={decreaseQuantity} className="quantity-subtract-button">
            <BsDash size={20}/>
          </Button>
          <span className="quantity-display">{quantity}</span>
          <Button variant="secondary" onClick={increaseQuantity} className="quantity-add-button">
            <BsPlus size={20}/>
          </Button>
        </div>
      ) : (
        <Button variant="primary" className="addIcon" onClick={handleButtonClick}>
          <MdAddCircleOutline />
        </Button>
      )}
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Row>
          <Col md={8}>
            <Card.Title style={{ color: 'black', fontFamily: "'Playpen Sans', sans-serif", fontSize: '1rem' }}>
              {itemName}
            </Card.Title>
            <Card.Text style={{ color: "rgba(78, 78, 78)", fontFamily: "'Playpen Sans', sans-serif", fontSize: '1.0rem' }}>
              {briefDescri}
            </Card.Text>
            <Link
              to={`/edit-single-item/${encodeURIComponent(itemName)}`}
              state={{ itemName, imageSrc, price, longDescri }}
              className="moreDetailsLink"
            >
              <Button variant="primary" className="moreDetailsButton">
                More Details
              </Button>
            </Link>
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
