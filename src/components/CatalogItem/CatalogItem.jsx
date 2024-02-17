import Line from "../LineDecoration/LineDecoration"
import {
  splitAddressCity,
  splitAddressCountry,
  firstLetterUpCase,
  shortestSentence
} from '../../helpers/helpers';

const CatalogItem = ({id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address  }) => {
  
  const city = splitAddressCity(address);
  const country = splitAddressCountry(address);
  const carType = firstLetterUpCase(type);
  const functionality = shortestSentence(functionalities)
   return (
    <li>
     <div>
        <img src={img} alt={description}/>
        <button>follow</button>
        <div>
          <p>{`${make} ${model}, ${year}`}</p>
          <p>{rentalPrice}</p>
        <div/>
         <div >
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
        </div>
     </div>
     </div>
     <button type="button">
        Learn more
      </button>
    </li>
   )
}

export default CatalogItem