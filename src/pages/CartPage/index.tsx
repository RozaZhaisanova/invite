import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import PaymentModal from "../../components/PaymentModal";
import React, { useState } from "react";
import { selectCartItems } from "../../store/slices/cartSlice";
import { Product } from "../../lib/types";
import { useSelector } from "react-redux";

const CartPage: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="cart-page">
      <h1>Корзина</h1>
      {Object.keys(cartItems).length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <div key={item.name}>
                <h3>{item.price}</h3>
                <p>Quantity: {item.quantity}</p>
                {/* Добавьте кнопки для увеличения/уменьшения количества и удаления */}
              </div>
            ))}
          </ul>
        </div>
      )}
      <button onClick={() => navigate("/")}>Back to Catalog</button>

      <Button onClick={handleOpen}>Переход к оформлению</Button>

      <PaymentModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default CartPage;
