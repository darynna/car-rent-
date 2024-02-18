import { useEffect } from 'react';
import {
  StyledModalBackdrop,
  StyledModalBox,
  StyledModalBtn,
  Styledimg,
  Span,
  Title,
  Box,
  Description,
  AccessoriesTitle,
  BoxChild,
  ConditionsItems,
  ConditionsItemsSpan,
  ConditionsItemsBox,
  Button
} from './Modal.styled';
import { ReactComponent as IconClose } from '../../assets/svg/closeBtn.svg';
import Line from '../LineDecoration/LineDecoration';
import {
  splitAddressCity,
  splitAddressCountry,
  firstLetterUpCase,
} from '../../helpers/helpers';

const Modal = ({ car, closeModal }) => {
  console.log(car);
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = car;

  const formattedMileage = mileage.toLocaleString('en-US');
  const formattedRentalPrice = rentalPrice.replace('$', '') + '$';

  const city = splitAddressCity(address);
  const country = splitAddressCountry(address);
  const carType = firstLetterUpCase(type);

  useEffect(() => {
    const handleEscapeClick = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleEscapeClick);

    return () => {
      window.removeEventListener('keydown', handleEscapeClick);
      document.body.style.overflowY = 'visible';
    };
  }, [closeModal]);

  return (
    <>
      <StyledModalBackdrop onClick={(e) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}} >
        <StyledModalBox>
          <StyledModalBtn
            className="close-btn"
            type="button"
            onClick={closeModal}
          >
            <IconClose className="close-btn-svg" />
          </StyledModalBtn>
          <div>
            <Styledimg src={img} alt={model} />
            <Title>
              {make} <Span>{model}</Span>, {year}
            </Title>
            <Box>
              <BoxChild>
                {city}
                <Line />
                {country}
                <Line />
                {`Id: ${id}`}
                <Line />
                {`Year: ${year}`}
                <Line />
              </BoxChild>
              <div>
                {`Type: ${carType}`}
                <Line />
                {`Fuel Consumption: ${fuelConsumption}`}
                <Line />
                {`Engine Size: ${engineSize}`}
              </div>
            </Box>
            <Description>{description}</Description>
            <div>
              <AccessoriesTitle>
                Accessories and functionalities:
              </AccessoriesTitle>
              <Box>
                <BoxChild>
                {accessories.length !== 0 &&
                  accessories.map((accessory, index) => (
                    <>
                      {accessory}
                      <Line />
                    </>
                  ))}
                  </BoxChild>
                {functionalities.length !== 0 &&
                  functionalities.map((functionality, index) => (
                    <>
                      {functionality}
                      <Line />
                    </>
                  ))}
              </Box>
            </div>
            <div>
              <AccessoriesTitle>Rental Conditions:</AccessoriesTitle>
              <ConditionsItemsBox>
              {rentalConditions.split('\n').map((condition, index) => {
                if (condition.includes('Minimum age')) {
                  const [key, age] = condition.split(': ');
                  return (
                    <ConditionsItems key={index}>
                        <ConditionsItemsSpan>
                      <span>{key}: </span>
                        <Span>{age}</Span></ConditionsItemsSpan>
                    </ConditionsItems>
                  );
                } else {
                  return (
                    <ConditionsItems key={index}>
                      <ConditionsItemsSpan className='conditionsItemsDifferent'>{condition}</ConditionsItemsSpan>
                    </ConditionsItems>
                  );
                }
              })}
              <ConditionsItems>
                <ConditionsItemsSpan>
                Mileage: <Span>{formattedMileage}</Span>
                </ConditionsItemsSpan>
              </ConditionsItems>
              <ConditionsItems>
              <ConditionsItemsSpan>
                Price: <Span>{formattedRentalPrice}</Span>
                </ConditionsItemsSpan>
              </ConditionsItems>
            </ConditionsItemsBox>
            <Button href="tel:+380730000000">Rental car</Button>
            </div>
          </div>
        </StyledModalBox>
      </StyledModalBackdrop>
    </>
  );
};

export default Modal;

