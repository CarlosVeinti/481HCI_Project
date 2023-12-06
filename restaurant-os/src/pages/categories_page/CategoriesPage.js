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
    imageSrc: process.env.PUBLIC_URL + '/appetizers.jpeg',
    linkTo: '/browse-items/appetizers',
  },
  {
    title: 'Sushi',
    description: 'Freshly rolled delicacies.',
    imageSrc: process.env.PUBLIC_URL + '/sushi.png',
    linkTo: '/browse-items/sushi',
  },
  {
    title: 'Sashimi',
    description: 'Sliced raw fish.',
    imageSrc: process.env.PUBLIC_URL + '/sashimi.jpeg',
    linkTo: '/browse-items/sashimi',
  },
  {
    title: 'Ramen',
    description: 'Slurp-worthy goodness.',
    imageSrc: process.env.PUBLIC_URL + '/CreamySpicyMisoRamen.webp',
    linkTo: '/browse-items/ramen',
  },
  {
    title: 'Desserts',
    description: 'Sweet indulgences.',
    imageSrc: process.env.PUBLIC_URL + '/desert.png',
    linkTo: '/browse-items/desserts',
  },
  {
    title: 'Beverages',
    description: 'Quench your thirst.',
    imageSrc: process.env.PUBLIC_URL + '/drinks.jpeg',
    linkTo: '/browse-items/beverages',
  },
  {
    title: 'Tempura',
    description: 'Coated in a thin batter and deep fried',
    imageSrc: process.env.PUBLIC_URL + '/tempuraCategory.jpeg',
    linkTo: '/browse-items/tempura'
  }
];


function CategoriesPage() {
  const navigate = useNavigate(); // Use useNavigate from react-router-dom



  return (
    <>
      <div>
        <img src={process.env.PUBLIC_URL +"/background.png"} alt="Background Image" className='cover-image'></img>
      </div>
      <div className="nav_Header">
        <NavigationHeader />
        <Container>
          <Row className="my-row">
            {categories.slice(0,3).map((category, index) => (
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
          <Row className="my-row">
            {categories.slice(3,6).map((category, index) => (
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
          <Row className="my-row">
            {categories.slice(6,7).map((category, index) => (
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