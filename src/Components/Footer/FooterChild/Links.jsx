import { motion } from "motion/react";

export default function Links() {
  return (
    <div className="mt-5 text-white space-y-5">
      <motion.h1
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1, type: "spring", bounce: 0.2 }}
        className="text-3xl font-bold"
      >
        Quick Links
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* first col  */}
        <div>
          <ul className="space-y-2">
            <motion.li
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 1,
                type: "spring",
                bounce: 0.2,
              }}
            >
              Home
            </motion.li>
            <motion.li
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 1,
                type: "spring",
                bounce: 0.2,
              }}
            >
              About
            </motion.li>
            <motion.li
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 1,
                type: "spring",
                bounce: 0.2,
              }}
            >
              Contact us
            </motion.li>
            <motion.li
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: "spring",
                bounce: 0.2,
              }}
            >
              Privacy Police
            </motion.li>
          </ul>
        </div>
        {/* second col  */}
        <div>
          <ul className="space-y-2">
            <motion.li
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 1,
                type: "spring",
                bounce: 0.2,
              }}
            >
              Home
            </motion.li>
            <motion.li
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 1,
                type: "spring",
                bounce: 0.2,
              }}
            >
              About
            </motion.li>
            <motion.li
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 1,
                type: "spring",
                bounce: 0.2,
              }}
            >
              Contact us
            </motion.li>
            <motion.li
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: "spring",
                bounce: 0.2,
              }}
            >
              Privacy Police
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
}
