import React from 'react';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';

const customBackgroundStyle = {
    backgroundColor: '#fff5ee', // Replace with your desired background color
};

function SingleItemPage() {
    return (
        <>
        <div>
            <img src="/background.png" alt="Background Image" className='cover-image'></img>
        </div>
        <div className="nav_Header" style={customBackgroundStyle}>
            <NavigationHeader/>
        </div>
        </>
    );
}

export default SingleItemPage;