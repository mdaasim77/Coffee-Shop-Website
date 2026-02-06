import React from "react";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import WhereToBuy from "./Components/WhereToBuy/WhereToBuy";
import Banner from "./Components/Banner/Banner";

const mergeComponent = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <Banner />
    </div>
  );
};

export default mergeComponent;
