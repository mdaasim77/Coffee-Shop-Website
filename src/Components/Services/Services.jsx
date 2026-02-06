import React from "react";
import ServiceHeader from "./ServiceChild/ServiceHeader";
import ServiceCard from "./ServiceChild/ServiceCard";
import coffee1 from "../../images/coffee1.png";
import coffee3 from "../../images/coffee3.png";
import cupcoffee from "../../images/coffee-black-cap.png";
export default function Services() {
  const Servicecard = [
    {
      id: 1,
      img: coffee1,
      title: "Black Coffee",
      sub: "Strong and bold brewed coffee with a rich aroma and pure flavor.",
    },
    {
      id: 2,
      img: coffee3,
      title: "Cold Coffee",
      sub: "Smooth and chilled coffee blended with milk for a refreshing taste.",
    },
    {
      id: 3,
      img: cupcoffee,
      title: "Cup Coffee",
      sub: "Freshly brewed warm coffee with a comforting and smooth flavor.",
    },
  ];
  return (
    <div className="h-full w-full my-16 container mx-auto">
      {/* header section  */}
      <ServiceHeader />
      {/* card section  */}
      <ServiceCard Servicecard={Servicecard} />
    </div>
  );
}
