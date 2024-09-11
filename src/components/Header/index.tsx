import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled, Logo } from "./styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useCart } from "../../contexts/CartContext";
export const Header = () => {
  const { cartItems } = useCart();

  return (
    <HeaderStyled>
      <Logo to="/">Audio Store</Logo>
      <Link to="/cart">
        <Badge badgeContent={Object.keys(cartItems).length} color="secondary">
          <ShoppingCartIcon color="primary" fontSize="medium" />
        </Badge>
      </Link>
    </HeaderStyled>
  );
};
