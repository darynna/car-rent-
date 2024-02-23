import React, {useState} from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import {selectCars, selectBrandFilter, selectPriceFilter,  selectMileageFromFilter, selectMileageToFilter } from "../../redux/cars/carsSelectors"
import { setBrandFilter , setPriceFilter, setMileageFromFilter, setMileageToFilter} from '../../redux/cars/carsSlice';
import {FormWrapper, InputToEl, InputFromEl, SearchButton} from "./DropDownBar.styled"

const DropDownBar = ({onFilterChange}) => {
  const carsArray = useSelector(selectCars);

  const [inputQueryFrom, setInputQueryFrom] = useState('');
  const [inputQueryTo, setInputQueryTo] = useState('');

  const brandFilter = useSelector(selectBrandFilter);
  const priceFilter = useSelector(selectPriceFilter);
  const searchValueFrom = useSelector(selectMileageFromFilter);
  const searchValueTo = useSelector(selectMileageToFilter)
  const dispatch = useDispatch();

 
  const handleFilterInputChange = (brandValue) => {
    dispatch(setBrandFilter(brandValue.label));
    onFilterChange(brandValue.label, priceFilter, searchValueFrom, searchValueTo);
  };
  
  const handlePriceChange = (priceValue) => {
    dispatch(setPriceFilter(priceValue.label));
    onFilterChange(brandFilter, priceValue.label, searchValueFrom, searchValueTo);
  };

  const brandOptions = [
    { value: 'All Cars', label: 'All Cars' },
    ...[...new Set(carsArray.map(car => car.make))].map(make => ({ value: make.toLowerCase(), label: make }))
  ];

const priceList = [];

for (let i = 10; i <= 100; i+=10) {
  priceList.push({ value: i, label: `${i}` });
};

const handleFromInputChange = (e) => {
  const { value } = e.target;
  setInputQueryFrom(value);
};

const handleToInputChange = (e) => {
  const { value } = e.target;
  setInputQueryTo(value);
};

const handleSearch = (e) => {
  e.preventDefault();
  const searchValueFrom = e.target.elements[0].value;
  const searchValueTo = e.target.elements[1].value;
  dispatch(setMileageFromFilter(searchValueFrom));
  dispatch(setMileageToFilter(searchValueTo))
  onFilterChange(brandFilter, priceFilter, searchValueFrom, searchValueTo);
};

  return (
    <FormWrapper>
      <Dropdown
        options={brandOptions}
        value={brandFilter}
        onChange={handleFilterInputChange}
        text="Car brand"
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary50: '#121417', 
            primary: 'transparent',
            neutral20: 'transparent', 
            neutral30: 'transparent',
            neutral50: '#121417', 
            neutral80: '#121417',
          },
        })}
      />
      <Dropdown
        options={[{ value: "Any prices", label: "Any prices" }, ...priceList]}
        value={priceFilter}
        onChange={handlePriceChange}
        text="Price/ 1hour"
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary50: '#121417',
            primary: 'transparent',
            neutral20: 'transparent', 
            neutral30: 'transparent',
            neutral50: '#121417',
            neutral80: '#121417',
          },
        })}
      />
      <form onSubmit={handleSearch}>
          <label>
            <InputFromEl
              type="text"
              placeholder="From"
              name="mileageFrom"
              value={inputQueryFrom}
              onChange={handleFromInputChange}
              required
            />
          </label>
          <label htmlFor="">
            <InputToEl
              type="text"
              placeholder="To"
              name="mileageTo"
              value={inputQueryTo}
              onChange={handleToInputChange}
              required
            />
          </label>
          <SearchButton type="submit">Search</SearchButton>
        </form>
    </FormWrapper>
  );
};

export default DropDownBar;
