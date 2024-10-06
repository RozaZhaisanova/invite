import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../store/slices/cartSlice";
import { ICartProduct } from "../../lib/types";
import { useDispatch } from "react-redux";
import { CardContent } from "@mui/material";
import {
  ButtonStyled,
  CartProductBox,
  CartProductContent,
  CartProductMiddle,
  CartProductMiddlePrice,
  CartProductQuantity,
  CartProductStart,
  CartProductTitle,
  Content,
  ImgBox,
  ImgStyled,
  Price,
  Quantity,
} from "./styles";
import { Item } from "../ProductCard";

function CartProduct({ title, img, price, quantity }: ICartProduct) {
  const dispatch = useDispatch();
  const total = price * quantity;
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
    <CardContent>
      <Content>
        <CartProductContent>
          <CartProductStart>
            <ImgBox>
              <ImgStyled src={img} alt={title} />
            </ImgBox>
            <Quantity>
              <Item>
                <ButtonStyled onClick={handleDecreaseQuantity}>
                  <img src="./assets/-.svg" alt="minus" />
                </ButtonStyled>
              </Item>
              <Item>
                <CartProductQuantity>{quantity}</CartProductQuantity>
              </Item>
              <Item>
                <ButtonStyled onClick={handleIncreaseQuantity}>
                  <img src="./assets/+.svg" alt="plus" />
                </ButtonStyled>
              </Item>
            </Quantity>
          </CartProductStart>

          <CartProductMiddle>
            <CartProductTitle>{title}</CartProductTitle>
            <CartProductMiddlePrice>{price} ₽</CartProductMiddlePrice>
          </CartProductMiddle>
        </CartProductContent>
        <CartProductBox>
          <ButtonStyled onClick={handleRemoveCard}>
            <img src="./assets/del.svg" alt="del" />
          </ButtonStyled>
          <Price>{total} ₽</Price>
        </CartProductBox>
      </Content>
    </CardContent>
  );
}

export default CartProduct;
