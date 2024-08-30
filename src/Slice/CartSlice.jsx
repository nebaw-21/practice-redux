import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.find(item => item.id === product.id); // Fix: changed 'items' to 'item'
            if (!existingProduct) {
                state.push(product);
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(product => product.id !== action.payload); // Fix: no issue here
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingProduct = state.find(item => item.id === id); // Fix: changed 'items' to 'item'
            if (existingProduct) {
                existingProduct.quantity = quantity;
            }
        },
    }
});

export const { addToCart, removeFromCart, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
