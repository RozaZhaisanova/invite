import CartProduct from "../../components/CartProduct";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/slices/cartSlice";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import PaymentModal from "../../components/PaymentModal";
import { ContainerStyled } from "../../components/ProductList/styles";
import { CartProductStyled } from "../../components/CartProduct/styles";
import {
  CartTotal,
  ColumnStyled,
  PaymentButtonStyled,
  TotalStyled,
} from "./styles";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      <main className="main">
        <h1>Корзина</h1>
        <Box
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {cartItems.length === 0 ? (
              <p>Корзина пуста</p>
            ) : (
              cartItems.map((item) => (
                <div
                  style={{
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
          </Box>

          <Box
            sx={{
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "20px",
              }}
            >
              {totalPrice !== 0 ? (
                <TotalStyled>
                  <Box
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "row",
                      width: "311.22px",
                      height: "55px",
                      paddingLeft: "20px",
                    }}
                  >
                    <CartTotal>{t("total")}</CartTotal>
                    <CartTotal> ₽ {totalPrice}</CartTotal>
                  </Box>
                  <PaymentButtonStyled onClick={handleOpen}>
                    Перейти к оформлению
                  </PaymentButtonStyled>
                </TotalStyled>
              ) : (
                <span>emptyCart</span>
              )}
            </div>
          </Box>
        </Box>

        <PaymentModal open={open} handleClose={handleClose} />
      </main>
    </ContainerStyled>
  );
}

export default CartPage;
