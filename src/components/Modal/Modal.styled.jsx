import styled from "styled-components";

export const StyledModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  z-index: 10;
`


export const StyledModalBox = styled.div`
position: relative;
  box-sizing: border-box;
  width: 541px;
  max-height: 752px;
  padding: 40px;
  background-color: white;
  border-radius: 24px

`
export const StyledModalBtn = styled.button`
position: absolute;
top: 16px;
right: 16px;
padding: 0px;
background-color: transparent;
border: 0px;
`

export const Styledimg = styled.img`
margin-bottom: 14px;
border-radius: 14px;
object-fit: cover;
width: 461px;
height: 248px;
background-color: grey;
`


export const Span = styled.span`
color: rgb(52, 112, 255);
font-weight: 600
`

export const Title = styled.h3`
margin: 0;
margin-bottom: 8px;
font-size: 18px;
font-weight: 500;
`

export const Box = styled.div`
margin-bottom: 24px;
font-size: 12px;
font-weight: 400;
color: rgba(18, 20, 23, 0.5);
`

export const BoxChild = styled.div`
margin-bottom: 4px
`

export const Description = styled.p`
margin-bottom: 24px;
font-size: 14px;
`
export const AccessoriesTitle = styled.p`
margin-bottom: 8px;
font-size: 14px;
font-weight: 500;
color: rgb(18, 20, 23);
`
export const ConditionsItems = styled.div`
font-family: Montserrat;
font-size: 12px;

.conditionsItemsDifferent {
  font-family: Manrope;
font-size: 12px;
}
`

export const ConditionsItemsSpan = styled.p`
display: inline-block;
padding: 7px 14px;
background-color: rgb(249, 249, 249);
border-radius: 35px
`
export const ConditionsItemsBox = styled.div`
display: flex;
margin-bottom: 24px;
flex-wrap: wrap;
gap: 8px;
`

export const Button = styled.button`
padding: 12px 50px;
background-color: rgb(52, 112, 255);
color: white;
border: 0px;
border-radius: 12px;
font-family: Manrope;
font-size: 14px;
font-weight: 600;

&:hover {
  background-color: #0b44cd;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
}

&:active {
  box-shadow: none;
}
`