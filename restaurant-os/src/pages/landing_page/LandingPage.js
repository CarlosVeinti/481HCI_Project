import React from 'react';
import './LandingPage.css';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import LanguageButton from '../../components/LanguageButton/LanguageButton';

function LandingPage() {
    return (
        <>
        <div>
        <img src="/background.png" alt="Background Image" className='cover-image'></img>
        </div>
        <div className="landing-page">
            <div>
                <img src="/logo.png" alt="Restaurant Logo" className='logo'></img>
            </div>
            <WelcomeSection />
            <LanguageButton />
        </div>
        </>
    );
}

export default LandingPage;
