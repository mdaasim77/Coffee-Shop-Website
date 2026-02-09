import { motion, spring } from "motion/react";
import React from "react";

export default function ServiceCard({ Servicecard }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10">
      {Servicecard.map((card, index) => {
        let initialanimation;
        let whileview;

        if (index === 0) initialanimation = { x: -200, opacity: 0 };
        if (index === 1) initialanimation = { y: 200, opacity: 0 };
        if (index === 2) initialanimation = { x: 200, opacity: 0 };
        return (
          <motion.div
            initial={initialanimation}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1, type: spring, bounce: 0.2, delay: 0.2 }}
            className="space-y-6 mx-auto  text-center"
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={card.img}
              className=" w-64 mx-auto"
            />
            <h1 className="text-2xl font-bold text-amber-400">{card.title}</h1>
            <p className="text-sm text-gray-400">{card.sub}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
