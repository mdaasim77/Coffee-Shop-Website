import React from "react";
import From from "./WheretoBuyChild/From";
import WorldMap from "./WheretoBuyChild/WorldMap";

export default function WhereToBuy() {
  return (
    <div className="container my-36 md:my-10 h-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
        {/* Form section */}
        <From />
        {/* World Map section */}
        <WorldMap />
      </div>
    </div>
  );
}
