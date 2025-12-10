"use client";

import StudioHero from "./HeadText";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, motionValue, useMotionValue, useSpring } from "framer-motion";

const Home = () => {

  return (
    <section className="w-full min-h-screen bg-primary">
      <div className="mx-auto max-w-[1500px] w-full h-screen">
        <div className="w-full h-full flex flex-col justify-center px-15">
          <div className=" h-[400px] w-full flex items-center justify-center">
            <StudioHero />
          </div>

          <div className="flex flex-col items-center justify-between px-10  text-white">
            <div className="flex items-center justify-between gap-10 font-[inter]">
              <div className="flex flex-col gap-1 items-start">
                <h1 className="text-4xl font-bold">99+</h1>
                <p className="text-secondary">Completed Projects</p>
              </div>

              <div className="flex flex-col gap-1 items-start">
                <h1 className="text-4xl font-bold text-orange">5+</h1>
                <p className="text-secondary">Years of Experience</p>
              </div>

              <div className="flex flex-col gap-1 items-start">
                <h1 className="text-4xl font-bold">100%</h1>
                <p className="text-secondary">Happy Clients</p>
              </div>
            </div>
            <div className="text-sm font-[inter] w-100 text-secondary">
              <p>
                We craft memorable brands, design and develop stunning websites,
                optimize your presence through strategic SEO, and amplify your
                impact with results-driven digital marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
