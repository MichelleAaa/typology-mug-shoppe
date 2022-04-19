import React, { Component }  from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../../components/Navbar';
import Header from '../../components/Header';
import EnclosedCards from '../../components/EnclosedCards';
import ImgCards from '../../components/ImgCards';
import ImageGridWithText from '../../components/ImageGridWithText';
import HeadingWithText from '../../components/HeadingWithText';
import BeigeBackgroundText from '../../components/BeigeBackgroundText';
import { HomeTextTypeData, ShoppingPromptData, ProductsCategories, ViewProductButtonData } from './HomeData';
import Button from '../../components/Button';
import SubscriptionLarge from '../../components/SubscriptionLarge';

const TypologyText = () => {
    return (
        <HeadingWithText textData={HomeTextTypeData} />
    )
}

const ShoppingPrompt = () => {
    return (
        <>
            <BeigeBackgroundText textData={ShoppingPromptData} />
        </>
    )
}

const ProductCards = () => {
    return (
        <ImgCards cardsData={ProductsCategories} />
    );
}

const ViewProductsButton =() => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-12 d-flex justify-content-center">
                        <Button buttonData={ViewProductButtonData} />
                    </div>
                </div>
            </div>
        </>
    );
}

function HomePage() {
    return (
        <>
            <Navigation />
            <Header />
            <TypologyText />
            <EnclosedCards />
            <ImageGridWithText />
            <ShoppingPrompt />
            <ProductCards />
            <ViewProductsButton />
            <SubscriptionLarge />
        </>
    );
}

export default HomePage;