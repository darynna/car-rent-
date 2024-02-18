import CatalogItem from "../CatalogItem/CatalogItem";
import {StyledCatalogList} from "./CatalogList.styled"

const CatalogList = ({carsArray}) => {

  return (
    <StyledCatalogList>
      {carsArray.length !== 0 &&
        carsArray.map((date) => {

          return (
            <CatalogItem key={date.id} date={date}
            />
          );
        })}
    </StyledCatalogList>
  );
};

export default CatalogList;