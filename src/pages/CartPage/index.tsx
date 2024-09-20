import CartProduct from "../../components/CartProduct";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/slices/cartSlice";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import PaymentModal from "../../components/PaymentModal";
import { ContainerStyled } from "../../components/ProductList/styles";
import { CartProductStyled } from "../../components/CartProduct/styles";
import { ColumnStyled, DivStyled, TotalStyled } from "./styles";
function CartPage() {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <ContainerStyled>
      <main className="main">
        <h1>Корзина</h1>
        <DivStyled>
          {cartItems.length === 0 ? (
            <p>Корзина пуста</p>
          ) : (
            cartItems.map((item) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "20px",
                }}
              >
                <CartProductStyled>
                  <CartProduct
                    key={item.title}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    quantity={item.quantity}
                  />
                </CartProductStyled>
              </div>
            ))
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            {totalPrice !== 0 ? (
              <TotalStyled>
                ₽ {totalPrice}
                <Button onClick={handleOpen}>Переход к оформлению</Button>
              </TotalStyled>
            ) : (
              <span>emptyCart</span>
            )}
          </div>
          <ColumnStyled>ff</ColumnStyled>
          <ColumnStyled>ff</ColumnStyled>
        </DivStyled>
        {totalPrice !== 0 ? (
          <TotalStyled>₽ {totalPrice}</TotalStyled>
        ) : (
          <span>emptyCart</span>
        )}

        <PaymentModal open={open} handleClose={handleClose} />
      </main>
    </ContainerStyled>
  );
}

export default CartPage;
