import React from 'react';
import Button from 'react-bootstrap/Button';

import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import CategoriesButtons from '../../components/CategoriesButtons/CategoriesButtons';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import './WaiterPage.css';

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
            <Button variant="primary">Table</Button>
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
    const customBackgroundStyle = {
        backgroundColor: '#fff5ee',
    };

    const customBackgroundStyle2 = {
        backgroundColor: '#FFFFFF',
    };

    const orders = [
        { id: 1, item: 'Item 1', quantity: 2, date: '2023-10-31 10pm' },
        { id: 2, item: 'Item 2', quantity: 1, date: '2023-10-30' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Item 3', quantity: 3, date: '2023-10-29' },
    ];
    const handleItemClick = (item) => {
        // Handle the click on the item here
        console.log(`Item clicked: ${item}`);
    };

    return (
        <div className="centered-container" style={customBackgroundStyle}>
        <TopLeftButton />
        <TopRightButton />

            <div className="order-container" style={{ maxHeight: '500px', overflowY: 'auto' }}>
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