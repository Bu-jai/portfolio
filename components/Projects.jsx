"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaCode } from "react-icons/fa6";

import Reveal from "@/components/reveal/Reveal";
import ProjectsImgReveal from "@/components/reveal/ProjectsImgReveal";
import ProjectsDescReveal from "@/components/reveal/ProjectsDescReveal";

const projectsList = [
  {
    name: "Quizzical",
    description:
      "A simple 5 question quiz app that tests your knowledge on different topics.",
    image: "/quizzical.png",
    github: "https://github.com/Bu-jai/quizzical",
  },
  {
    name: "Sketchy Password Manager",
    description:
      "A password manager that allows you to store & generate your passwords. Passwords are stored in local storage.",
    image: "/passwordmgr.png",
    github: "https://github.com/Bu-jai/PasswordManager",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="mt-48 py-20 md:pb-40">
        <Reveal>
          <h1 className="font-bold text-4xl text-center">
            Projects
            <hr className="w-12 h-1 mx-auto my-5 bg-emerald-600 border-0 rounded mb-12"></hr>
          </h1>
        </Reveal>
        <div className="flex flex-col space-y-28">
          {projectsList.map((project, id) => {
            return (
              <div key={id}>
                <div className="flex flex-col md:flex-row md:space-x-12">
                  <div className="mt-6 md:w-1/2">
                    <ProjectsImgReveal>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Link href={project.github} target="_blank">
                          <Image
                            className="rounded-xl shadow-md hover:opacity-70"
                            src={project.image}
                            alt={project.name}
                            priority={true}
                            width={1000}
                            height={1000}
                          />
                        </Link>
                      </motion.div>
                    </ProjectsImgReveal>
                  </div>
                  <div className="mt-10 md:w-1/2">
                    <ProjectsDescReveal>
                      <h1 className="text-3xl font-bold mb-6">
                        {project.name}
                      </h1>
                      <p className="text-xl text-neutral-900 dark:text-neutral-200">
                        {project.description}
                      </p>
                      <div className="mt-4">
                        <Link href={project.github} target="_blank">
                          <motion.div>
                            <FaCode className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
                          </motion.div>
                        </Link>
                      </div>
                    </ProjectsDescReveal>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
