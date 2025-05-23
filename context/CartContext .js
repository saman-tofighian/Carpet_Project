import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

// Create Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  // Save cart to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
      toast.error('خطایی در ذخیره سبد خرید رخ داد');
    }
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
    if (!product?.id || !product?.title || !product?.price) {
      toast.error('اطلاعات محصول نامعتبر است');
      return;
    }

    const isExist = cart.find((item) => item.id === product.id);
    if (isExist) {
      toast.error(`محصول ${product.title} قبلاً اضافه شده است`);
      return;
    }

    const newItem = {
      ...product,
      quantity: 1,
      status: 'pending',
      material: product.material || 'نامشخص',
      size: product.size || 'نامشخص',
    };

    setCart((prev) => [...prev, newItem]);
    toast.success(`محصول ${product.title} به سبد خرید اضافه شد`);
  };

  // Increase item quantity
  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  // Decrease item quantity
  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && (item.quantity || 1) > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeFromCart = (id) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return;

    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.success(`محصول ${item.title} حذف شد`);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    toast.success('سبد خرید خالی شد');
  };

  // Total price
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  // Total items
  const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  // Aliases (for naming consistency)
  const incrementItem = increaseQuantity;
  const decrementItem = decreaseQuantity;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        incrementItem,
        decrementItem,
        total,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart باید درون CartProvider استفاده شود');
  }
  return context;
};
