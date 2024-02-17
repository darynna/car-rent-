import styled from "styled-components";

export const CarsItem = styled.li`
  width: 274px;
  height: 426px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ContentWrapper = styled.div`
position: relative;
`

export const CarsImg = styled.img`
    margin-bottom: 14px;
    border-radius: 16px;
    object-fit: cover;
    width: 274px;
    height: 268px;
    background-color: grey;
`

export const TitleWrapper = styled.div`
    display: flex;
    margin-bottom: 8px;
    justify-content: space-between;
`

export const CarsTitle = styled.h3`
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
`

export const CarPrice = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  `

export const Description = styled.div`
    margin-bottom: auto;
    display: block;
    color: #12141780;
    font-size: 12px;
    line-height: 1.5;
  `
export const CarBtn = styled.button`
    width: 274px;
    height: 44px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 12px;
    color: #fff;
    border: none;
    background-color: #3470ff;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: #0b44cd;
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }

    &:active {
      box-shadow: none;
    }
`

export const FavBtn = styled.button`
    position: absolute;
    top: 14px;
    right: 14px;
    border: none;
    background-color: transparent;


`

// export const icon-heart-btn {
//     position: absolute;
//     top: 14px;
//     right: 14px;

//     border: none;
//     background-color: transparent;

//     & svg {
//       path {
//         transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
//         stroke: rgba(255, 255, 255, 0.8);
//       }
//       width: 18px;
//       height: 18px;
//     }

//     &.isFavorite {
//       & svg {
//         path {
//           stroke: #3470ff;
//           fill: #3470ff;
//         }
//       }
//     }
//   }
// `;