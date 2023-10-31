import React from 'react';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import CategoriesButtons from '../../components/CategoriesButtons/CategoriesButtons';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import './CategoriesPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const customBackgroundStyle = {
    backgroundColor: '#fff5ee', // Replace with your desired background color
};

function CategoriesPage() {
    return (
      <>
        <div>
        <img src="/background.png" alt="Background Image" className='cover-image'></img>
        </div>
        <div className="nav_Header" style={customBackgroundStyle}>
          <NavigationHeader />
          <Container>
            <Row className="my-row">
                <Col className="my-col"><CategoryCard title="Appetizers" description="Start off right." imageSrc="/appetizers.jpeg"/></Col>
                <Col className="my-col"><CategoryCard title="Sushi" description="Freshly rolled delicacies." imageSrc="/sushi.png" /></Col>
                <Col className="my-col"><CategoryCard title="Sashimi" description="Sliced raw fish." imageSrc="/sashimi.jpeg" /></Col>
            </Row>
            <Row className="my-row">
                <Col className="my-col"><CategoryCard title="Noodles" description="Slurp-worthy goodness." imageSrc="/noodles.jpeg"/></Col>
                <Col className="my-col"><CategoryCard title="Desserts" description="Sweet indulgences." imageSrc="/desert.png"/></Col>
                <Col className="my-col"><CategoryCard title="Beverages" description="Quench your thirst." imageSrc="/drinks.jpeg"/></Col>
            </Row>
            </Container>
        </div>
      </>
    );
  }

export default CategoriesPage;
