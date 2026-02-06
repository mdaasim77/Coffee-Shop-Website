import { motion } from "motion/react";
import { RiPhoneLine, RiMap2Line } from "react-icons/ri";

export default function CompanyDetails() {
  return (
    <div className="space-y-5 text-white mt-5">
      <motion.h1
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.2, duration: 1, delay: 0.2 }}
        className="text-3xl font-bold"
      >
        CODERS CAFE
      </motion.h1>
      <motion.p
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.2, duration: 1, delay: 0.3 }}
        className="text-sm max-w-64 "
      >
        Lorem ipsum dolor sit amet consectetur, voluptatibus minima alias culpa
        quos dolorum natus perspiciatis qui.
      </motion.p>
      <div className="space-y-4 ">
        <motion.p
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.2, duration: 1, delay: 0.4 }}
          className="flex gap-3 "
        >
          <RiPhoneLine size={24} />
          +91-9876543210
        </motion.p>
        <motion.p
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.2, duration: 1, delay: 0.5 }}
          className="flex gap-3 "
        >
          <RiMap2Line size={24} /> Sector 16, Noida
        </motion.p>
      </div>
    </div>
  );
}
