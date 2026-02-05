import { motion } from "motion/react";

export default function ServiceHeader() {
  return (
    <div className="w-full text-center ">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.2, delay: 0.2 }}
        className="w-full text-3xl font-bold text-gray-400"
      >
        Fresh and <span className="text-amber-400 ">Tasty</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.2, delay: 0.3 }}
        className="md:px-auto px-2  md:mx-32 mx-2 text-black/60 mt-5"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ducimus
        beatae, labore eius illo neque necessitatibus veritatis tempora sint
        eveniet vero, cupiditate consequatur enim voluptas!
      </motion.p>
      
    </div>
  );
}
