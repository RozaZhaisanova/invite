import React from "react";
import styled from "styled-components";
import { useCart } from "../../contexts/CartContext";
const CartContainer = styled.div`
  padding: 1rem;
`;
const Cart = () => {
  return (
    <CartContainer>
      <h1>Your Cart</h1>

      <p>Cart is empty</p>
    </CartContainer>
  );
};

export default Cart;
