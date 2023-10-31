import React from 'react';

import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import CategoriesButtons from '../../components/CategoriesButtons/CategoriesButtons';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader'
import './CategoriesPage.css'


const customBackgroundStyle = {
    backgroundColor: '#fff5ee', // Replace with your desired background color
};

function CategoriesPage() {
    return (
        <>
        <div className="nav_Header" style={customBackgroundStyle}>
            
            <NavigationHeader/>
        
            <CategoriesButtons />
        </div>
        </>
    );
}

export default CategoriesPage;
