import { motion } from "motion/react";

export default function WorldMap() {
  return (
    <div className=" col-span-1 md:col-span-2 flex flex-col justify-center items-center">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        src="src/images/world-map.png"
        className="w-full max-w-3xl mx-auto"
        alt=""
      />
    </div>
  );
}
