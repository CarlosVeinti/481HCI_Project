import React from 'react';

import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import CategoriesButtons from '../../components/CategoriesButtons/CategoriesButtons';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader'

function CategoriesPage() {
    return (
        <>
        <div className="landing-page">
            
            <NavigationHeader/>
            <CategoriesButtons />
        </div>
        </>
    );
}

export default CategoriesPage;
