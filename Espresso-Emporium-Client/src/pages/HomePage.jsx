import React from 'react';
import PopularProducts from '../components/PopularProducts';
import Banner from '../components/Banner';
import Features from '../components/Features';
import Gallery from '../components/Gallery';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <PopularProducts></PopularProducts>
            <Gallery></Gallery>
        </div>
    );
};

export default HomePage;