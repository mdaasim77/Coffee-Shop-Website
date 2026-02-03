import React from "react";

const Navbar = () => {
  return (
    <nav className="text-white absolute top-0 w-full pt-10 z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo section  */}
          <h1 className="text-2xl font-semibold">
            <span className="text-amber-400">CODERS </span>CAFE.
          </h1>
          {/* Hamberger menu section  */}
          <div>
            <img src="src/images/hamburger.png" className="h-8" alt="Hamburger Menu" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
