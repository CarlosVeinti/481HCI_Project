import React from 'react';
import Button from 'react-bootstrap/Button';
import './CategoriesButtons.css';
import { Container, Row, Col } from 'react-bootstrap';

function CategoriesButtons() {
    return (
        <div className='categories_div'>
        <Container>
            <Row className='rowIncategories'>
                <Col>
                    <Button variant="info" className='categoryButtons'>Sushi</Button>
                </Col>
                <Col>
                    <Button variant="info" className='categoryButtons'>Sashimi</Button>
                </Col>
        
            </Row>

            <Row className='rowIncategories'>
                <Col>
                    <Button variant="info" className='categoryButtons'>Soups</Button>  
                </Col>

                <Col>
                    <Button variant="info" className='categoryButtons'>Salads</Button>
                </Col>
            </Row>

            <Row className='rowIncategories'>
                <Col>
                    <Button variant="info" className='categoryButtons'>Drinks</Button>  
                </Col>

                <Col>
                    <Button variant="info" className='categoryButtons'>Appetizers</Button>
                </Col>
            </Row>

            <Row className='rowIncategories'>
                <Col>
                    <Button variant="info" className='categoryButtons'>Tempura</Button>  
                </Col>

                <Col>
                    <Button variant="info" className='categoryButtons'>Udon</Button>
                </Col>
            </Row>


        </Container>  
        </div>
    );
}

export default CategoriesButtons;
