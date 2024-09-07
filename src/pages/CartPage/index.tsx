import React from "react";

import Cart from "../../components/Cart";

const CartPage = () => (
  <>
    <Cart />
    {/* Добавьте кнопку возврата */}
    <button onClick={() => window.history.back()}>Back to Catalog</button>
  </>
);

export default CartPage;
