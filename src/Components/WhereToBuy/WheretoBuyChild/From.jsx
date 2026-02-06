import React from "react";

export default function From() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Buy Our Product from anywhere</h1>

      <div className="flex items-center gap-4 my-2.5">
        <input
          type="text"
          placeholder="Name"
          className="w-full lg:w-5/12 p-1 border border-gray-300 rounded-md"
        />
        <input
          type="Email"
          placeholder="Email"
          className="w-full lg:w-7/12 p-1 border border-gray-300 rounded-md "
        />
      </div>
      <div className="flex items-center gap-4 my-5">
        <input
          type="text"
          placeholder="Country"
          className="w-full lg:w-7/12 p-1 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Zip-code"
          className="w-full lg:w-5/12 p-1 border border-gray-300 rounded-md"
        />
      </div>
      <button className="bg-amber-400 px-auto py-1.5 rounded-md w-full text-white hover:bg-amber-400/80">
        Order Now
      </button>
    </div>
  );
}
