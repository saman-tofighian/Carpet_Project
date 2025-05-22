import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

// Create Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage or empty array
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
      toast.error('خطایی در ذخیره سبد خرید رخ داد');
    }
  }, [cart]);

  // Add a carpet to the cart
  const addToCart = (product) => {
    if (!product?.id || !product?.title || !product?.price) {
      toast.error('اطلاعات فرش نامعتبر است');
      return;
    }

    const isExist = cart.find((item) => item.id === product.id);
    if (isExist) {
      toast.error(`فرش ${product.title} قبلاً به سبد خرید اضافه شده است`);
      return;
    }

    const newItem = {
      ...product,
      quantity: 1,
      status: 'pending', // Add default status for carpet orders
      material: product.material || 'نامشخص', // Carpet-specific attribute
      size: product.size || 'نامشخص', // Carpet-specific attribute
    };

    setCart((prev) => [...prev, newItem]);
    toast.success(`فرش ${product.title} به سبد خرید اضافه شد`);
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

  // Remove item from cart
  const removeFromCart = (id) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return;

    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.success(`فرش ${item.title} از سبد خرید حذف شد`);
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
    toast.success('سبد خرید خالی شد');
  };

  // Calculate total price
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  // Calculate total item count
  const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  // Provide context values
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        total,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for accessing cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
