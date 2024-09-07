import { Link } from "react-router-dom";
import styled from "styled-components";
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
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
