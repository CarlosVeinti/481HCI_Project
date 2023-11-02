import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdAddCircleOutline } from 'react-icons/md';
import './ItemCard.css'

function ItemCard({title, description, imageSrc}) {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title style={{ 
                color: 'black', 
                fontFamily: "'Playpen Sans', sans-serif", 
                fontSize: '2rem' 
        }}>
           {title}
          </Card.Title>
          <Card.Text style={{ 
            color: "rgba(78, 78, 78)", 
            fontFamily: "'Playpen Sans', sans-serif", 
            fontSize: '1.0rem' 
        }}>
          {description}
        </Card.Text>
        <Button variant="primary" className='moreDetailsButton'>More Details</Button>
        <Button variant="primary">
          <MdAddCircleOutline className="addIcon"/>
        </Button>
      </Card.Body>

    </Card>
  )
}

export default ItemCard