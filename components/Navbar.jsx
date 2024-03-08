"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { TbMenu2, TbMoonFilled, TbSun, TbX } from "react-icons/tb";
import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [mode, setMode] = useState("dark");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMode(theme);
  }, [theme]);

  return [mode, setTheme];
};

const Navbar = () => {
  const [theme, setTheme] = useThemeSwitcher();
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="w-full mx-auto px-12 sm:px-24 fixed top-0 z-50 bg-white shadow dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-5 md:block">
            <Link href={"/"}>
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">Jireh Siayngco</h2>
              </div>
            </Link>
            <div className="md:hidden flex items-center">
              <motion.button
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? (
                  <TbX className="h-6 w-6" />
                ) : (
                  <TbMenu2 className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
              navbarOpen ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <motion.div
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  className="block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-400"
                  href={"/"}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  className="block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-400"
                  href={"/#about"}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  About
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  className="block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-400"
                  href={"/#projects"}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Projects
                </Link>
              </motion.div>
              {theme === "dark" ? (
                <motion.button
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setTheme("light")}
                >
                  <TbSun className="text-yellow-200 h-6 w-6" />
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setTheme("dark")}
                >
                  <TbMoonFilled className="text-slate-600 h-6 w-6" />
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
