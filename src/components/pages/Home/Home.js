import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-primary m-4 p-4'>Welcome To Our PH-TOOLS Website</h1>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;