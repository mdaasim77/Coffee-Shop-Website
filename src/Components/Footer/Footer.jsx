import React from "react";
import CompanyDetails from "./FooterChild/CompanyDetails";
import Links from "./FooterChild/Links";
import SocialLinks from "./FooterChild/SocialLinks";

export default function Footer() {
  return (
    <div className=" w-full h-96 bg-amber-400">
      <div className="container w-full h-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
          {/* company details */}
          <CompanyDetails />
          {/* company Links */}
          <Links />
          {/* social links */}
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
