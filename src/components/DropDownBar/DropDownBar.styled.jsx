import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 18px;
  margin-top: 50px;
`;

export const InputToEl = styled.input`
  padding: 0;
  padding-left: 24px;
  width: 136px;
  height: 48px;
  border: none;
  background-color: rgb(247, 247, 251);
  /* padding: 14px 115px 14px 24px; */

  border-radius: 0px 14px 14px 0px;
`;

export const InputFromEl = styled.input`
  padding: 0;
  padding-left: 24px;

  width: 136px;
  height: 48px;

  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-bottom: none;
  border-left: none;
  border-top: none;
  background-color: rgb(247, 247, 251);

`;

export const SearchButton = styled.button`
  padding: 14px 44px;
  margin-left: 18px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border: none;
  border-radius: 12px;
  background-color: rgb(52, 112, 255);
  transition: all 250ms cubic-bezier(0., 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background-color: #0b44cd;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }
`;