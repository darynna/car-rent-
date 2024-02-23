import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMoreRentalCars } from "../../redux/cars/carsSlice";
import { selectTotalCarsAmount } from "../../redux/cars/carsSelectors";
import { StyledLoadMoreBtn} from "./LoadMore.styled"

const LoadMoreButton = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const allCars = useSelector(selectTotalCarsAmount);
  const limit = Math.ceil(allCars / 12);
  let hidden = false;
  
  if (currentPage >= limit){
    hidden = true;
  }
  const dispatch = useDispatch();

  const changeCurrentPage = () => {
    setCurrentPage((prevState) => (prevState += 1));
  };

  useEffect(() => {
    if (currentPage !== 1) {
      dispatch(getMoreRentalCars(currentPage));
    }
    return
  }, [dispatch, currentPage]);

  return (
    <StyledLoadMoreBtn
     className={hidden && "hidden"}
      onClick={() => {
        changeCurrentPage();
      }}
    >
      Load more
    </ StyledLoadMoreBtn>
  );
};

export default LoadMoreButton;