import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRentalCars } from "../redux/cars/carsSlice";
import CatalogList from "components/CatalogList/CatalogList";
import LoadMoreButton from "components/LoadMore/LoadMore";
import { selectFavoriteCars } from "../redux/favourite/favouriteSelectors";

const  Favourite = () => {
  const dispatch = useDispatch();
  const favoriteCarsArray = useSelector(selectFavoriteCars);
  useEffect(() => {
    dispatch(getRentalCars());
  }, [dispatch]);

  return (
    <>
    {favoriteCarsArray.length === 0 && (
      <p>Please, add some cars you may like!</p>
    )}
        {favoriteCarsArray.length > 0 && (
          <>
      <CatalogList carsArray={favoriteCarsArray}/>
      <LoadMoreButton />
      </>
    )}
    </>
  );
};

export default Favourite