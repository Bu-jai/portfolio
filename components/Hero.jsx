"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center py-48 md:py-64 md:flex-row md:space-x-4 md:text-left ">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full shadow-2xl"
            src="/selfportrait.jpeg"
            alt="Picture of me"
            height={300}
            width={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-5 md:text-7xl md:mt-0">
            Hi, <span className="text-emerald-600">I&#39;m Jireh</span>
          </h1>
          <p className="text-lg text-neutral-900 dark:text-neutral-200 mt-4 mb-4 md:text-2xl">
            I&#39;m an aspiring software engineer. Passionate about learning new
            technologies that makes an impact in the world.
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
            <Link
              href={"https://www.linkedin.com/in/jireh-siayngco"}
              target="_blank"
            >
              <FaLinkedin className="h-8 w-8 cursor-pointer text-blue-700 dark:text-blue-400" />
            </Link>
            <Link href={"https://github.com/Bu-jai"} target="_blank">
              <FaGithub className="h-8 w-8 cursor-pointer text-slate-800 dark:text-slate-100" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
