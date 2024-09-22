import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f8f8f8;
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;
export const TypographyOldPrice = styled(Typography)`
  text-decoration: line-through;
  max-width: 70px;
  max-height: 10px;
  text-align: center;
`;
export const DivStyled = styled.div`
  width: 310.04px;
  height: 74px;
  top: 438.35px;
  left: 203.96px;
  gap: 0px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;
export const ProductCardTitleAndPrice = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
export const ProductCardPriceBox = styled.div`
  padding-right: 5px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
export const ProductCardFooter = styled.footer`
  min-height: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ProductCardPrice = styled.h3`
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.72px;
  text-align: left;
  margin-bottom: 0;
  color: #ffa542;
`;
export const ProductCardOldPrice = styled.h3`
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  line-height: 15.85px;
  text-align: left;
  margin: 0;
  padding: 0;
  color: #ffce7f;
  text-decoration: line-through;
`;
export const ProductCardBuyTitle = styled.h3`
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.72px;
  text-align: left;
  color: #000000;
`;
export const ProductCardInCartTitle = styled.h3`
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.72px;
  text-align: left;
  color: #838383;
`;
export const ProductCardBuy = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
export const ProductCardTitle = styled.h3`
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.72px;
  text-align: left;
  color: #1c1c27;
  padding-left: 5px;
`;
export const ProductRate = styled(ProductCardTitle)`
  color: #838383;
`;
export const ProductCardStar = styled.div`
  width: 60.33px;
  height: 21.97px;
  padding-left: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
