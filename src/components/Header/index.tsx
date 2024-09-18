import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled, Logo } from "./styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useCart } from "../../contexts/CartContext";
import Vector from "./assets/Vector.jpg";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/slices/cartSlice";
export const Header = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <HeaderStyled>
      <Logo to="/">QPICK</Logo>
      <Link to="/cart">
        <Badge badgeContent={Object.keys(cartItems).length} color="secondary">
          <img src="./assets/Vector.svg" alt="Корзина" />
        </Badge>
      </Link>
    </HeaderStyled>
  );
};
