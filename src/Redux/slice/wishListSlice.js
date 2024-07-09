import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Array to store wishlist items
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, action) => {
      console.log(state, action, action.payload);
      state.items.push(action.payload);
    },
    removeItemFromWishlist: (state, action) => {
        console.log(action.payload);
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist } =
  wishListSlice.actions;
export default wishListSlice.reducer;
