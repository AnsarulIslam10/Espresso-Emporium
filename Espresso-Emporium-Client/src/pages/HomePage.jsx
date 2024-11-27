import React from 'react';
import PopularProducts from '../components/PopularProducts';
import Banner from '../components/Banner';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default HomePage;