import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  padding: 20px 20px;
  margin: 14px 0;
  background-color: white;
`

export const HeaderList = styled.ul`
display: flex;
justify-content: center;
list-style-type: none;
gap: 24px;
}
`

export const HeaderLink = styled(NavLink)`
color: black;
border: 1px solid #3470ff;
padding: 14px 44px;
font-size: 18px;
text-decoration: none;
border-radius: 12px;
transition: all 250ms cubic-bezier(0.3, 0, 0.2, 1);;

&.active {
  border: 1px solid white;
  background-color: #3470ff;
  color: white;
  border-radius: 10px;
}
`