// TODO: El store sirve para almacenar los estados globales

import { configureStore } from "@reduxjs/toolkit";

// ? reducers | para actualizar el state
import userReducer from "../reducers/user/userSlice";
import cartReducer from "../reducers/cart/cartSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
