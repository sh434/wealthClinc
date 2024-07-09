import { createSlice } from "@reduxjs/toolkit";

export const hamBurgerSlice = createSlice({
  name: "hamBurger",
  initialState: {
    hamBurgerState: true,
  },
  reducers: {
    handleHamBurger: (state, action) => {
      // console.log("Working redux", state.hamBurgerState);
      state.hamBurgerState = state.hamBurgerState
        ? (state.hamBurgerState = false)
        : (state.hamBurgerState = true);
    },
  },
});

export const { handleHamBurger } = hamBurgerSlice.actions;
export default hamBurgerSlice.reducer;
