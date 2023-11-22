import React from 'react';
import Button from 'react-bootstrap/Button';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import CategoriesButtons from '../../components/CategoriesButtons/CategoriesButtons';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import './WaiterPage.css';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch'; // Adjust the import path based on your project structure
import { useState } from 'react';


const customBackgroundStyle = {
    backgroundColor: '#fff5ee', 
};
const customBackgroundStyle2 = {
    backgroundColor: '#FFFFFF', 
};

function TopLeftButton() {
    const buttonStyle = {
        position: 'absolute',
        top: '10px',
        left: '10px',
    };

    return (
        <div style={buttonStyle}>
            <Button variant="primary">Tables</Button>
        </div>
    );
}

function TopRightButton() {
    const buttonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
    };

    return (
        <div style={buttonStyle}>
            <Button variant="primary">Order History</Button>
            
        </div>
    );
}

function WaiterPage() {


    const [isOccupied, setIsOccupied] = useState(false);
  
    const handleToggle = (isChecked) => {
      setIsOccupied(isChecked);
    };


    const customBackgroundStyle = {
        backgroundColor: '#fff5ee',
    };

    const customBackgroundStyle2 = {
        backgroundColor: '#FFFFFF',
    };

    const orders = [
        { id: 1, item: 'Spicy Tuna', quantity: 2, date: '2023-10-31 10pm' },
        { id: 2, item: 'Salmon Sushi', quantity: 1, date: '2023-10-30' },
        { id: 3, item: 'California Rolls', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Rainbow Rolls', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Okonomiyaki', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Miso Soup', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Mango Rolls', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Chicken Skewers', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Tempura Vegetables', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Fried Rice', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Spring Rolls', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Vegetable Rolls', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Beef Skewers', quantity: 3, date: '2023-10-29' },
   


    ];
    const handleItemClick = (item) => {
        // Handle the click on the item here
        console.log(`Item clicked: ${item}`);
    };

    return (
        <div className="parent" >

        <h1 style={{ margin: 0, fontSize: '32px', textAlign: 'center', fontWeight: 'bold' }}>Active Orders</h1>
        <h2 className="tableNumber" style={{ margin: 0, fontSize: '32px', textAlign: 'center', color: 'black' }}> Table 1 Active Orders</h2>
        
    

        <TopLeftButton />
        <TopRightButton />
 
        <div className="order-container" >
                <table className="order-preview" style={{ ...customBackgroundStyle2, width: '100%' }}>
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }}>Number</th>
                            <th style={{ width: '1000px' }}>Item</th>
                            <th style={{ width: '10%' }}>Quantity</th>
                            <th style={{ width: '30%' }}>Date</th>
                            <th style={{ width: '5%' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleItemClick(order.item);
                                        }}
                                    >
                                        {order.item}
                                    </a>
                                </td>
                                <td>{order.quantity}</td>
                                <td>{order.date}</td>
                                <td>
                                    <button className="cancel-button">Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>    
    );
}
export default WaiterPage;