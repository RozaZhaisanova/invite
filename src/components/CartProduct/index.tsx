import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../store/slices/cartSlice";
import { ICartProduct } from "../../lib/types";
import { useDispatch } from "react-redux";
import { Box, CardContent } from "@mui/material";
import { ImgStyled, Quantity } from "./styles";
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Quantity>
            <Item>
              <button onClick={handleDecreaseQuantity}>
                <img src="./assets/-.svg" alt="minus" />
              </button>
            </Item>
            <Item>
              <p> {quantity}</p>
            </Item>
            <Item>
              <button onClick={handleIncreaseQuantity}>
                <img src="./assets/+.svg" alt="plus" />
              </button>
            </Item>
          </Quantity>
        </Box>
        <button onClick={handleRemoveCard}>Удалить</button> <h3>{price}</h3>
      </CardContent>
    </div>
  );
}

export default CartProduct;
