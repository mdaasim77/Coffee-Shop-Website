import { motion } from "motion/react";
import map from "../../../images/world-map.png";

export default function WorldMap() {
  return (
    <div className=" col-span-1 md:col-span-2 flex flex-col justify-center items-center">
      <motion.img
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src={map}
        className="w-full max-w-3xl mx-auto h-9/12"
        alt="Map"
      />
    </div>
  );
}
