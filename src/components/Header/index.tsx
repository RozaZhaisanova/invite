import { Link } from "react-router-dom";
import { Counter, HeaderEnd, HeaderStyled, Logo } from "./styles";
import { Badge, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/slices/cartSlice";

export const Header = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <HeaderStyled>
      <Logo to="/">QPICK</Logo>
      <HeaderEnd>
        <Link to="/favourites">
          <Counter color="secondary" badgeContent="2">
            <img src="./assets/favour.png" alt="Избранное" />
          </Counter>
        </Link>

        <Link to="/cart">
          <Badge badgeContent={Object.keys(cartItems).length} color="secondary">
            <img src="./assets/Vector.svg" alt="Корзина" />
          </Badge>
        </Link>
      </HeaderEnd>
    </HeaderStyled>
  );
};
