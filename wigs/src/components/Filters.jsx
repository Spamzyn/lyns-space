import React from 'react';
import { useStore } from '../context/StoreContext';

export const Filters = () => {
  const { categories, materials, filters, setFilters } = useStore();

  return (
    <div className="space-y-4">
      <select
        value={filters.category}
        onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
        className="w-full p-2 border rounded"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        value={filters.material}
        onChange={(e) => setFilters(prev => ({ ...prev, material: e.target.value }))}
        className="w-full p-2 border rounded"
      >
        <option value="">All Materials</option>
        {materials.map(material => (
          <option key={material} value={material}>
            {material}
          </option>
        ))}
      </select>

      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Min Price"
          value={filters.minPrice || ''}
          onChange={(e) => setFilters(prev => ({ ...prev, minPrice: e.target.value ? Number(e.target.value) : undefined }))}
          className="w-1/2 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice || ''}
          onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value ? Number(e.target.value) : undefined }))}
          className="w-1/2 p-2 border rounded"
        />
      </div>
    </div>
  );
};
