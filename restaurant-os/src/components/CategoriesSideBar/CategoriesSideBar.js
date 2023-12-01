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

function CategoriesSideBar({ currentCategory }) {

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
                <Button 
                    variant="primary" 
                    className={`catSide_Btn ${currentCategory === 'appetizers' ? 'active' : ''}`} 
                    onClick={() => handleCategoryClick('appetizers')}>
                    Appetizers
                </Button>
            </Row>

            <Row className="catSideRows">
                <Button 
                    variant="primary" 
                    className={`catSide_Btn ${currentCategory === 'sushi' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('sushi')}>
                    Sushi
                </Button>
            </Row>

            <Row className="catSideRows" >
                <Button 
                    variant="primary" 
                    className={`catSide_Btn ${currentCategory === 'sashimi' ? 'active' : ''}`} 
                    onClick={() => handleCategoryClick('sashimi')}>
                    Sashimi
                </Button>
            </Row>

            <Row className="catSideRows">
                <Button 
                    variant="primary" 
                    className={`catSide_Btn ${currentCategory === 'ramen' ? 'active' : ''}`} 
                    onClick={() => handleCategoryClick('ramen')}>
                    Ramen
                </Button>
            </Row>

            <Row className="catSideRows">
                <Button 
                variant="primary" 
                className={`catSide_Btn ${currentCategory === 'desserts' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('desserts')}>
                    Desserts
                </Button>
            </Row>

            <Row className="catSideRows">
                <Button 
                variant="primary" 
                className={`catSide_Btn ${currentCategory === 'beverages' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('beverages')}>
                    Beverages
                </Button>
            </Row>

            <Row className="catSideRows">
                <Button 
                variant="primary" 
                className={`catSide_Btn ${currentCategory === 'tempura' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('tempura')}>
                    Tempura
                </Button>
            </Row>



           
            


            </Container>
      </>
    );
  }

export default CategoriesSideBar;
