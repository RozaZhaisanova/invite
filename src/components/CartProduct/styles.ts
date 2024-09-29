import styled from "styled-components";
export const CartProductStyled = styled.div`
  box-shadow: 0px 0px 20px 0px #0000001a;
  background: #ffffff;
  margin-bottom: 20px;
  border-radius: 30px;
  width: 633px;
  height: 218px;
  @media (max-width: 1000px) {
    width: 100%;
    height: 180px;
  }
  @media (min-width: 1001px) and (max-width: 1160px) {
    width: 55vw;
    height: 190px;
  }
`;

export const ImgStyled = styled.img`
  max-width: 146.53px;
  max-height: 136px;
  display: block;
  margin: 0 auto;
  @media (max-width: 1160px) {
    max-width: 120px;
    max-height: 110px;
  }
`;
export const ImgBox = styled.div`
  width: 146.53px;
  @media (max-width: 1160px) {
    width: 120px;
  }
`;
export const Quantity = styled.div`
  width: 118.21px;
  height: 30px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: 96.53px;
    height: 25px;
  }
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
  @media (max-width: 1160px) {
    width: 65px;
    height: 160px;
  }
`;
export const CartProductStart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 18px;
  @media (max-width: 1000px) {
    row-gap: 10px;
  }
`;
export const CartProductContent = styled.div`
  display: flex;
  align-items: center;
  column-gap: 23px;
  @media (max-width: 1000px) {
    column-gap: 6px;
  }
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
