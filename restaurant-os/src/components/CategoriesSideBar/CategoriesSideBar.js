import React from 'react';
import './CategoriesSideBar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const customBackgroundStyle = {
    backgroundColor: '#fff5ee', // Replace with your desired background color
};

function CategoriesSideBar() {

    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        // Use the category to construct the URL for the corresponding BrowseItemsPage
        const categoryPath = `/browse-items/${category.toLowerCase()}`;
        navigate(categoryPath);
    };
    return (
      <>        
          <Container className='sidebarCategs'>
            <Row className="catSideRows">
                <Button variant="primary" className='catSide_Btn' onClick={() => handleCategoryClick('appetizers')}>
                    Appetizers
                </Button>
            </Row>

            <Row className="catSideRows">
                <Button variant="primary" className='catSide_Btn' onClick={() => handleCategoryClick('sushi')}>
                    Sushi
                </Button>
            </Row>

            <Row className="catSideRows" >
                <Button variant="primary" className='catSide_Btn' onClick={() => handleCategoryClick('sashimi')}>
                    Sashimi
                </Button>
            </Row>

            <Row className="catSideRows">
                <Button variant="primary" className='catSide_Btn' onClick={() => handleCategoryClick('ramen')}>
                    Ramen
                </Button>
            </Row>

            <Row className="catSideRows">
                <Button variant="primary" className='catSide_Btn' onClick={() => handleCategoryClick('desserts')}>
                    Desserts
                </Button>
            </Row>

            <Row className="catSideRows">
                <Button variant="primary" className='catSide_Btn' onClick={() => handleCategoryClick('beverages')}>
                    Beverages
                </Button>
            </Row>

           
            


            </Container>
      </>
    );
  }

export default CategoriesSideBar;
