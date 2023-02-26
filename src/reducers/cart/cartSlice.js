import { createSlice } from "@reduxjs/toolkit";

// TODO: aqui se declara el estado inicial y reducer
// TODO: slice = reducers + actions

const initialState = {
  totalCount: 0,
  productsList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  // ? funcion que toma el state y action y hace algo
  reducers: {
    addProductToCart: (state, action) => {
      state.totalCount += 1;
      state.productsList = [...productsList, action.payload];
    },
  },
});

// ? export actions
export const { addProductToCart } = cartSlice.actions;

// ? este export es lo que va a estar en el store
export default cartSlice.reducer;
