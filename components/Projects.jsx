import React from "react";

import Link from "next/link";
import Image from "next/image";

import { FaCode } from "react-icons/fa6";

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
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="font-bold text-4xl text-center">
          Projects
          <hr className="w-12 h-1 mx-auto my-5 bg-emerald-600 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-28">
          {projectsList.map((project, id) => {
            return (
              <div key={id}>
                <div className="flex flex-col md:flex-row md:space-x-12">
                  <div className="mt-6 md:w-1/2">
                    <Image
                      className="rounded-xl shadow-md hover:opacity-50"
                      src={project.image}
                      alt={project.name}
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="mt-10 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl text-neutral-900 dark:text-neutral-200">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <Link href={project.github} target="_blank">
                        <FaCode className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
                      </Link>
                    </div>
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
