import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled, Logo } from "./styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export const Header = () => (
  <HeaderStyled>
    <Logo to="/">Audio Store</Logo>
    <Link to="/cart">
      <ShoppingCartIcon />
    </Link>
  </HeaderStyled>
);
