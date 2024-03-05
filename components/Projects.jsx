import React from "react";

import Link from "next/link";
import Image from "next/image";

const projectsList = [
  {
    name: "Quizzical",
    description:
      "A simple 5 question quiz app that tests your knowledge on different topics.",
    image: "/quizzical.png",
    github: "https://github.com/Bu-jai/quizzical",
  },
  {
    name: "Not Sketchy Password Manager",
    description:
      "A password manager that allows you to store & generate your passwords. Passwords are stored in local storage",
    image: "/passwordmgr.png",
    github: "https://github.com/Bu-jai/PasswordManager",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="font-bold text-4xl text-center">
        Projects
        <hr className="w-12 h-1 mx-auto my-5 bg-emerald-600 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projectsList.map((project, id) => {
          return (
            <div key={id}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/2">
                  <Image
                    className="rounded-xl shadow-xl hover:opacity-70"
                    src={project.image}
                    alt={project.name}
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
