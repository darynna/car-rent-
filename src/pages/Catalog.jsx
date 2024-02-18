import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRentalCars } from "../redux/cars/carsSlice";
import { selectCars } from "../redux/cars/carsSelectors";
import CatalogList from "components/CatalogList/CatalogList";
import LoadMoreButton from "components/LoadMore/LoadMore";
import DropDownBar from "../components/DropDownBar/DropDownBar";

const Catalog = () => {
  const dispatch = useDispatch();
  const carsArray = useSelector(selectCars);
  const [filteredCars, setFilteredCars] = useState(carsArray);

  useEffect(() => {
    dispatch(getRentalCars());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCars(carsArray);
  }, [carsArray]);

  const handleFilterChange = (brandValue, priceValue, mileageFromValue, mileageToValue) => {
    let filteredCars = carsArray;
  
  if (brandValue !== 'All Cars') {
    filteredCars = filteredCars.filter(car => car.make === brandValue);
  }
  
  
  if (priceValue !== 'Any prices') {
    const price = parseInt(priceValue.replace('$', ''));
    filteredCars = filteredCars.filter(car => 
      parseInt(car.rentalPrice.replace('$', '')) === price
    );
  }

  if (mileageFromValue && mileageToValue) {
    filteredCars = filteredCars.filter(car => {
      return car.mileage >= Number(mileageFromValue) && car.mileage <= Number(mileageToValue);
    });
  }

  setFilteredCars(filteredCars);
  };

  return (
    <>
    <DropDownBar onFilterChange={handleFilterChange}/>
      {filteredCars.length === 0 && (
      <p>Sorry, There aren't any cars were found by your requests</p>
    )
      }{filteredCars.length > 0 && (
        <>
        <CatalogList carsArray={filteredCars}/>
        <LoadMoreButton /></>
      )
        }
    </>
  );
};

export default Catalog;