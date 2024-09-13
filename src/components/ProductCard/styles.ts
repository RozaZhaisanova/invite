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
