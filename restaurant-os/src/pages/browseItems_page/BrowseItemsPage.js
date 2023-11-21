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
            
            <Container>
            <Row>
            </Row>  
                <Col>
                    <CategoriesSideBar/>
                </Col>
                

            <Col>
            
                <Row className="my_bip_row">
                    <Col className="my_bip_col">
                        <ItemCard title='Gyoza' description="Vegetable Gyoza" imageSrc="/Appetizers/DumplingsGyoza.png" price={5.99}/>
                    </Col>
                    <Col className="my_bip_col">
                        <ItemCard title='Spring Rolls' description="Pork Sprink Rolls" imageSrc="/Appetizers/SpringRolls.jpg" price={5.99}/>
                    </Col>
                    <Col className="my_bip_col">
                        <ItemCard title='Edamame' description="Edamame serving" imageSrc="/Appetizers/Edamame.jpg" price={5.99}/>
                    </Col>
                </Row>
                <Row className="my_bip_row">
                    <Col className="my_bip_col">
                        <ItemCard title="Hiyayakko" description="Contains Silken tofu" imageSrc="/Appetizers/Hiyayakko.jpg" price={5.99}/>
                    </Col>
                    <Col className="my_bip_col">
                        <ItemCard title="Salad Rolls" description="Salad Rolls serving" imageSrc="/Appetizers/SaladRolls.webp" price={5.99}/>
                    </Col>
                    <Col className="my_bip_col">
                        <ItemCard title="Okonomiyaki" description="Japanese Pancake" imageSrc="/Appetizers/Okonomiyaki.jpg" price={5.99}/>
                    </Col>
                </Row>
            
            </Col>
            </Container>
            
        </div>
        <div>
            
        </div>

        </>
    );
}

export default BrowseItemsPage;