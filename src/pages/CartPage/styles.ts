import styled from "styled-components";

export const CartPageWrapper = styled.div`
  justify-content: space-between;

  flex-direction: row;
  display: flex;

  align-items: flex-start;
  @media (max-width: 1000px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardStyled = styled.div`
  box-shadow: 0px 0px 20px 0px #0000001a;
  background: #ffffff;
  width: 350px;
  height: 406.81px;
  border-radius: 30px;
`;
export const ColumnStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
export const TotalStyled = styled.div`
  box-shadow: 0px 0px 20px 0px #0000001a;
  background: #ffffff;
  width: 348.98px;
  height: 120px;
  border-radius: 30px;
`;
export const PaymentButtonStyled = styled.button`
  box-shadow: 0px 0px 20px 0px #00000040;
  background: #101010;
  width: 348.98px;
  height: 65px;
  border-radius: 20px;
  color: #ffffff;
  &:hover {
    opacity: 0.7;
  }
  cursor: pointer;
`;
export const CartTotal = styled.span`
  color: #000000;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 600;
  line-height: 18.29px;
  text-align: left;
`;
export const PaymentButtonTitle = styled.span`
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.72px;
  text-align: center;
`;
export const CartTitle = styled.h2`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
  text-align: left;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;
