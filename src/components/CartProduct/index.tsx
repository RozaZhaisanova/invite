import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../store/slices/cartSlice";
import { ICartProduct } from "../../lib/types";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { ImgStyled } from "./styles";

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
      <ImgStyled src={img} alt={title} />

      <h3>{price}</h3>
      <p>Quantity: {quantity}</p>
      <button onClick={handleIncreaseQuantity}>+</button>
      <button onClick={handleDecreaseQuantity}>-</button>
      <button onClick={handleRemoveCard}>Удалить</button>
    </div>
  );
}

export default CartProduct;
