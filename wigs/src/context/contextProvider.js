import React, { createContext, useState, useEffect, useCallback } from "react";
import { getWigs } from "../data/wigs";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [wigs, setWigs] = useState([]);
  const [category, setCategory] = useState("");
  const [wigsByCategory, setWigsByCategory] = useState([]);
  const [cart, setCart] = useState([]);
  const [filteredWigs, setFilteredWigs] = useState([]);

  useEffect(() => {
    const loadWigs = () => {
      const allWigs = getWigs();
      setWigs(allWigs);
      setFilteredWigs(allWigs);
    };
    loadWigs();
  }, []);

  useEffect(() => {
    if (category === "") {
      setWigsByCategory(wigs);
    } else {
      const filtered = wigs.filter((wig) => wig.category === category);
      setWigsByCategory(filtered);
    }
  }, [category, wigs]);

  const addToCart = useCallback((wig) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === wig.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === wig.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...wig, quantity: 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback((wigId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== wigId));
  }, []);

  const updateCartQuantity = useCallback((wigId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === wigId ? { ...item, quantity } : item
      )
    );
  }, []);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSearch = useCallback((searchTerm) => {
    if (searchTerm === "") {
      setFilteredWigs(wigs);
    } else {
      const filtered = wigs.filter((wig) =>
        wig.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredWigs(filtered);
    }
  }, [wigs]);

  const handleFilters = useCallback((filters) => {
    let filtered = wigs;
    if (filters.category) {
      filtered = filtered.filter((wig) => wig.category === filters.category);
    }
    if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
      filtered = filtered.filter(
        (wig) => wig.price >= filters.minPrice && wig.price <= filters.maxPrice
      );
    }
    if (filters.material) {
      filtered = filtered.filter((wig) => wig.material === filters.material);
    }
    setFilteredWigs(filtered);
  }, [wigs]);

  const contextValue = {
    wigs,
    setWigs,
    category,
    setCategory,
    wigsByCategory,
    setWigsByCategory,
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    total,
    filteredWigs,
    handleSearch,
    handleFilters,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
