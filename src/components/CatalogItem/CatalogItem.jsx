import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Line from "../LineDecoration/LineDecoration"
import {CarsItem, ContentWrapper, CarsImg, TitleWrapper, CarsTitle, CarPrice, Description, CarBtn, FavBtn} from "./CatalogItem.styled"
import {
  splitAddressCity,
  splitAddressCountry,
  firstLetterUpCase,
  shortestSentence
} from '../../helpers/helpers';
import { ReactComponent as IconFavourite } from "../../assets/svg/heart.svg";
import { selectFavoriteCars } from "../../redux/favourite/favouriteSelectors";
import { addFavouriteCar, removeFavouriteCar} from "../../redux/favourite/favouriteSlice";

const CatalogItem = ({id, year, make, model, type, img, functionalities, rentalPrice, rentalCompany, address  }) => {
  const dispatch = useDispatch();

  const city = splitAddressCity(address);
  const country = splitAddressCountry(address);
  const carType = firstLetterUpCase(type);
  const functionality = shortestSentence(functionalities)

  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteCarsArray = useSelector(selectFavoriteCars);
  useEffect(() => {
    if (favoriteCarsArray.find((car) => car.id === id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteCarsArray, id]);

  const toggleFavoriteCar = () => {
    if (favoriteCarsArray.find((car) => car.id === id)) {
      dispatch(removeFavouriteCar(id));
    } else {
      dispatch(addFavouriteCar({id, year, make, model, type, img, functionalities, rentalPrice, rentalCompany, address  }));
    }
  };

   return (
    <CarsItem>
     <ContentWrapper>
        <CarsImg src={img} alt={model}/>
        <TitleWrapper>
          <CarsTitle>{`${make} ${model}, ${year}`}</CarsTitle>
          <CarPrice>{rentalPrice}</CarPrice>
        </TitleWrapper>
         <Description >
          {city} 
          <Line />
          {country} 
          <Line />
          {rentalCompany} 
          <Line />
          {carType} 
          <Line />
          {make} 
          <Line />
          {id} 
          <Line />
          {functionality}
        </Description>
        <FavBtn 
        className={isFavorite ? "isFavorite" : ""}
        onClick={() => toggleFavoriteCar(id)} type="button"
        >
           <IconFavourite/>
          </FavBtn>
     </ContentWrapper>
     <CarBtn type="button">
        Learn more
      </CarBtn>
    </CarsItem>
   )
}

export default CatalogItem