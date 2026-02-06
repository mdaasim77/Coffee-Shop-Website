import appstore from "../../../images/play_store.png";
import playstore from "../../../images/app_store.png";
import { motion } from "motion/react";

export default function Heading() {
  return (
    <div className="lg:w-4/12 lg:h-6/12 text-center lg:mr-16 ">
      <motion.h1
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.2, delay: 0.2, duration: 1 }}
        className="text-3xl font-medium tracking-wider leading-normal"
      >
        Download the App
      </motion.h1>
      <motion.p
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.2, delay: 0.2, duration: 1 }}
        className="text-center leading-normal"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quasi
        saepe accusamus?
      </motion.p>
      {/* icons of app store  */}
      <div className="flex mt-5 justify-evenly">
        <motion.a
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.2, delay: 0.3, duration: 1 }}
          href="#"
        >
          <img src={playstore} alt="PlayStore" className="w-40" />
        </motion.a>
        <motion.a
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.2, delay: 0.3, duration: 1 }}
          href="#"
        >
          <img src={appstore} alt="PlayStore" className="w-40" />
        </motion.a>
      </div>
    </div>
  );
}
