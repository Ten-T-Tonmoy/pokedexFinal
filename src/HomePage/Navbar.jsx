import React from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const Navbar = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // Important: Load the slim engine
  };

  return (
    <div className="relative -z-20 w-full h-[50vh]">
      {/* Particles Background */}
      <Particles
        init={particlesInit} // Initialize particles
        options={{
          particles: {
            number: { value: 100 },
            move: { enable: true, speed: 1 },
            size: { value: 3 },
          },
        }}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content */}
      <div className="relative -z-10 text-black bg-gray-600 z-10 flex justify-center items-center h-full text-white text-4xl">
        This is Navbar
      </div>
    </div>
  );
};

export default Navbar;
