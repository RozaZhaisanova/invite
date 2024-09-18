import { Card, Container } from "@mui/material";
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
export const ContainerStyled = styled.div`
  width: 1110px;
  height: 888.65px;
  top: 88px;
  left: 182px;
  gap: 0px;
  opacity: 0px;

  margin: 0 auto;
`;
export const CardStyled = styled.div`
  box-shadow: 0px 0px 20px 0px #0000001a;
  background: #ffffff;
  width: 350px;
  height: 406.81px;
  top: 1053.19px;
  left: 562px;
  gap: 0px;
  border-radius: 30px;
  opacity: 0px;
`;
