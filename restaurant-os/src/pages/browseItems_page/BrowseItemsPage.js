import React from 'react';

import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import CategoriesButtons from '../../components/CategoriesButtons/CategoriesButtons';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import CategoriesSideBar from '../../components/CategoriesSideBar/CategoriesSideBar';
import ItemCard from '../../components/ItemCard/ItemCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BrowseItemsPage.css'
import { Container } from 'react-bootstrap';

const customBackgroundStyle = {
    backgroundColor: '#fff5ee', // Replace with your desired background color
};

function BrowseItemsPage() {
    return (
        <>
        <div className="browseItemsClass" style={customBackgroundStyle}>
            <NavigationHeader/>
            <h2> Appetizers Category </h2>
            
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
                        <ItemCard title="Okonomiyaki" description="savory dish" imageSrc="/Appetizers/Okonomiyaki.jpg"  />
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