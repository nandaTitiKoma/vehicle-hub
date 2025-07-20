// components/SearchForm.jsx
import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); 
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-10">
      <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Cari model mobil (contoh: civic, jazz...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 text-gray-900 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 hover:bg-indigo-500 transition"
        >
          Cari
        </button>
      </div>
    </form>
  );
}
