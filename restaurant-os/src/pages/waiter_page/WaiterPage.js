import React from 'react';
import Button from 'react-bootstrap/Button';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import CategoriesButtons from '../../components/CategoriesButtons/CategoriesButtons';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import './WaiterPage.css';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch'; // Adjust the import path based on your project structure
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const customBackgroundStyle = {
    backgroundColor: '#fff5ee', 
};
const customBackgroundStyle2 = {
    backgroundColor: '#FFFFFF', 
};

function TopLeftButton() {
    const navigate = useNavigate();
    const buttonStyle = {
        position: 'absolute',
        top: '10px',
        left: '10px',
    };

    return (
        <div style={buttonStyle}>
            <Button variant="primary" onClick={() => navigate("/table")}>Tables</Button>
        </div>
    );
}

function TopRightButton() {
    const navigate = useNavigate();
    const buttonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
    };

    return (
        <div style={buttonStyle}>
            <Button variant="primary" onClick={() => navigate("/history")}>Order History</Button>
            
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

    const [activeOrders, setActiveOrders] = useState([
        { id: 1, item: 'Uptown Ramen', quantity: 1, desc: 'Remove pork' },
        { id: 2, item: 'Salmon Sushi', quantity: 1, desc: '' },
        { id: 3, item: 'California Roll', quantity: 3, desc: '' },
        { id: 4, item: 'Rainbow Roll', quantity: 3, desc: '' },
        { id: 5, item: 'Okonomiyaki', quantity: 3, desc: '' },
        { id: 6, item: 'Miso Soup', quantity: 3, desc: '' },
        { id: 7, item: 'Mango Rolls', quantity: 3, desc: '' },
        { id: 8, item: 'Chicken Skewers', quantity: 3, desc: '' },
        { id: 9, item: 'Tempura Vegetables', quantity: 3, desc: '' },
        { id: 10, item: 'Fried Rice', quantity: 3, desc: '' },
        { id: 11, item: 'Spring Rolls', quantity: 3, desc: '' },
        { id: 12, item: 'Vegetable Rolls', quantity: 3, desc: '' },
        { id: 13, item: 'Beef Skewers', quantity: 3, desc: '' },
   


    ]);

    const handleMarkAsCompleted = (orderId) => {
        const orderIndex = activeOrders.findIndex(order => order.id === orderId);
        if (orderIndex !== -1) {
            const updatedOrders = activeOrders.filter(order => order.id !== orderId);
            setActiveOrders(updatedOrders);
        }
    }

    return (
        <div className="parent" >

        <h1 style={{ margin: 0, fontSize: '32px', textAlign: 'center', fontWeight: 'bold', background:'#fff5ee' }}>Active Orders</h1>
        <h2 className="tableNumber" style={{ margin: 0, fontSize: '32px', textAlign: 'center', color: 'black', background:'#fff5ee'}}> Table 1 Active Orders</h2>
        <TopLeftButton />
        <TopRightButton />
 
        <div className="order-container" >
                <table className="order-preview" style={{ ...customBackgroundStyle2, width: '100%', background: 'white'}}>
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }}>Item Number</th>
                            <th style={{ width: '1000px' }}>Item</th>
                            <th style={{ width: '10%' }}>Quantity</th>
                            <th style={{ width: '30%' }}>Special Instructions</th>
                            <th style={{ width: '10%' }}>Mark as Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activeOrders.map((order, index) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>
                                    {order.item}
                                </td>
                                <td>{order.quantity}</td>
                                <td>{order.desc}</td>
                                <td>
                                    <button className="complete-button" onClick={() => handleMarkAsCompleted(order.id)}>✓ Completed</button>
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