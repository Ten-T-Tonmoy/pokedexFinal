import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <>
      <div
        className=" text-gray-500 text-[1.8rem]
       bg-gray-200
      "
      >
        Pokédex
      </div>
      <div
        className="flex flex-wrap bg-red-600/80 sm:flex-col
         items-center justify-center lg:flex-row  "
      >
        <div className="flex max-w-[80vw] lg:max-w-[40vw] flex-col justify-center">
          <h1
            className="
        text-white text-[1.6rem] mt-2 px-5
        "
          >
            Name or Number
          </h1>
          <div className="flex gap-6 m-5">
            <input
              type="text"
              className="p-4 
        h-10 rounded-md sm:w-[55vw] "
            />
            <FaSearch
              className="bg-orange-400
           text-white h-10 w-10
        sm:min-w-14 rounded-md p-[10px]"
            />
          </div>

          <h1
            className="
        text-white text-[.9rem] px-5  mt-2 mb-4
        "
          >
            Use the Advanced Search to explore Pokemon by type,weakness,Ability
            and more!
          </h1>
        </div>

        <h1
          className="bg-green-600/95 text-white
      rounded-md p-4 max-w-[75vw] mb-5 lg:max-w-[40vw] "
        >
          Search for a Pokemon by name or using its National Pokedex number.
        </h1>
      </div>
    </>
  );
};

export default SearchBar;
