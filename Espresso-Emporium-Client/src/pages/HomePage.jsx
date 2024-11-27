import React from 'react';
import PopularProducts from '../components/PopularProducts';
import Banner from '../components/Banner';
import Features from '../components/Features';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default HomePage;