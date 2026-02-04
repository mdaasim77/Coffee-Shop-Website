import React from "react";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <nav className="text-white absolute top-0 w-full pt-10 z-20">
      <div className="container w-full">
        <div className="flex justify-between items-center w-screen">
          {/* Logo section  */}
          <h1 className="text-2xl font-semibold mx-10">
            <span className="text-amber-400">CODERS </span>CAFE.
          </h1>
          {/* Hamberger menu section  */}
          <div className="mx-10 cursor-pointer">
            <img src="src/images/hamburger.png" className="h-8" alt="Hamburger Menu" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
