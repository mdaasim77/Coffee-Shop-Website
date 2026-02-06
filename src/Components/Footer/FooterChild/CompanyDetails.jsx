import React from "react";
import { RiPhoneLine, RiMap2Line } from "react-icons/ri";

export default function CompanyDetails() {
  return (
    <div className="space-y-5 text-white mt-5">
      <h1 className=" text-3xl font-bold">CODERS CAFE</h1>
      <p className="text-sm max-w-64 ">
        Lorem ipsum dolor sit amet consectetur, voluptatibus minima alias culpa
        quos dolorum natus perspiciatis qui.
      </p>
      <div className="space-y-4 ">
        <p className="flex gap-3 ">
          <RiPhoneLine size={24} />
          +91-9876543210
        </p>
        <p className="flex gap-3 ">
          <RiMap2Line size={24} /> Sector 16, Noida
        </p>
      </div>
    </div>
  );
}
