import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;

  @media screen and (min-width: 375px) {
    width: 375px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    width: 744px;
  }

  @media screen and (min-width: 1214px) {
    width: 1214px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;