import React from 'react';
import Select from 'react-select';
import {StyledText, StyledBox} from './Dropdown.styled'
import { firstSelectStyles } from './Select.styled';

const Dropdown = ({ options, onChange, value, text }) => {
  return (
    <StyledBox>
    <StyledText>{text}</StyledText>
    <Select
          styles={firstSelectStyles}
          value={value}
          options={options}
          onChange={onChange}
          placeholder={value}/>
    </StyledBox>

  );
};

export default Dropdown;