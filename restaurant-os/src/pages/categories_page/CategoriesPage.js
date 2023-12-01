import React from 'react';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import BackButton from '../../components/BackButton/BackButton';
import './CategoriesPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const customBackgroundStyle = {
    backgroundColor: '#fff5ee', // Replace with your desired background color
};


const categories = [
  {
    title: 'Appetizers',
    description: 'Start off right.',
    imageSrc: '/appetizers.jpeg',
    linkTo: '/browse-items/appetizers',
  },
  {
    title: 'Sushi',
    description: 'Freshly rolled delicacies.',
    imageSrc: '/sushi.png',
    linkTo: '/browse-items/sushi',
  },
  {
    title: 'Sashimi',
    description: 'Sliced raw fish.',
    imageSrc: '/sashimi.jpeg',
    linkTo: '/browse-items/sashimi',
  },
  {
    title: 'Ramen',
    description: 'Slurp-worthy goodness.',
    imageSrc: '/noodles.jpeg',
    linkTo: '/browse-items/ramen',
  },
  {
    title: 'Desserts',
    description: 'Sweet indulgences.',
    imageSrc: '/desert.png',
    linkTo: '/browse-items/desserts',
  },
  {
    title: 'Beverages',
    description: 'Quench your thirst.',
    imageSrc: '/drinks.jpeg',
    linkTo: '/browse-items/beverages',
  },
];


function CategoriesPage() {
  const navigate = useNavigate(); // Use useNavigate from react-router-dom



  return (
    <>
      <div>
        <img src="/background.png" alt="Background Image" className='cover-image'></img>
      </div>
      <div className="nav_Header">
        <NavigationHeader />
        <Container>
          <Row className="my-row">
            {categories.map((category, index) => (
              <Col key={index} className="my-col">
                <CategoryCard
                  title={category.title}
                  description={category.description}
                  imageSrc={category.imageSrc}
                  linkTo={category.linkTo}
                />
              </Col>
            ))}
            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CategoriesPage;