import React from 'react';
import Banner from '../../Components/HomePage/Banner';
import Stats from '../../Components/HomePage/Stats';
import TrendingApps from '../../Components/HomePage/TrendingApps';

const HomePage = () => {
    return (
        <div>
           <Banner/>
           <Stats/>
           <TrendingApps/>
        </div>
    );
};

export default HomePage;