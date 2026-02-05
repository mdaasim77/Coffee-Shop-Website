import React from "react";
import From from "./WheretoBuyChild/From";
import WorldMap from "./WheretoBuyChild/WorldMap";

export default function WhereToBuy() {
  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
        {/* Form section */}
        <From />
        {/* World Map section */}
        <WorldMap />
      </div>
    </div>
  );
}
