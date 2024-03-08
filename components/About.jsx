"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import AboutReveal from "@/components/reveal/Reveal";

const About = () => {
  return (
    <section id="about">
      <div className="mt-24 py-20 md:pb-28">
        <AboutReveal>
          <h1 className="font-bold text-4xl text-center">
            About me
            <hr className="w-12 h-1 mx-auto my-5 bg-emerald-600 border-0 rounded mb-12"></hr>
          </h1>
        </AboutReveal>
        <div className="text-lg text-neutral-900 dark:text-neutral-200 md:text-xl mt-5">
          <AboutReveal>
            <p className="leading-9 pb-3">
              Hello, my name is Jireh Siayngco. I'm a avid & quick learner,
              detail-oriented, a critical thinker, and keen on exploring new
              technologies.
            </p>
          </AboutReveal>
          <br />
          <AboutReveal>
            <p className="leading-9 pb-3">
              I have always been fascinated with technologies and have had a
              knack with computers ever since I was a kid. When I was studying
              at college, I had the opportunity to be a software developer
              intern for Global Talent Accelerator where I learned React. I
              worked on business projects during my time that allowed my skills
              to develop.
            </p>
          </AboutReveal>
          <br />
          <AboutReveal>
            <p className="leading-9 pb-3">
              Whenever I am not coding or learning new technologies, I have
              other hobbies that keeps me busy. These include reading books,
              playing video games, and hanging out with friends.
            </p>
          </AboutReveal>
          <br />
          <AboutReveal>
            <p className="leading-9">
              I graduated from Southern Alberta Institute of Technology with a
              diploma in Information Technology and I majored in Software
              Development. I am looking forward for what the future holds and I
              am always open for new opportunities.
            </p>
          </AboutReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
