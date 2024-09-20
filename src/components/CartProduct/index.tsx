import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../store/slices/cartSlice";
import { ICartProduct } from "../../lib/types";
import { useDispatch } from "react-redux";
import { Box, Button, CardContent } from "@mui/material";
import { ButtonStyled, Content, ImgStyled, Price, Quantity } from "./styles";
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
        <Content>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <ImgStyled src={img} alt={title} />

            <Quantity>
              <Item>
                <ButtonStyled onClick={handleDecreaseQuantity}>
                  <img src="./assets/-.svg" alt="minus" />
                </ButtonStyled>
              </Item>
              <Item>
                <p>{quantity}</p>
              </Item>
              <Item>
                <ButtonStyled onClick={handleIncreaseQuantity}>
                  <img src="./assets/+.svg" alt="plus" />
                </ButtonStyled>
              </Item>
            </Quantity>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "space-between",
              flexDirection: "row",
            }}
          >
            <Box>
              <h3>{title}</h3>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <ButtonStyled onClick={handleRemoveCard}>
                <img src="./assets/del.svg" alt="del" />
              </ButtonStyled>
              <Price>{price}</Price>
            </Box>
          </Box>
        </Content>
      </CardContent>
    </div>
  );
}

export default CartProduct;
