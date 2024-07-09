import { configureStore } from "@reduxjs/toolkit";

import dropDownSlice from "./slice/dropDownSlice";
import hamBurgerSlice from "./slice/hamBurger";
import wishListSlice from "./slice/wishListSlice";
import openComponentSlice from "./slice/openComponentSlice";
// import STORAGE_KEY from "../assets/constants/storageKey";

// const preloadedState = loadStateInLocalStorage();
export const store = configureStore({
  reducer: {
    dropDowns: dropDownSlice,
    hamBurger: hamBurgerSlice,
    wishlist: wishListSlice,
    openComponentById: openComponentSlice,
  },
  // preloadedState,
});

// function saveStateInLocalStorage(state) {
//   const serializedState = JSON.stringify(state.wishlist);
//   localStorage.setItem(STORAGE_KEY.WISHLIST_STATE, serializedState);
// }

// function loadStateInLocalStorage() {
//   const serializedState = localStorage.getItem(STORAGE_KEY.WISHLIST_STATE);
//   if (serializedState === null) return undefined;
//   return { wishlist: JSON.parse(serializedState) };
// }

// store.subscribe(() => saveStateInLocalStorage(store.getState()));
