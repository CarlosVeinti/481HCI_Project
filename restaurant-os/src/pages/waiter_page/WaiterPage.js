import React from 'react';

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

function WaiterPage() {
    return (
        
        
        <>
        <h1>Active Orders</h1> {/* Move the header to the top */}
        <div className="centered-container" style={customBackgroundStyle}>
        


        {/* Apply your custom CSS to components below */}
        <div className="order-preview"style={customBackgroundStyle2}>
            
            <div className="order-item"style={customBackgroundStyle2}>
                <span>Item 1</span>
                <button className="cancel-button">Cancel</button>
            </div>

            <div className="order-item"style={customBackgroundStyle2}>
                <span>Item 2</span>
                <button className="cancel-button">Cancel</button>
            </div>
            
            <div className="order-item"style={customBackgroundStyle2}>
                <span>Item 3</span>
                <button className="cancel-button">Cancel</button>
            </div>

        </div>

        </div>
        </>
    );
}
export default WaiterPage;