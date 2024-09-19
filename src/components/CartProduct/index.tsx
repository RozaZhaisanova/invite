import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../store/slices/cartSlice";
import { ICartProduct } from "../../lib/types";
import { useDispatch } from "react-redux";
import { Box, Button, CardContent } from "@mui/material";
import { ButtonStyled, ImgStyled, Quantity } from "./styles";
import { Item } from "../ProductCard";

function CartProduct({ title, img, price, quantity }: ICartProduct) {
  const dispatch = useDispatch();

  const handleRemoveCard = () => {
    dispatch(removeItem(title));
  };
  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(title));
  };
  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(title));
  };
  return (
    <div>
      <CardContent>
        <ImgStyled src={img} alt={title} />
        <Quantity>
          <Item>
            <ButtonStyled onClick={handleDecreaseQuantity}>
              <img src="./assets/-.svg" alt="minus" />
            </ButtonStyled>
          </Item>
          <Item>
            <p> {quantity}</p>
          </Item>
          <Item>
            <ButtonStyled onClick={handleIncreaseQuantity}>
              <img src="./assets/+.svg" alt="plus" />
            </ButtonStyled>
          </Item>
        </Quantity>
        <ButtonStyled onClick={handleRemoveCard}>
          <img src="./assets/del.svg" alt="del" />
        </ButtonStyled>
        <h3>{price}</h3>
      </CardContent>
    </div>
  );
}

export default CartProduct;
