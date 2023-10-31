import React from 'react';

import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import CategoriesButtons from '../../components/CategoriesButtons/CategoriesButtons';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';

const customBackgroundStyle = {
    backgroundColor: '#fff5ee', // Replace with your desired background color
};

function EditSingleItemPage() {
    return (
        <>
        <div className="nav_Header" style={customBackgroundStyle}>
            <NavigationHeader/>
        </div>
        </>
    );
}

export default EditSingleItemPage;