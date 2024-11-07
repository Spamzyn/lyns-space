import React from 'react';
import { useStore } from '../context/StoreContext';

export const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useStore();

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search wigs..."
        className="w-full p-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <svg
        className="w-6 h-6 absolute left-2 top-2.5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};
