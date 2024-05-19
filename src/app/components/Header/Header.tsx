"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { ThemeToggle } from "@/components/themeProvider/theme-toggle"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Here logic of when menu is open the scrollbar willbe disable
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [menuOpen]);
  // Toggle menu open/close state
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  // console.log("MenuOpen is :", menuOpen);

  return (
    <>
    <section className="py-4 bg-black sm:py-6" x-data="{expanded: false}">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <Link href="/" className="flex">
                <img className="w-auto h-9" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg" alt="" />
              </Link>
            </div>
            <div className="flex md:hidden">
              <button onClick={toggleMenu} type="button" className="text-white"> 
                <FaBars className="text-2xl" />
              </button>
            </div>

            {/* Desktop or Big Devices Navbar */}
            <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
              <Link href="/products" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </Link>
              <Link href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Features </Link>
              <Link href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Pricing </Link>
              <Link href="/signup" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Signup</Link>
              <Link href="/login" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Login</Link>
            </nav>
            <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50" />
              <Link href="#" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"><ThemeToggle></ThemeToggle></Link>
            </div>
          </div>

          {/* Mobile Devices Navbar */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="h-screen">
                <div className="flex md:hidden flex-col items-center pt-8 pb-4 space-y-6">
                  <Link href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products</Link>
                  <Link href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Features</Link>
                  <Link href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Pricing</Link>
                  <Link href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support</Link>
                  <div className="relative inline-flex items-center justify-center group">
                    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50" />
                    <Link href="#" className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Start free trial </Link>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
          </AnimatePresence>
          
        </div>
    </section>
    </>
  );
};

export default Header;
