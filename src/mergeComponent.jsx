import React from "react";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import WhereToBuy from "./Components/WhereToBuy/WhereToBuy";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

const mergeComponent = () => {
  return (
    <div className="">
      {/* <Navbar/> */}
      {/* <Hero /> */}
      <Services />
      <WhereToBuy />
      {/* <Banner /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default mergeComponent;
