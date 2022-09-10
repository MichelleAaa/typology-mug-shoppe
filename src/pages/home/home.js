import React from 'react';
import Header from '../../components/Header';
import EnclosedCards from '../../components/EnclosedCards';
import ImgCards from '../../components/ImgCards';
import ImageGridWithText from '../../components/ImageGridWithText';
import HeadingWithText from '../../components/HeadingWithText';
import BeigeBackgroundText from '../../components/BeigeBackgroundText';
import { HomeTextTypeData, ShoppingPromptData, ProductsCategories, ViewProductButtonData, ImgGridWithTextData } from './HomeData';
import Button from '../../components/Button';
import SubscriptionLarge from '../../components/SubscriptionLarge';

function HomePage() {

    const ViewProductsButton = () => {
        return (
            <div className='container'>
                <div className='row'>
                    <div className="col-12 d-flex justify-content-center">
                        <Button buttonData={ViewProductButtonData} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <React.Fragment>
            <Header />
            <main>
                <HeadingWithText textData={HomeTextTypeData} />
                <EnclosedCards />
                <ImageGridWithText textData={ImgGridWithTextData} />
                <BeigeBackgroundText textData={ShoppingPromptData} />
                <ImgCards cardsData={ProductsCategories} />
                <ViewProductsButton />
            </main>
            <SubscriptionLarge />
        </React.Fragment>
    );
}

export default HomePage;