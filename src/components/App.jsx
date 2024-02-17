import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_PATHES } from "../constants/constants";
import Loader from "../components/Loader/Loader";
import SharedLayout from "../components/SharedLayout/SharedLayout";
import { getAllCars} from "../redux/cars/carsSlice";

const Home = lazy(() => import("../pages/Home"));
const Catalog = lazy(() => import("../pages/Catalog"));
const Favourite = lazy(() => import("../pages/Favourite"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTE_PATHES.home} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE_PATHES.catalog} element={<Catalog />} />
          <Route path={ROUTE_PATHES.favourites} element={<Favourite />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;