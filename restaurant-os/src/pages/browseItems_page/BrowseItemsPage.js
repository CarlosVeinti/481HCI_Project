import React from 'react';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import CategoriesSideBar from '../../components/CategoriesSideBar/CategoriesSideBar';
import BackButton from '../../components/BackButton/BackButton';
import ItemCard from '../../components/ItemCard/ItemCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BrowseItemsPage.css'
import { Container } from 'react-bootstrap';
import itemData from './Data_Items_Structures';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { Link } from 'react-router-dom';

const customBackgroundStyle = {
    backgroundColor: '#fff5ee', // Replace with your desired background color
};

function BrowseItemsPage() {
    
    const location = useLocation(); // Use useLocation to get the current URL
    const category = location.pathname.split('/')[2]; // Extract the category from the URL

    const items = itemData[category];
    const itemsPerRow = 3;

    const chunkedItems = [];
    for (let i = 0; i < items.length; i += itemsPerRow) {
        chunkedItems.push(items.slice(i, i + itemsPerRow));
    }

    return (
        <>
        <div>
            <img src="/background.png" alt="Background Image" className='cover-image'></img>
        </div>

        <NavigationHeader/>
        <CategoriesSideBar currentCategory={category}/>     
        <div className="browseItemsClass">
                   
            
            <Container>
          
                
                <Col>
                    {chunkedItems.map((row, rowIndex) => (
                        <Row key={rowIndex} className="my_bip_row">
                            {row.map((item, colIndex) => (
                                <Col key={colIndex} className="my_bip_col">
                                
                                    <ItemCard
                                        itemName={item.itemName}
                                        briefDescri={item.briefDescri}
                                        imageSrc={item.imageSrc}
                                        price={item.price}
                                        longDescri={item.longDescri}
                                    />
                                
                                </Col>
                            ))}
                        </Row>
                    ))}
                </Col>
            


            </Container>
            
        </div>
        <div>
            
        </div>

        </>
    );
}

export default BrowseItemsPage;