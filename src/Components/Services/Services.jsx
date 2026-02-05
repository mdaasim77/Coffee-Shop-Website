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
      sub: "lorem ipsum dolor sit amet consectetu adeipiscing elit.",
    },
    {
      id: 2,
      img: coffee3,
      title: "Hot Coffee",
      sub: "lamet consectetur adipisicing elit. Quod ducimus.",
    },
    {
      id: 3,
      img: cupcoffee,
      title: "Cup Coffee",
      sub: "veritatis tempora eveniet vero, cupiditate consequatur enim voluptas!.",
    },
  ];
  return (
    <div className="h-screen w-full my-16">
      {/* header section  */}
      <ServiceHeader />
      {/* card section  */}
      <ServiceCard Servicecard={Servicecard}/>
    </div>
  );
}
