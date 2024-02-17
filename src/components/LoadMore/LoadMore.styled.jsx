import styled from "styled-components";

export const StyledLoadMoreBtn = styled.button`
  display: block;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  text-decoration-line: underline;
  color: #3470ff;
  transition: all 250ms cubic-bezier(0.3, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #0b44cd;
  }
  &.hidden {
    display: none;
  }
`;