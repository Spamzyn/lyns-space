import { createContext, useState, useEffect } from "react";
import { getWigs } from "../data/wigs"; // Import the function to get local wig data

// Create the StoreContext
export const StoreContext = createContext();

// StoreProvider component to wrap around the app
export const StoreProvider = ({ children }) => {
  // State to store all wigs
  const [wigs, setWigs] = useState([]);

  // State to store selected category
  const [category, setCategory] = useState("");

  // State to store wigs filtered by category
  const [wigsByCategory, setWigsByCategory] = useState([]);

  // State for the shopping cart
  const [cart, setCart] = useState([]);

  // State for filtered wigs based on search or filters
  const [filteredWigs, setFilteredWigs] = useState([]);

  // Load wigs from local data
  useEffect(() => {
    const loadWigs = () => {
      const allWigs = getWigs();
      setWigs(allWigs);
      setFilteredWigs(allWigs); // Initialize filtered wigs
    };

    loadWigs();
  }, []);

  // Filter wigs by selected category
  useEffect(() => {
    if (category === "") {
      setWigsByCategory(wigs);
    } else {
      const filtered = wigs.filter((wig) => wig.category === category);
      setWigsByCategory(filtered);
    }
  }, [category, wigs]);

  // Function to add a wig to the cart
  const addToCart = (wig) => {
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
  };

  // Function to remove a wig from the cart
  const removeFromCart = (wigId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== wigId)
    );
  };

  // Function to update wig quantity in the cart
  const updateCartQuantity = (wigId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === wigId ? { ...item, quantity } : item
      )
    );
  };

  // Calculate total price
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Function to handle search
  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredWigs(wigs);
    } else {
      const filtered = wigs.filter((wig) =>
        wig.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredWigs(filtered);
    }
  };

  // Function to handle filters (e.g., price range, material)
  const handleFilters = (filters) => {
    let filtered = wigs;

    if (filters.category) {
      filtered = filtered.filter(
        (wig) => wig.category === filters.category
      );
    }

    if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
      filtered = filtered.filter(
        (wig) =>
          wig.price >= filters.minPrice && wig.price <= filters.maxPrice
      );
    }

    if (filters.material) {
      filtered = filtered.filter(
        (wig) => wig.material === filters.material
      );
    }

    setFilteredWigs(filtered);
  };

  // Context value to be provided to consuming components
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
