import styled from "styled-components";

export const CartProductStyled = styled.div`
  box-shadow: 0px 0px 20px 0px #0000001a;
  background: #ffffff;

  border-radius: 30px;
  width: 633px;
  height: 218px;
`;

export const ImgStyled = styled.img`
  max-width: 146.53px;
  height: auto;
  object-fit: contain;
`;
export const Quantity = styled.div`
  width: 118.21px;
  height: 30px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  flex-direction: "row";
`;
export const ButtonStyled = styled.button`
  border: 0;
  background: transparent;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between; /* Размещаем элементы по краям */
  align-items: flex-start; /* Центрируем по вертикали */
`;

export const Content = styled.div`
  display: flex;
  align-items: center; /* Центрируем по вертикали */
  flex-grow: 1; /* Позволяем этому блоку занимать свободное пространство */
`;

export const Price = styled.h3`
  margin-left: auto; /* Сдвигаем цену вправо */
`;
