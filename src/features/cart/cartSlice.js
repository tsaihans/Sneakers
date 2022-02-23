import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    visible: false,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cart.splice(action.payload, 1);
            state.cart = [...state.cart];
        },
        cleanCart: (state) => {
            state.cart = [];
        },
        openCart: (state) => {
            state.visible = true;
        },
        closeCart: (state) => {
            state.visible = false;
        },
    }
})

export const { addToCart, removeFromCart, cleanCart, openCart, closeCart } = cartSlice.actions;

export const cartItems = (state) => state.cart.cart;

export const cartVisibleState = (state) => state.cart.visible;

export default cartSlice.reducer;