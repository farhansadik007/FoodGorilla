import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import ChefCard from '../ChefCard/ChefCard';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ChefCard></ChefCard>
            <Footer></Footer>
        </div>
    );
};

export default Main;