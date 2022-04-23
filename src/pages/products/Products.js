import React, { Component }  from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Header from '../../components/Header';
// import EnclosedCards from '../../components/EnclosedCards';
// import ImgCards from '../../components/ImgCards';
// import ImageGridWithText from '../../components/ImageGridWithText';
// import HeadingWithText from '../../components/HeadingWithText';
// import BeigeBackgroundText from '../../components/BeigeBackgroundText';
import { ProductsDisplayData } from './ProductsData';
import HeaderSmall from '../../components/HeaderSmall';
import Sort from '../../components/Sort';
import Button from '../../components/Button';
import ProductsGrid from '../../components/ProductsGrid';
import SubscriptionSmall from '../../components/SubscriptionSmall';

// const TypologyText = () => {
//     return (
//         <HeadingWithText textData={HomeTextTypeData} />
//     )
// }

// const ShoppingPrompt = () => {
//     return (
//         <>
//             <BeigeBackgroundText textData={ShoppingPromptData} />
//         </>
//     )
// }

// const ProductCards = () => {
//     return (
//         <ImgCards cardsData={ProductsCategories} />
//     );
// }

// const ViewProductsButton =() => {
//     return (
//         <>
//             <div className='container'>
//                 <div className='row'>
//                     <div className="col-12 d-flex justify-content-center">
//                         <Button buttonData={ViewProductButtonData} />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

const InitialProducts = () => {
    return (
        <ProductsGrid productsData={ProductsDisplayData}/>
    );
}

function ProductsPage() {
    return (
        <>
            <HeaderSmall />
            <Sort />
            <InitialProducts />
            <SubscriptionSmall />
            {/* <TypologyText />
            <EnclosedCards />
            <ImageGridWithText />
            <ShoppingPrompt />
            <ProductCards />
            <ViewProductsButton />
            <SubscriptionLarge /> */}
        </>
    );
}

export default ProductsPage;