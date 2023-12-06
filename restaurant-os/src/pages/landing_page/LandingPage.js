import React from 'react';
import './LandingPage.css';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import LanguageButton from '../../components/LanguageButton/LanguageButton';

function LandingPage() {
    return (
        <>
        <div>
        <img src= {process.env.PUBLIC_URL +"/background.png"} alt="Background Image" className='cover-image'></img>
        </div>
        <div className="landing-page">
            <div>
                <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Restaurant Logo" className='logo'></img>
            </div>
            <WelcomeSection />
        </div>
        
        <LanguageButton />
        </>

    );
}

export default LandingPage;
