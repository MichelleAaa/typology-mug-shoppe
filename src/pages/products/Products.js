import React from 'react';
import { ProductsDisplayData, ProductHeaderData } from './ProductsData';
import HeaderSmall from '../../components/HeaderSmall';
import Sort from '../../components/Sort';
import ProductsGrid from '../../components/ProductsGrid';
import SubscriptionSmall from '../../components/SubscriptionSmall';

const ProductsHeader = () => {
    return (
        <HeaderSmall headerData={ProductHeaderData} />
    )
}

const InitialProducts = () => {
    return (
        <ProductsGrid productsData={ProductsDisplayData}/>
    );
}

function ProductsPage() {
    return (
        <>
            <ProductsHeader />
            <main>
                <Sort />
                <InitialProducts />
            </main>
            <SubscriptionSmall />
        </>
    );
}

export default ProductsPage;