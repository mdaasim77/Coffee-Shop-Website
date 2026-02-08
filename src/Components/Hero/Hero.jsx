import { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";

export default function Hero() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <main className="bgimage ">
      <section className="relative  h-screen  w-full">
        <div className="container w-full">
          {/* navbar section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full h-full">
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
                <div className="absolute top-0 -left-5 h-44 w-64 bg-gray-500/25"></div>
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
                className="z-40 h-72 md:h-87.5 relative"
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
                className="h-44 w-44 border-20 border-amber-400 absolute z-10 top-20 right-0 translate-x-1/2 rounded-full"
              ></motion.div>
              {/* XL text area  */}
              <div className="absolute top-0 -left-14">
                <h1 className="text-9xl scale-150 font-bold text-gray-900/40">
                  Blvck Tumbler
                </h1>
              </div>
            </div>
            {/* third div section */}
            <div className="lg:mt-40 ">
              <motion.div
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
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
                  <div className="absolute top-0 -right-3 h-36 w-64 bg-[#1a1f26]/60"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* sidebar menu section  */}
        {sidebar && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ ease: "easeInOut", type: "tween", duration: 0.3 }}
            className="absolute top-0 right-0 w-36 bg-amber-400/80 z-10 h-full md:h-screen"
          >
            <div className="h-full w-full flex flex-col justify-center items-center gap-5">
              <img
                src="src/images/facebook.png"
                className="h-8 cursor-pointer border border-white rounded-full p-1"
                alt="Facebook"
              />
              <div className="bg-white w-0.5 h-14"></div>
              <img
                src="src/images/insta.png"
                className="h-8 cursor-pointer border border-white rounded-full p-1"
                alt="Instagram"
              />
              <div className="bg-white w-0.5 h-14"></div>
              <img
                src="src/images/x.png"
                className="h-8 cursor-pointer border border-white rounded-full p-1"
                alt="Twitter"
              />
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}

// import React from "react";

// export default function Hero() {
//   return (
//     <div className="  bgimage text-white">
//       <div className="h-full w-full ">
//         <h1>Heading</h1>
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
//           tenetur enim corrupti? Laborum adipisci, vel asperiores atque
//           explicabo obcaecati reprehenderit perferendis doloremque recusandae,
//           in minus enim maiores expedita ullam repellendus magni nam. Hic
//           voluptates aspernatur mollitia ipsam, dolorem, quaerat exercitationem
//           laboriosam delectus ullam minus perspiciatis inventore eveniet illum
//           reprehenderit. Voluptas hic necessitatibus non dicta eum ea quo
//           assumenda fugiat saepe quasi ipsam esse aliquid maxime quaerat ipsa
//           laudantium, veniam voluptatibus earum. Distinctio blanditiis tempore
//           assumenda provident, eos mollitia quibusdam totam quia adipisci
//           quaerat maxime! Sequi itaque fugit, velit consequatur reiciendis
//           voluptates quo quia corporis vero suscipit adipisci tenetur modi
//           laboriosam?
//         </p>
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
//           tenetur enim corrupti? Laborum adipisci, vel asperiores atque
//           explicabo obcaecati reprehenderit perferendis doloremque recusandae,
//           in minus enim maiores expedita ullam repellendus magni nam. Hic
//           voluptates aspernatur mollitia ipsam, dolorem, quaerat exercitationem
//           laboriosam delectus ullam minus perspiciatis inventore eveniet illum
//           reprehenderit. Voluptas hic necessitatibus non dicta eum ea quo
//           assumenda fugiat saepe quasi ipsam esse aliquid maxime quaerat ipsa
//           laudantium, veniam voluptatibus earum. Distinctio blanditiis tempore
//           assumenda provident, eos mollitia quibusdam totam quia adipisci
//           quaerat maxime! Sequi itaque fugit, velit consequatur reiciendis
//           voluptates quo quia corporis vero suscipit adipisci tenetur modi
//           laboriosam?
//         </p>
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
//           tenetur enim corrupti? Laborum adipisci, vel asperiores atque
//           explicabo obcaecati reprehenderit perferendis doloremque recusandae,
//           in minus enim maiores expedita ullam repellendus magni nam. Hic
//           voluptates aspernatur mollitia ipsam, dolorem, quaerat exercitationem
//           laboriosam delectus ullam minus perspiciatis inventore eveniet illum
//           reprehenderit. Voluptas hic necessitatibus non dicta eum ea quo
//           assumenda fugiat saepe quasi ipsam esse aliquid maxime quaerat ipsa
//           laudantium, veniam voluptatibus earum. Distinctio blanditiis tempore
//           assumenda provident, eos mollitia quibusdam totam quia adipisci
//           quaerat maxime! Sequi itaque fugit, velit consequatur reiciendis
//           voluptates quo quia corporis vero suscipit adipisci tenetur modi
//           laboriosam?
//         </p>
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
//           tenetur enim corrupti? Laborum adipisci, vel asperiores atque
//           explicabo obcaecati reprehenderit perferendis doloremque recusandae,
//           in minus enim maiores expedita ullam repellendus magni nam. Hic
//           voluptates aspernatur mollitia ipsam, dolorem, quaerat exercitationem
//           laboriosam delectus ullam minus perspiciatis inventore eveniet illum
//           reprehenderit. Voluptas hic necessitatibus non dicta eum ea quo
//           assumenda fugiat saepe quasi ipsam esse aliquid maxime quaerat ipsa
//           laudantium, veniam voluptatibus earum. Distinctio blanditiis tempore
//           assumenda provident, eos mollitia quibusdam totam quia adipisci
//           quaerat maxime! Sequi itaque fugit, velit consequatur reiciendis
//           voluptates quo quia corporis vero suscipit adipisci tenetur modi
//           laboriosam?
//         </p>
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
//           tenetur enim corrupti? Laborum adipisci, vel asperiores atque
//           explicabo obcaecati reprehenderit perferendis doloremque recusandae,
//           in minus enim maiores expedita ullam repellendus magni nam. Hic
//           voluptates aspernatur mollitia ipsam, dolorem, quaerat exercitationem
//           laboriosam delectus ullam minus perspiciatis inventore eveniet illum
//           reprehenderit. Voluptas hic necessitatibus non dicta eum ea quo
//           assumenda fugiat saepe quasi ipsam esse aliquid maxime quaerat ipsa
//           laudantium, veniam voluptatibus earum. Distinctio blanditiis tempore
//           assumenda provident, eos mollitia quibusdam totam quia adipisci
//           quaerat maxime! Sequi itaque fugit, velit consequatur reiciendis
//           voluptates quo quia corporis vero suscipit adipisci tenetur modi
//           laboriosam?
//         </p>
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
//           tenetur enim corrupti? Laborum adipisci, vel asperiores atque
//           explicabo obcaecati reprehenderit perferendis doloremque recusandae,
//           in minus enim maiores expedita ullam repellendus magni nam. Hic
//           voluptates aspernatur mollitia ipsam, dolorem, quaerat exercitationem
//           laboriosam delectus ullam minus perspiciatis inventore eveniet illum
//           reprehenderit. Voluptas hic necessitatibus non dicta eum ea quo
//           assumenda fugiat saepe quasi ipsam esse aliquid maxime quaerat ipsa
//           laudantium, veniam voluptatibus earum. Distinctio blanditiis tempore
//           assumenda provident, eos mollitia quibusdam totam quia adipisci
//           quaerat maxime! Sequi itaque fugit, velit consequatur reiciendis
//           voluptates quo quia corporis vero suscipit adipisci tenetur modi
//           laboriosam?
//         </p>
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
//           tenetur enim corrupti? Laborum adipisci, vel asperiores atque
//           explicabo obcaecati reprehenderit perferendis doloremque recusandae,
//           in minus enim maiores expedita ullam repellendus magni nam. Hic
//           voluptates aspernatur mollitia ipsam, dolorem, quaerat exercitationem
//           laboriosam delectus ullam minus perspiciatis inventore eveniet illum
//           reprehenderit. Voluptas hic necessitatibus non dicta eum ea quo
//           assumenda fugiat saepe quasi ipsam esse aliquid maxime quaerat ipsa
//           laudantium, veniam voluptatibus earum. Distinctio blanditiis tempore
//           assumenda provident, eos mollitia quibusdam totam quia adipisci
//           quaerat maxime! Sequi itaque fugit, velit consequatur reiciendis
//           voluptates quo quia corporis vero suscipit adipisci tenetur modi
//           laboriosam?
//         </p>

//       </div>
//     </div>
//   );
// }
