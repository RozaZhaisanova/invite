import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled, Logo } from "./styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useCart } from "../../contexts/CartContext";
export const Header = () => {
  const { cart } = useCart();

  return (
    <HeaderStyled>
      <Logo to="/">Audio Store</Logo>
      <Link to="/cart">
        <Badge badgeContent={cart.itemsCount} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </HeaderStyled>
  );
};
