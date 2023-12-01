import React from 'react';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import CategoriesSideBar from '../../components/CategoriesSideBar/CategoriesSideBar';
import BackButton from '../../components/BackButton/BackButton';
import ItemCard from '../../components/ItemCard/ItemCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BrowseItemsPage.css'
import { Container } from 'react-bootstrap';



const itemData = {
    appetizers: [
      // Define appetizers data here
      // ...
    ],
    sushi: [
      // Define sushi data here
      // ...
    ],
    sashimi: [
      // Define sashimi data here
      // ...
    ],
    ramen: [
      // Define ramen data here
      // ...
    ],
    desserts: [
      // Define desserts data here
      // ...
    ],
    beverages: [
      // Define beverages data here
      // ...
    ],
  };

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
                        <ItemCard 
                            itemName='Gyoza'
                            briefDescri="5 servings"
                            imageSrc="/Appetizers/DumplingsGyoza.png"
                            price={7.99}
                            longDescri= "Savory Vegetable Gyozas"
                        />
                    </Col>
                    <Col className="my_bip_col">
                        <ItemCard 
                            itemName='Spring Rolls'
                            briefDescri="Pork - (3 pieces)"
                            imageSrc="/Appetizers/SpringRolls.jpg"
                            price={6.99}
                            longDescri= "Savory Pork Spring Rolls"
                        />
                    </Col>
                    <Col className="my_bip_col">
                        <ItemCard 
                            itemName='Edamame' 
                            briefDescri="200 grams"
                            imageSrc="/Appetizers/Edamame.jpg"
                            price={3.99}
                            longDescri= "Fresh Edamame served with Sea salt"
                        />
                    </Col>
                </Row>
                <Row className="my_bip_row">
                    <Col className="my_bip_col">
                        <ItemCard
                         itemName="Hiyayakko"
                         briefDescri="Contains Silken tofu"
                         imageSrc="/Appetizers/Hiyayakko.jpg"
                         price={5.99}
                         longDescri="Hiyayakko is a delightful and refreshing Japanese dish that effortlessly combines simplicity with incredible flavors. This cold tofu salad is not just a meal; it's a culinary experience that will tantalize your taste buds and leave you craving for more."
                        />
                    </Col>
                    <Col className="my_bip_col">
                        <ItemCard 
                            itemName="Salad Rolls"
                            briefDescri="Salad Rolls serving"
                            imageSrc="/Appetizers/SaladRolls.webp"
                            price={8.99}
                            longDescri="Delicate rice paper wrappers enveloping succulent shrimp, complemented by tender rice vermicelli and a garden of aromatic herbs like mint, cilantro, and Thai basil. "
                        />
                    </Col>
                    <Col className="my_bip_col">
                        <ItemCard 
                            itemName="Okonomiyaki"
                            briefDescri="Japanese Pancake"
                            imageSrc="/Appetizers/Okonomiyaki.jpg"
                            price={10.99}
                            longDescri="A batter made with flour, grated yam, and shredded cabbage. Tender slices of pork belly, fresh green onions, and a generous sprinkle of tenkasu (tempura crumbs).
                                        The pièce de résistance? Our signature okonomiyaki sauce — 
                                        a sweet and savory drizzle."
                        />
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