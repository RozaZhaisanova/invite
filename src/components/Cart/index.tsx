import React from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  padding: 1rem;
`;
const Cart = () => (
  <CartContainer>
    <h1>Your Cart</h1>
    {/* Здесь можно добавить логику отображения товаров в корзине */}
    <p>Cart is empty</p>
  </CartContainer>
);

export default Cart;
