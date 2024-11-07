import React, { createContext, useContext } from 'react';
import { useWigs } from '../hooks/useWigs';
import { useCart } from '../hooks/useCart';

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const wigsData = useWigs();
  const cartData = useCart();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    minPrice: undefined,
    maxPrice: undefined,
    material: ""
  });

  const filteredWigs = useMemo(() => {
    let filtered = wigsData.wigs;

    if (searchTerm) {
      filtered = filtered.filter(wig =>
        wig.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter(wig => wig.category === filters.category);
    }

    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(wig => wig.price >= filters.minPrice);
    }

    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(wig => wig.price <= filters.maxPrice);
    }

    if (filters.material) {
      filtered = filtered.filter(wig => wig.material === filters.material);
    }

    return filtered;
  }, [wigsData.wigs, searchTerm, filters]);

  const value = {
    ...wigsData,
    ...cartData,
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    filteredWigs
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

