import React from "react";
import styled from "styled-components";
import { useCart } from "../../contexts/CartContext";
const CartContainer = styled.div`
  padding: 1rem;
`;
const Cart = () => {
  const { cart } = useCart();

  return (
    <CartContainer>
      <h1>Your Cart</h1>
      itemsCount={cart.itemsCount} totalPrice={cart.totalPrice}
      <p>Cart is empty</p>
    </CartContainer>
  );
};

export default Cart;
