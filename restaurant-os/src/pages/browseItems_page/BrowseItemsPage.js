import React from 'react';

import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import CategoriesButtons from '../../components/CategoriesButtons/CategoriesButtons';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import CategoriesSideBar from '../../components/CategoriesSideBar/CategoriesSideBar';
import './BrowseItemsPage.css'

const customBackgroundStyle = {
    backgroundColor: '#fff5ee', // Replace with your desired background color
};

function BrowseItemsPage() {
    return (
        <>
        <div className="browseItemsClass" style={customBackgroundStyle}>
            <NavigationHeader/>
        </div>
        <div>
            <CategoriesSideBar/>
        </div>
        </>
    );
}

export default BrowseItemsPage;