import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Topbar />
      <Navbar />
      <SearchBar />
    </div>
  );
};

export default Home;
