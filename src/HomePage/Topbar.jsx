import React from "react";
import bulb from "../assets/bulb.png";
import char from "../assets/char.png";
import ash from "../assets/ash.png";
import pokeball from "../assets/pokeball.png";
import pokemonTitle from "../assets/pokemonTitle.png";

const Topbar = () => {
  return (
    <div className="flex grid-cols-4 gap-2 mx-auto">
      <div className="h-14 w-[20vw] ">
        <img src={pokemonTitle} className="h-full" alt="" />
      </div>
      <img src={ash} alt="" className="h-14" />
    </div>
  );
};

export default Topbar;
