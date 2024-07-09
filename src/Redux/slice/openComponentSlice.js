import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  componentId: null,
};
const openComponentSlice = createSlice({
  name: "openComponentById",
  initialState,
  reducers: {
    setOpenComponentById: (state, action) => {
      state.componentId = action.payload;
    },
    closeComponentById: (state) => {
      state.componentId = null;
    },
  },
});

export const { setOpenComponentById, closeComponentById } =
  openComponentSlice.actions;
export default openComponentSlice.reducer;
