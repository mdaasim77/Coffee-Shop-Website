import { motion } from "motion/react";
import React from "react";

export default function From() {
  return (
    <div className="p-5">
      <motion.h1
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.2, delay: 0.2, duration: 1 }}
        className="text-3xl font-bold"
      >
        Buy Our Product from anywhere
      </motion.h1>

      <div className="flex items-center gap-4 my-2.5">
        <motion.input
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.2,
            delay: 0.3,
            duration: 1,
          }}
          type="text"
          placeholder="Name"
          className="w-full lg:w-5/12 p-1 border border-gray-300 rounded-md"
        />
        <motion.input
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.2,
            delay: 0.3,
            duration: 1,
          }}
          type="Email"
          placeholder="Email"
          className="w-full lg:w-7/12 p-1 border border-gray-300 rounded-md "
        />
      </div>
      <div className="flex items-center gap-4 my-5">
        <motion.input
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.2,
            delay: 0.4,
            duration: 1,
          }}
          type="text"
          placeholder="Country"
          className="w-full lg:w-7/12 p-1 border border-gray-300 rounded-md"
        />
        <motion.input
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.2,
            delay: 0.4,
            duration: 1,
          }}
          type="text"
          placeholder="Zip-code"
          className="w-full lg:w-5/12 p-1 border border-gray-300 rounded-md"
        />
      </div>
      <motion.button
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          bounce: 0.2,
          delay: 0.5,
          duration: 1,
        }}
        className="bg-amber-400 px-auto py-1.5 rounded-md w-full text-white hover:bg-amber-400/80"
      >
        Order Now
      </motion.button>
    </div>
  );
}
