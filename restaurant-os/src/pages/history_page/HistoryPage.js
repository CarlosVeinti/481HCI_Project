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

function TopRightButton() {
    const navigate = useNavigate();
    const buttonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
    };

    return (
        <div style={buttonStyle}>
            <Button variant="primary" onClick={() => navigate("/table")}>Tables</Button>
            
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
        { id: 1, item: 'Hokkaido Ramen', quantity: 1, desc: 'Remove Pork, Double Soft boiled egg' },
        { id: 2, item: 'Gyoza', quantity: 1, desc: 'Double Extra Filling' },
        { id: 3, item: 'Coca-Cola', quantity: 1, desc: '' },

    ];
    const handleItemClick = (item) => {
        // Handle the click on the item here
        console.log(`Item clicked: ${item}`);
    };

    return (        
    <div className="parent" >
        
        <TopLeftButton />
        <TopRightButton/>

        <h1 style={{ margin: 0, fontSize: '32px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Order History</h1>

        <h2 className="tableNumber" style={{ margin: 0, fontSize: '32px', textAlign: 'center', color: 'black' }}> Table 1 History of Orders</h2>
        
       
            
            <div className="order-container" style={{ maxHeight: 'auto', overflowY: 'auto' }}>
                
                <table className="order-preview" style={{ ...customBackgroundStyle2, width: '90%'}}>
                
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }}>Number</th>
                            <th style={{ width: '1000px' }}>Item</th>
                            <th style={{ width: '10%' }}>Quantity</th>
                            <th style={{ width: '30%' }}>Special Instructions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {orders.map((order, index) => (
                            <tr key={order.id} style={{ height: '60px' }} >
                                <td>{index + 1}</td>
                                <td>
                                    {order.item}
                                </td>
                                <td>{order.quantity}</td>
                                <td>{order.desc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            
        </div>
        </div>
    );
}
export default WaiterPage;