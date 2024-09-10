import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../lib/types";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartItems: Record<number, CartItem>;
  totalPrice: number;
  addToCart: (product: Product) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Record<number, CartItem>>({});

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      if (prev[product.id]) {
        return {
          ...prev,
          [product.id]: {
            ...prev[product.id],
            quantity: prev[product.id].quantity + 1,
          },
        };
      } else {
        return {
          ...prev,
          [product.id]: { product, quantity: 1 },
        };
      }
    });
  };

  const increaseQuantity = (id: number) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        quantity: prev[id].quantity + 1,
      },
    }));
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prev) => {
      if (prev[id].quantity === 1) {
        const { [id]: _, ...rest } = prev; // Удаляем товар, если его количество 1
        return rest;
      }
      return {
        ...prev,
        [id]: {
          ...prev[id],
          quantity: prev[id].quantity - 1,
        },
      };
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => {
      const { [id]: _, ...rest } = prev; // Удаляем товар
      return rest;
    });
  };

  const totalPrice = Object.values(cartItems).reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
