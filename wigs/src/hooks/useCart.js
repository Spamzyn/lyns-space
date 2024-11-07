import { useState, useCallback } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((wig) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === wig.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === wig.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...wig, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((wigId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== wigId));
  }, []);

  const updateCartQuantity = useCallback((wigId, quantity) => {
    if (quantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === wigId ? { ...item, quantity } : item
      )
    );
  }, []);

  const total = useMemo(() => 
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  return {
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    total
  };
};
