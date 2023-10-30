import React from 'react';

import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import CategoriesButtons from '../../components/CategoriesButtons/CategoriesButtons';

function CategoriesPage() {
    return (
        <>
        <div className="landing-page">
            <div className='cover-title'>
                <h1>Sushi-Ya</h1>
            </div>
            <CategoriesButtons />
        </div>
        </>
    );
}

export default CategoriesPage;
