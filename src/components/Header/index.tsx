import { Link } from "react-router-dom";
import { Counter, HeaderEnd, HeaderStyled, Logo } from "./styles";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/slices/cartSlice";

export const Header = () => {
  const cartItems = useSelector(selectCartItems);
  const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
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
          <Counter badgeContent={total} color="secondary">
            <img src="./assets/Vector.svg" alt="Корзина" />
          </Counter>
        </Link>
      </HeaderEnd>
    </HeaderStyled>
  );
};
