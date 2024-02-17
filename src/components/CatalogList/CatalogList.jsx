import CatalogItem from "../CatalogItem/CatalogItem";

const CatalogList = ({carsArray}) => {

  return (
    <ul>
      {carsArray.length !== 0 &&
        carsArray.map(({id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories,
functionalities, rentalPrice, rentalCompany, address}) => {

          return (
            <CatalogItem
              key={id}
              id={id}
              img={img}
              make={make}
              model={model}
              year={year}
              rentalPrice={rentalPrice}
              address={address}
              rentalCompany={rentalCompany}
              type={type}
              functionalities={functionalities}
              description={description}
            />
          );
        })}
    </ul>
  );
};

export default CatalogList;