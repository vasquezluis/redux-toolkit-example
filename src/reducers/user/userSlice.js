import { createSlice } from "@reduxjs/toolkit";

// TODO: aqui se declara el estado inicial y reducer
// TODO: slice = reducers + actions

const initialState = {
  email: "",
  fullName: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  // ? funcion que toma el state y action y hace algo
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.token = action.payload.token;
    },
    unSetUser: (state, action) => {
      state.email = "";
      state.fullName = "";
      state.token = "";
    },
  },
});

// ? export actions
export const { setUser, unSetUser } = userSlice.actions;

// ? este export es lo que va a estar en el store
export default userSlice.reducer;
