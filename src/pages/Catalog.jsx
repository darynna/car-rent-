import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRentalCars } from "../redux/cars/carsSlice";
import { selectCars } from "../redux/cars/carsSelectors";
import CatalogList from "components/CatalogList/CatalogList";
import LoadMoreButton from "components/LoadMore/LoadMore";

const Catalog = () => {
  const dispatch = useDispatch();
  const carsArray = useSelector(selectCars);
  console.log(carsArray)
  useEffect(() => {
    dispatch(getRentalCars());
  }, [dispatch]);

  return (
    <>
      <CatalogList carsArray={carsArray}/>
      <LoadMoreButton />
    </>
  );
};

export default Catalog;