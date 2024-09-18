import CartProduct from "../../components/CartProduct";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/slices/cartSlice";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import PaymentModal from "../../components/PaymentModal";
function CartPage() {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="body">
      <main className="main">
        <h1>Корзина</h1>
        {cartItems.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          cartItems.map((item) => (
            <CartProduct
              key={item.title}
              title={item.title}
              img={item.img}
              price={item.price}
              quantity={item.quantity}
            />
          ))
        )}
        <button onClick={() => navigate("/")}>Back to Catalog</button>

        <Button onClick={handleOpen}>Переход к оформлению</Button>

        <PaymentModal open={open} handleClose={handleClose} />
      </main>
    </div>
  );
}

export default CartPage;
