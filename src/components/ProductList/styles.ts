import { Link } from "react-router-dom";
import styled from "styled-components";
export const ProductGrid = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: repeat(3, 350px);
  gap: 30px;
  justify-content: center;
  justify-items: center;
  @media (min-width: 640px) and (max-width: 1110px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (min-width: 320px) and (max-width: 639px) {
    width: 100%;
    height: 100%;
    grid-template-columns: minmax(290px, 320px);
  }
`;
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
export const ContainerStyled = styled.main`
  max-width: 1110px;

  margin: 0 auto;
`;
export const CardStyled = styled.div`
  box-shadow: 0px 0px 20px 0px #0000001a;
  background: #ffffff;
  width: 350px;
  height: 406.81px;
  border-radius: 30px;
  @media (min-width: 640px) and (max-width: 1160px) {
    grid-template-columns: repeat(2, minmax(290px, 320px));
    grid-auto-rows: 370px;
    gap: 20px;
  }
`;
export const CatalogTitle = styled.h2`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
  text-align: left;
  color: #838383;
  padding-bottom: 8px;
  padding-top: 8px;

  @media (min-width: 640px) and (max-width: 1160px) {
    text-align: center;
  }

  @media (min-width: 320px) and (max-width: 639px) {
    text-align: center;
  }
`;
