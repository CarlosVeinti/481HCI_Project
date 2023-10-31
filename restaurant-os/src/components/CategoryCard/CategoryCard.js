import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CategoryCard.css';

function CategoryCard({ title, description, imageSrc }) {
  return (
    <Card style={{ width: '18rem' }}>
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
            fontSize: '1.3rem' 
        }}>
          {description}
        </Card.Text>
        <Button variant="primary">Browse options</Button>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;