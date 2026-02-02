import { motion } from "motion/react";

export default function App() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold text-red-500"
    >
      Framer Motion works
    </motion.h1>
  );
}
