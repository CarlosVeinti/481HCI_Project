import React from 'react';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import LanguageButton from '../../components/LanguageButton/LanguageButton';

function CartPage() {
    return (
        <>
        <div>
        <img src="/logo.png" alt="Restaurant Logo" className='cover-image'></img>
        </div>
        <div className="landing-page">
            <div className='cover-title'>
                <h1>Restaurant Name</h1>
            </div>
            <WelcomeSection />
            <LanguageButton />
        </div>
        </>
    );
}

export default CartPage;