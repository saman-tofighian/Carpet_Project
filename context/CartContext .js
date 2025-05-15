// context/CartContext.js

import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // وقتی component mount شد، مقدار localStorage را بخوان
    const storedCount = parseInt(
      localStorage.getItem('CountShoppingCart') || '0'
    );
    setCount(storedCount);
  }, []);

  const addToCart = (product) => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('CountShoppingCart', newCount);
  };

  return (
    <CartContext.Provider value={{ count, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
