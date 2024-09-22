import styled from "styled-components";
export const CartProductStyled = styled.div`
  box-shadow: 0px 0px 20px 0px #0000001a;
  background: #ffffff;
  margin-bottom: 20px;
  border-radius: 30px;
  width: 633px;
  height: 218px;
`;

export const ImgStyled = styled.img`
  max-width: 146.53px;
  max-height: 136px;
  object-fit: contain;
`;
export const Quantity = styled.div`
  width: 118.21px;
  height: 30px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
export const ButtonStyled = styled.button`
  border: 0;
  background: transparent;
  &:hover {
    opacity: 0.5;
  }
  cursor: pointer;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: space-between;
  justify-content: space-between;
`;
export const CartProductMiddle = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`;
export const Price = styled.h3`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 600;
  line-height: 18.29px;
  text-align: right;
`;
export const CartProductBox = styled.div`
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  width: 100.81px;
`;
export const CartProductStart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 18px;
`;
export const CartProductContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 23px;
`;
export const CartProductTitle = styled.span`
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 500;
  line-height: 20.72px;
  text-align: left;

  color: #1c1c27;
`;
export const CartProductMiddlePrice = styled.h3`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 600;
  line-height: 18.29px;
  text-align: left;
  color: #aaaaaa;
`;
export const CartProductQuantity = styled.h3`
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.72px;
  text-align: left;
`;
