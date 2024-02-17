import Line from "../LineDecoration/LineDecoration"
import {CarsItem, ContentWrapper, CarsImg, TitleWrapper, CarsTitle, CarPrice, Description, CarBtn, FavBtn} from "./CatalogItem.styled"
import {
  splitAddressCity,
  splitAddressCountry,
  firstLetterUpCase,
  shortestSentence
} from '../../helpers/helpers';
import { ReactComponent as IconFavourite } from "../../assets/svg/heart.svg";

const CatalogItem = ({id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address  }) => {
  
  const city = splitAddressCity(address);
  const country = splitAddressCountry(address);
  const carType = firstLetterUpCase(type);
  const functionality = shortestSentence(functionalities)
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
        <FavBtn><IconFavourite/></FavBtn>
     </ContentWrapper>
     <CarBtn type="button">
        Learn more
      </CarBtn>
    </CarsItem>
   )
}

export default CatalogItem