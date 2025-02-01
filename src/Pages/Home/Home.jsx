import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularProducts from './PopularProducts/PopularProducts';
import AdsCards from './AdsCards/AdsCards';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Subscribe from './Subscribe/Subscribe';
import Facilities from './Facilities/Facilities';

const Home = () => {
    return (
        <div className='space-y-5'>
            <Banner></Banner>
            <Category></Category>
            <PopularProducts></PopularProducts>
            <AdsCards></AdsCards>
            <FeaturedProducts ></FeaturedProducts>
            
        </div>
    );
};

export default Home;