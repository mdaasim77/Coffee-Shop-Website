import React from "react";
import { motion } from "motion/react";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <nav className="text-white absolute top-0 w-full pt-10 z-20">
      <div className="container w-full">
        <div className="flex justify-between items-center w-screen">
          {/* Logo section  */}
          <h1 className="text-2xl font-semibold mx-10 flex">
            <motion.img
              initial={{ x: 650, y: 400, scale: 8 }}
              animate={{ x: 0, y: 0, scale: 1 }}
              transition={{ duration: 2, bounce: 0.4, delay: 0.5 }}
              src="src/images/coffee_logo.png"
              alt="Coffee Logo"
              className="h-8 -my-0.5 mx-5"
            />
            <span className="text-amber-400">CODERS </span>CAFE.
          </h1>
          {/* Hamberger menu section  */}
          <div
            onClick={() => setSidebar(!sidebar)}
            className="mx-10 cursor-pointer"
          >
            <img
              src="src/images/hamburger.png"
              className="h-8"
              alt="Hamburger Menu"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
