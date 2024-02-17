import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCars} from "../redux/cars/carsSlice";
import Catalog from "pages/Catalog";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
      <Catalog />
  );
};
