export const selectCars = (state) => state.cars.carsArray;
export const selectTotalCarsAmount = (state) => state.cars.carsTotalAmount;
export const selectBrandFilter = state => state.cars.brandFilter;
export const selectPriceFilter = state => state.cars.priceFilter;
export const selectMileageFromFilter = state => state.cars.mileageFromFilter;
export const selectMileageToFilter = state => state.cars.mileageToFilter;