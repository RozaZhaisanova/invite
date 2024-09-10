import { useNavigate } from "react-router-dom";
import Cart from "../../components/Cart";
import React from "react";
import { useCart } from "../../contexts/CartContext";

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="cart-page">
      <h1>Корзина</h1>
      {Object.keys(cartItems).length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          <ul>
            {Object.values(cartItems).map((item) => (
              <li key={item.product.id}>
                {item.product.title} - {item.product.price}₽ x {item.quantity}
                <button onClick={() => increaseQuantity(item.product.id)}>
                  +
                </button>
                <button onClick={() => decreaseQuantity(item.product.id)}>
                  -
                </button>
                <button onClick={() => removeFromCart(item.product.id)}>
                  Удалить
                </button>
              </li>
            ))}
          </ul>
          <h2>Итого: {totalPrice}₽</h2>
        </div>
      )}
      <button onClick={() => navigate("/")}>Back to Catalog</button>
    </div>
  );
};

export default CartPage;
