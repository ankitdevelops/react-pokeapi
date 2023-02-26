import React, { useState } from "react";

const Search = ({ searchPokemon }) => {
  const [searchField, setSearchField] = useState("");

  const searchNow = (e) => {
    e.preventDefault();
    if (searchField) {
      searchPokemon(searchField);
      setSearchField("");
    } else {
      alert("Empty Search Field");
    }
  };

  return (
    <div className="flex justify-center mt-10  sm:mt-40 h-full">
      <form
        onSubmit={searchNow}
        action=""
        className=" input-group w-full mx-auto text-center flex items-center justify-center"
      >
        <input
          type="text"
          placeholder="Search Your Favourite Pokemon"
          className="input input-bordered   w-full max-w-xl"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
        <button className="btn btn-square " type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Search;
