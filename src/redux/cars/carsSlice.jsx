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
  isLoading: false,
  error: null,
  brandFilter: "All Cars",
  priceFilter: 'Any prices',
  mileageFromFilter: null,
  mileageToFilter: null
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  reducers:{
    setBrandFilter(state, action) {
      state.brandFilter = action.payload
    },
    setPriceFilter(state, action) {
      state.priceFilter = action.payload
    },
    setMileageFromFilter(state, action) {
      state.mileageFromFilter = action.payload
    },
    setMileageToFilter(state, action) {
      state.mileageToFilter = action.payload
    },
  },
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
export const { setBrandFilter, setPriceFilter, setMileageFromFilter, setMileageToFilter } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;