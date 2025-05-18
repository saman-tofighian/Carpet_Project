import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);
    if (isExist) {
      toast.error('این فرش قبلاً به سبد خرید شما اضافه شده است');
      return;
    }

    setCart([...cart, product]);
    toast.success(`${product.title} به سبد خرید شما اضافه شد`);
  };

  const count = cart.length;

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, count, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
