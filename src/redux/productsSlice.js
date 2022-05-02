import { createSlice } from "@reduxjs/toolkit";
import { ProductsDisplayData, IndividualProductData } from '../pages/products/ProductsData';

const initialState = { 
    productsList: ProductsDisplayData, 
    productList: IndividualProductData 
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
});

export default productsSlice.reducer;