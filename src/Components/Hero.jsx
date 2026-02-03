import React from "react";

const Hero = () => (
  <main id="bgimage">
    <section className="min-h-[750] w-full ">
      <div className="container">
        {/* navbar section */}
        {/* hero section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850] w-screen">
          {/* text section */}
          <div className="text-orange-100 ml-14 mt-24 md:mt-0 p-4 space-y-28">
            <h1 className="text-7xl font-bold leading-tight ml-14">
              Blvck Tumbler
            </h1>
            <div className="relative">
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
            </div>
          </div>
          {/* hero image section */}
          <div className="relative ">
            <img
              src="src/images/black.png"
              alt="coffee"
              className="z-40 h-96 md:h-[700] relative"
            />
            {/* orange ring */}
            <div className="h-44 w-44 border-20 border-amber-400 absolute z-10 top-10 -right-20 rounded-full"></div>
            {/* XL text area  */}
            <div className="absolute top-0">
              <h1 className="text-8xl scale-150 font-bold text-gray-900/50">
                Blvck Tumbler
              </h1>
            </div>
          </div>
          {/* third div section */}
          <div>4</div>
        </div>
      </div>
    </section>
  </main>
);

export default Hero;
