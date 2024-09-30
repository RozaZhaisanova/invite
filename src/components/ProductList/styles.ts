import { Link } from "react-router-dom";
import styled from "styled-components";
import { size } from "../../styles/mixins";
export const ProductGrid = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: repeat(3, 350px);
  gap: 30px;
  justify-content: center;
  justify-items: center;
  @media (min-width: 1111px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 330px);
    gap: 20px;
  }
  @media (min-width: 640px) and (max-width: 1110px) {
    grid-template-columns: repeat(2, 320px);
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
  @media (min-width: 1001px) and (max-width: 1200px) {
    max-width: 1000px;
  }
  margin: 0 auto;
  @media (min-width: 1000px) and (max-width: 1100px) {
    max-width: 960px;
  }
`;
export const CardStyled = styled.div`
  ${size(350, 406.81)}
  box-shadow: 0px 0px 20px 0px #0000001a;
  background: #ffffff;
  border-radius: 30px;
  @media (max-width: 1200px) {
      ${size(320, 376.81)}
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

  @media (max-width: 1200px) {
    text-align: center;
  }
`;
