"use client"
import Link from "next/link";
import {FiMenu, FiX} from 'react-icons/fi'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { title: "Home", url: "/", id: 1 },
  { title: "About", url: "/", id: 2 },
  { title: "Work", url: "/", id: 3 },
  { title: "Faq", url: "/", id: 4 },
];
const Navbar = () => {
   const [IsOpen, setIsOpen] = useState(false);
  return (
    <header className="flex items-center justify-center w-full text-white absolute top-0 left-0">
      <nav className="mx-auto max-w-[1500px] w-full flex items-center justify-between py-5 px-5">
        {/* Logo */}
        <Link href="/" className="uppercase text-4xl">
          Kinzo
        </Link>
        {/* Desktop Menu */}
        <div className=" items-center justify-center gap-6 hidden md:flex">
          <div className="flex gap-6 ">
            {links.map((item) => {
              return (
                <div key={item.id} className="group overflow-hidden relative">
                  <Link
                    className="font-[inter] font-medium uppercase text-sm block transition-transform duration-300 group-hover:-translate-y-4"
                    href={item.url}
                  >
                    {item.title}
                  </Link>

                  <Link
                    className="absolute left-0 top-16 block transition-transform duration-300 group-hover:-translate-y-16 font-[inter] font-medium uppercase text-sm "
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </div>

          <Link href="/" className="group flex gap-6 font-[inter] font-medium uppercase text-sm bg-orange px-4 py-2 rounded-lg ">
            <div className="overflow-hidden relative">
              <p className="block transition-transform duration-300 group-hover:-translate-y-5">Get in Touch</p>
              <p className="absolute left-0 top-16 block transition-transform duration-300 group-hover:-translate-y-16">Get in Touch</p>
            </div>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!IsOpen)}
          className="md:hidden text-3xl cursor-pointer z-100 bg-orange p-1 rounded-lg"
        >
          {IsOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

       {/* Flyout (mobile) */}
      <AnimatePresence>
        {IsOpen && (
          <motion.div
            className="fixed inset-0 md:hidden z-40"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {/* Dark overlay */}
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsOpen(false)}
            />

            {/* Right panel */}
            <div className="absolute right-0 top-0 h-full w-72 bg-black border-l border-white/10 px-6 py-10 flex flex-col gap-8">
              <div className="flex justify-between items-center mb-4">
                <span className="uppercase tracking-widest text-2xl -mt-3 text-neutral-400">
                  Menu
                </span>
              </div>

              <div className="flex flex-col gap-6">
                {links.map((item) => {
              return (
                <div key={item.id} className="group overflow-hidden relative text-5xl font-black hover:text-orange transition-colors duration-300">
                  <Link
                    className="font-[inter]  uppercase block transition-transform duration-300 group-hover:-translate-y-14"
                    href={item.url}
                  >
                    {item.title}
                  </Link>

                  <Link
                    className="absolute left-0 top-16 block transition-transform duration-300 group-hover:-translate-y-16 font-[inter] uppercase"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
