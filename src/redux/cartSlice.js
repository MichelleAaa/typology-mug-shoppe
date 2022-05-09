import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    total_price: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, { payload }) {
            const existsInCart = state.cartItems.find((item) => item.id === payload.id);

            if (existsInCart) {
                state.cartItems = state.cartItems.map((item) => item.id === payload.id ? {
                    ...item, quantity: item.quantity + 1
                    } : item ); 
            } else {
                state.cartItems.push({ ...payload, quantity: 1});
            }
        },
        removeItem(state, { payload }) {
            state.cartItems = state.cartItems.filter((item) => item.id !== payload.id);
        },
        increase(state, { payload }) {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.quantity = cartItem.quantity + 1;
        },
        decrease(state, { payload }) {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            if(cartItem.quantity > 0){
            cartItem.quantity = cartItem.quantity - 1;
            }
        },
        calculateTotals(state) {
            let price = state.cartItems.reduce((total, cur) => total + (cur.quantity * cur.price), 0);

            state.total_price = price;
        },
    },
});

export const { addToCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;