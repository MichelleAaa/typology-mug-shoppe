import { createSlice } from "@reduxjs/toolkit";
import { ProductsDisplayData, IndividualProductData } from '../pages/products/ProductsData';

const initialState = { 
    productsList: ProductsDisplayData, 
    productList: IndividualProductData,
    filteredProducts: ProductsDisplayData,
    typeFilter: [],
    cupFilter: [],
    sortApplied: [],
    totalFilters: [] 
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        filterProducts(state, payload) {
            if(state.totalFilters.indexOf(payload.payload) !== -1) return;
            state.totalFilters.push(payload.payload);
            if(payload.payload == 'Classic' || payload.payload == 'Tall'){
                state.cupFilter.push(payload.payload);
            } else {
                state.typeFilter.push(payload.payload);
            }
        },
        renderFilter(state) {
            state.filteredProducts = [];

            let typeTotalArr = [];
            if(state.typeFilter.length !== 0){
                for (let i = 0; i < state.typeFilter.length; i++){
                    let tempArr = state.productsList.filter(item => item.typeCategory === state.typeFilter[i]);
                    typeTotalArr.push(...tempArr);
                }
                state.filteredProducts = typeTotalArr;
            } else {
                state.filteredProducts = state.productsList;
            }

            let cupTotalArr = [];
            if(state.cupFilter.length !== 0){
                for (let j = 0; j < state.cupFilter.length; j++){
                    let tempArr = state.filteredProducts.filter(item => item.cupCategory === state.cupFilter[j]);
                    cupTotalArr.push(...tempArr);
                }
                state.filteredProducts = cupTotalArr;
            }
        },
        removeSingleFilter(state, payload){

            if(payload.payload == 'Classic' || payload.payload == 'Tall'){
                state.cupFilter = state.cupFilter.filter(item => item !== payload.payload);
            } else {
                state.typeFilter = state.typeFilter.filter(item => item !== payload.payload);
            }
            state.totalFilters = state.totalFilters.filter(item => item !== payload.payload);
        },


        sortProducts(state, payload) {
            state.sortApplied = payload.payload;
            if(payload.payload === 'PriceHightoLow'){
                state.filteredProducts = state.filteredProducts.sort(function(a, b){return b.price - a.price});
            }
            if(payload.payload === 'PriceLowtoHigh'){
                state.filteredProducts = state.filteredProducts.sort(function(a, b){return a.price - b.price});
            }
            if(payload.payload === 'NameZtoA'){
                state.filteredProducts = state.filteredProducts.sort(function(a, b){
                    if(a.name > b.name) { 
                        return -1;
                    } else {
                        return 1;}
                });
            }
            if(payload.payload === 'NameAtoZ'){
                state.filteredProducts = state.filteredProducts.sort(function(a, b){
                    if(a.name > b.name) { 
                        return 1;
                    } else {
                        return -1;}
                });
            }
        },
        removeAllFilters(state){
            state.filteredProducts = state.productsList;
            state.typeFilter = [];
            state.cupFilter = [];
            state.sortApplied = [];
            state.totalFilters = [];
        }
    }
});

export const { filterProducts, renderFilter, sortProducts, removeSingleFilter, removeAllFilters } = productsSlice.actions;

export default productsSlice.reducer;