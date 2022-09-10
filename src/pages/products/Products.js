import React from 'react';
import { ProductsDisplayData, ProductHeaderData } from './ProductsData';
import HeaderSmall from '../../components/HeaderSmall';
import Sort from '../../components/Sort';
import ProductsGrid from '../../components/ProductsGrid';
import SubscriptionSmall from '../../components/SubscriptionSmall';

function ProductsPage() {
    return (
        <React.Fragment>
            <HeaderSmall headerData={ProductHeaderData} />
            <main>
                <Sort />
                <ProductsGrid productsData={ProductsDisplayData}/>
            </main>
            <SubscriptionSmall />
        </React.Fragment>
    );
}

export default ProductsPage;