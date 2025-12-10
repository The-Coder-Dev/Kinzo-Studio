"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function StudioHero() {
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for cursor-follow
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring follow
  const springX = useSpring(x, { stiffness: 250, damping: 25 });
  const springY = useSpring(y, { stiffness: 250, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX);
    y.set(mouseY);
  };

  return (
    <div
      className="relative w-fit h-fit text-white flex items-start"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LEFT: Big STUDIO text */}
      <div className="">
        <h1 className="text-[22vw] font-[inter] font-black cursor-default">
          STUDIO
        </h1>
      </div>

      {/* FOLLOW IMAGE */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.9,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10">
          <Image
            src="/Img.png" // <- put your image in /public
            alt="Studio preview"
            width={220}
            height={220}
            className="block"
          />
        </div>
      </motion.div>
    </div>
  );
}
