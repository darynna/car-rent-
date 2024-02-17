import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  favoriteArray: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: INITIAL_STATE,

  reducers: {
    addFavouriteCar(state, action) {
      state.favoriteArray.push(action.payload);
    },
    removeFavouriteCar(state, action) {
      state.favoriteArray = state.favoriteArray.filter(
        (car) => car.id !== action.payload
      );
    },
  },
});

export const { addFavouriteCar, removeFavouriteCar } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;