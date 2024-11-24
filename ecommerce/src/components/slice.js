import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const viewData = createSlice({
  name: 'viewData',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push({ ...action.payload, quantity: 1 }); // Add new product with quantity set to 1
    },
    removeFromCart: (state, action) => {
      state.splice(action.payload, 1); // Remove item by index
    },
    increseQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;  // Increase quantity by 1
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;  // Decrease quantity by 1
      }
    },

  }
});

export const { addToCart, removeFromCart, increseQuantity, decreaseQuantity,productQuantity } = viewData.actions;
export default viewData.reducer;
