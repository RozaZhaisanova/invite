import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 1fr)
  ); // Автоматическое заполнение с минимальной шириной
  gap: 16px;
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
export const ContainerStyled = styled(Container)`
  border: 1px solid #ddd;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
