import React from 'react';

import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import CategoriesSideBar from '../../components/CategoriesSideBar/CategoriesSideBar';
import BackButton from '../../components/BackButton/BackButton';
import ItemCard from '../../components/ItemCard/ItemCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BrowseItemsPage.css'
import { Container } from 'react-bootstrap';

const customBackgroundStyle = {
    backgroundColor: '#fff5ee', // Replace with your desired background color
};

// Eventually this Browse Items Page will have to be modular enough so that we can adapt to each category that we have.

function BrowseItemsPage() {
    return (
        <>
        <div>
            <img src="/background.png" alt="Background Image" className='cover-image'></img>
        </div>

        <div className="browseItemsClass">
            <NavigationHeader/>            
            <Row>
                <Col>
                    <CategoriesSideBar/>
                </Col>
            </Row>

            <Col>
            <Container>
                <Row className="my-row">
                    <Col className="my-col">
                        <ItemCard title='Gyoza' description="Vegetable Gyoza" imageSrc="/Appetizers/DumplingsGyoza.png"/>
                    </Col>
                    <Col className="my-col">
                        <ItemCard title='Spring Rolls' description="Pork Sprink Rolls" imageSrc="/Appetizers/SpringRolls.jpg"/>
                    </Col>
                    <Col className="my-col">
                        <ItemCard title='Edamame' description="Edamame serving" imageSrc="/Appetizers/Edamame.jpg"/>
                    </Col>
                </Row>
                <Row className="my-row">
                    <Col className="my-col">
                        <ItemCard title="Hiyayakko" description="Contains Silken tofu" imageSrc="/Appetizers/Hiyayakko.jpg"/>
                    </Col>
                    <Col className="my-col">
                        <ItemCard title="Salad Rolls" description="Salad Rolls serving" imageSrc="/Appetizers/SaladRolls.webp"/>
                    </Col>
                    <Col className="my-col">
                        <ItemCard title="Okonomiyaki" description="Savory Japanese Pancake" imageSrc="/Appetizers/Okonomiyaki.jpg"  />
                    </Col>
                </Row>
            </Container>
            </Col>
            
        </div>
        <div>
            
        </div>

        </>
    );
}

export default BrowseItemsPage;