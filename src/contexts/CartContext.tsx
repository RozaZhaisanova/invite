import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartState {
  itemsCount: number;
  totalPrice: number;
}

interface CartContextType {
  cart: CartState;
  addToCart: (price: number) => void;
  removeFromCart: (price: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartState>({ itemsCount: 0, totalPrice: 0 });

  const addToCart = (price: number) => {
    setCart((prev) => ({
      itemsCount: prev.itemsCount + 1,
      totalPrice: prev.totalPrice + price,
    }));
  };

  const removeFromCart = (price: number) => {
    setCart((prev) => ({
      itemsCount: Math.max(prev.itemsCount - 1, 0),
      totalPrice: Math.max(prev.totalPrice - price, 0),
    }));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
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
