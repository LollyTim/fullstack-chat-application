import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className=" input input-bordered rounded-full bg-zinc-300 placeholder:text-gray-500 text-gray-900"
      />
      <button
        type="submit"
        className="btn btn-circle bg-zinc-300 text-[#66AAE2] hover:bg-[#66AAE2] hover:text-white border-transparent"
      >
        <FaSearch className="w-6 outline-none h-6" />
      </button>
    </form>
  );
};

export default SearchInput;
