import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


import './HistoryPage.css';

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
            <Button variant="primary" onClick={() => navigate("/waiter")}>Active Orders</Button>
        </div>
    );
}


function WaiterPage() {
    const customBackgroundStyle = {
        background: 'url("/public/background.png")', // Replace "path/to/your/image.jpg" with the actual path to your image file
  backgroundSize: 'cover', // You can adjust this property based on your image size preferences
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
    };

    const customBackgroundStyle2 = {
        backgroundColor: '#FFFFFF',
    };

    const orders = [
        { id: 1, item: 'Spicy Tuna', quantity: 2, date: '2023-10-31 10pm' },
        { id: 2, item: 'Salmon Sushi', quantity: 1, date: '2023-10-30' },
        { id: 3, item: 'California Rolls', quantity: 3, date: '2023-10-29' },
        { id: 3, item: 'Rainbow Rolls', quantity: 1, date: '2023-10-29' },
        { id: 3, item: 'Okonomiyaki', quantity: 4, date: '2023-10-29' },
        { id: 3, item: 'Miso Soup', quantity: 5, date: '2023-10-29' },
        { id: 3, item: 'Yakitori', quantity: 9, date: '2023-10-29' },
        { id: 3, item: 'Udon', quantity: 2, date: '2023-10-29' },
        { id: 3, item: 'Takoyaki', quantity: 7, date: '2023-10-29' },

    ];
    const handleItemClick = (item) => {
        // Handle the click on the item here
        console.log(`Item clicked: ${item}`);
    };

    return (        
    <div className="parent" >
        
        <TopLeftButton />
        
        <h1 style={{ margin: 0, fontSize: '32px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Order History</h1>

        <h2 className="tableNumber" style={{ margin: 0, fontSize: '32px', textAlign: 'center', color: 'black' }}> Table 1 History of Orders</h2>
        
       
            
            <div className="order-container" style={{ maxHeight: 'auto', overflowY: 'auto' }}>
                
                <table className="order-preview" style={{ ...customBackgroundStyle2, width: '90%'}}>
                
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }}>Number</th>
                            <th style={{ width: '1000px' }}>Item</th>
                            <th style={{ width: '10%' }}>Quantity</th>
                            <th style={{ width: '30%' }}>Date</th>
                        </tr>
                    </thead>
                    <tbody >
                        {orders.map((order, index) => (
                            <tr key={order.id} style={{ height: '60px' }} >
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            
        </div>
        </div>
    );
}
export default WaiterPage;