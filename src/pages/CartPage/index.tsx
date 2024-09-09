import React from "react";
import { useNavigate } from "react-router-dom";

import Cart from "../../components/Cart";

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Cart />
      <button onClick={() => navigate("/")}>Back to Catalog</button>
    </>
  );
};

export default CartPage;
