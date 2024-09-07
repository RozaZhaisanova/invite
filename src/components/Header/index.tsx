import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled, Logo } from "./styles";

export const Header = () => (
  <HeaderStyled>
    <Logo to="/">Audio Store</Logo>
    <Link to="/cart">Cart</Link>
  </HeaderStyled>
);
