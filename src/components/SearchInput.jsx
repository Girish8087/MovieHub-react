import React, { useState } from "react";
import { useSearchParams } from "react-router";

const SearchInput = ({search,handleInput}) => {

  return (
    <div className="w-full max-w-md mx-auto mb-10">
      <input
        type="text"
        value={search}
        onChange={handleInput}
        placeholder="Search movies..."
        className="
          w-full 
          px-5 py-3 
          rounded-full 
          bg-zinc-900 
          text-white 
          placeholder-gray-400 
          focus:outline-none 
          focus:ring-2 
          focus:ring-red-500 
          focus:border-red-500 
          transition 
          shadow-lg
        "
      />
    </div>
  );
};

export default SearchInput;