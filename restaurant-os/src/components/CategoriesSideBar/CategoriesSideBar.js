import React from 'react';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import CategoriesButtons from '../../components/CategoriesButtons/CategoriesButtons';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import './CategoriesSideBar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const customBackgroundStyle = {
    backgroundColor: '#fff5ee', // Replace with your desired background color
};

function CategoriesSideBar() {
    return (
      <>        
          <Container className='sidebarCategs'>
            <Row className="catSideRows">
                <Button variant="primary" className='catSide_Btn'>Appetizers</Button>
            </Row>

            <Row className="catSideRows">
                <Button variant="primary" className='catSide_Btn'>Sushi</Button>
            </Row>

            <Row className="catSideRows" >
                <Button variant="primary" className='catSide_Btn'>Sashimi</Button>
            </Row>

            <Row className="catSideRows">
                <Button variant="primary" className='catSide_Btn'>Noodles</Button>
            </Row>

            <Row className="catSideRows">
                <Button variant="primary" className='catSide_Btn'>Desserts</Button>
            </Row>

            <Row className="catSideRows">
                <Button variant="primary" className='catSide_Btn'>Beverages</Button>
            </Row>

            <Row className="catSideRows">
                <Button variant="primary" className='catSide_Btn'>Famous Dishes</Button>
            </Row>
            


            </Container>
      </>
    );
  }

export default CategoriesSideBar;
