import React, { Component }  from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProductsDisplayData, ProductHeaderData } from './ProductsData';
import HeaderSmall from '../../components/HeaderSmall';
import Sort from '../../components/Sort';
import Button from '../../components/Button';
import ProductsGrid from '../../components/ProductsGrid';
import SubscriptionSmall from '../../components/SubscriptionSmall';

const ProductsHeader = () => {
    return (
        <HeaderSmall headerData={ProductHeaderData} />
    )
}

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
            <ProductsHeader />
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