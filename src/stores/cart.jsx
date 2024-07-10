// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: []
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const { productId, image, model, price, quantity } = action.payload;
//       const existingItem = state.items.find(item => item.productId === productId);
//       if (existingItem) {
//         existingItem.quantity += quantity;
//       } else {
//         state.items.push({ productId, image, model, price, quantity });
//       }
//     }
//   }
// });

// export const { addToCart } = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
  subtotal: 0,
  total: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, image, type, model, price, quantity } = action.payload;
      const existingItem = state.items.find(item => item.productId === productId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ productId, image, type, model, price, quantity });
      }
      localStorage.setItem("carts" , JSON.stringify(state.items))
      state.subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      state.total = state.subtotal; // Update total
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      state.items = state.items.filter(item => item.productId !== productId);
      state.subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      state.total = state.subtotal; // Update total
    },
    updateQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const item = state.items.find(item => item.productId === productId);
      if (item) {
        item.quantity += quantity;
        if (item.quantity <= 0) {
          state.items = state.items.filter(item => item.productId !== productId);
        }
        localStorage.setItem("carts" , JSON.stringify(state.items))
      }
      state.subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      state.total = state.subtotal; // Update total
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
