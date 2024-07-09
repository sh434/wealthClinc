// dropDownSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const dropDownSlice = createSlice({
  name: "dropdowns",
  initialState: {},
  reducers: {
    openDropdown: (state, action) => {
      const { dropDownId } = action.payload;
      state[dropDownId] = true;
    },
    closeDropdown: (state, action) => {
      const { dropDownId } = action.payload;
      state[dropDownId] = false;
    },
  },
});

export const { openDropdown, closeDropdown } = dropDownSlice.actions;
export default dropDownSlice.reducer;
