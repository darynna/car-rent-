import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  requestAllCars,
  requestCars,
  requestMoreCars
} from "../../services/cars/api";

export const getAllCars = createAsyncThunk(
  "cars/getTotal",
  async (_, thunkApi) => {
    try {
      const carsArray = await requestAllCars();
      const total = carsArray.length;
      return total;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getRentalCars = createAsyncThunk(
  "cars/getCars",
  async (_, thunkApi) => {
    try {
      const carsArray = await requestCars();
      return carsArray;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getMoreRentalCars = createAsyncThunk(
  "cars/getMoreCars",
  async (page, thunkApi) => {
    try {
      const carsArray = await requestMoreCars(page);
      return carsArray;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  carsArray: [],
  carsTotalAmount: null,
  // selectedCar: null,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carsTotalAmount = action.payload;
      })

      .addCase(getRentalCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carsArray = action.payload;
      })

      .addCase(getMoreRentalCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carsArray = [...state.carsArray, ...action.payload];
      })

      .addMatcher(
        isAnyOf(
          getAllCars.pending,
          getRentalCars.pending,
          getMoreRentalCars.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllCars.rejected,
          getRentalCars.rejected,
          getMoreRentalCars.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

export const carsReducer = carsSlice.reducer;