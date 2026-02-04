import React from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "motion/react";

const Hero = () => (
  <main id="bgimage" className="h-full lg:h-screen">
    <section className="min-h-[750] w-full ">
      <div className="container w-full">
        {/* navbar section */}
        <Navbar />
        {/* hero section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850] w-screen">
          {/* text section */}
          {/* first section  */}
          <div className="text-orange-100 ml-14 mt-0 md:mt-24 p-4 space-y-28">
            <motion.h1
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 3,
                bounce: 0.2,
                delay: 0.5,
              }}
              className="text-7xl font-bold leading-tight ml-14 mt-24"
            >
              Blvck Tumbler
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 3,
                bounce: 0.2,
                delay: 0.5,
              }}
              className="relative"
            >
              <div className="relative z-10 space-y-4">
                <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                <p className="text-sm opacity-55 leading-loose">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.ff
                  Et, voluptatibus nostrum quam aspernatur modi, odit quo
                  tenetur doloribus id eligendi ullam pariatur dolor iste
                  dolore, doloremque exercitationem libero omnis optio mnis
                  opti.
                </p>
              </div>
              <div className="absolute top-0 -left-5 h-56 w-64 bg-gray-500/25"></div>
            </motion.div>
          </div>
          {/* hero image section */}
          {/* second section */}
          <div className="relative ">
            <motion.img
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 3,
                bounce: 0.2,
                delay: 0.5,
              }}
              src="src/images/black.png"
              alt="coffee"
              className="z-40 h-75 lg:h-175 relative"
            />
            {/* orange ring */}
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: -50 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 3,
                delay: 0.8,
              }}
              className="h-44 w-44 border-20 border-amber-400 absolute z-10 top-20 -right-20 rounded-full"
            ></motion.div>
            {/* XL text area  */}
            <div className="absolute top-0 -left-14">
              <h1 className="text-9xl scale-150 font-bold text-gray-900/40">
                Blvck Tumbler
              </h1>
            </div>
          </div>
          {/* third div section */}
          <div className="mt-36 -mt-48v">
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                duration: 3,
                bounce: 0.2,
                delay: 0.5,
              }}
              className="text-orange-100 ml-14 mt-24 md:mt-0 p-4 space-y-28"
            >
              <h1 className="hidden text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4 mt-96">
                  <h1 className="text-2xl">Blvck Tumbler</h1>
                  <p className="text-sm opacity-55 leading-loose">
                    Repudiandae aliquid excepturi eaque voluptas labore quam
                    delecnatus quae itaque! Necessitatibus dolore quae debitis
                    dolor. Beatae, maxime ipsum?
                  </p>
                </div>
                <div className="absolute top-0 -right-5 h-36 w-64 bg-[#1a1f26]/60"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Hero;
