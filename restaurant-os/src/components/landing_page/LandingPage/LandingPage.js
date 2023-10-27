import React from 'react';
import './LandingPage.css';
import Header from '../Header/Header';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import LanguageButton from '../LanguageButton/LanguageButton';
import ActionButton from '../ActionButton/ActionButton';

function LandingPage() {
    return (
        <div className="landing-page">
            <Header />
            <WelcomeSection />
            <LanguageButton />
            <ActionButton />
        </div>
    );
}

export default LandingPage;
