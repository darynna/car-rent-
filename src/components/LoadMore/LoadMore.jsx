import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMoreRentalCars } from "../../redux/cars/carsSlice";
import { selectTotalCarsAmount } from "../../redux/cars/carsSelectors";

const LoadMoreButton = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const allCars = useSelector(selectTotalCarsAmount);
  // const limit = Math.ceil(allCars / 12);
  const dispatch = useDispatch();

  const changeCurrentPage = () => {
    setCurrentPage((prevState) => (prevState += 1));
  };

  useEffect(() => {
    if (currentPage === 1) {
      return;
    }
    dispatch(getMoreRentalCars(currentPage));
  }, [dispatch, currentPage]);

  return (
    <button
      onClick={() => {
        changeCurrentPage();
      }}
    >
      Load more
    </button>
  );
};

export default LoadMoreButton;