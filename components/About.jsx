import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="font-bold text-4xl text-center">
          About me
          <hr className="w-12 h-1 mx-auto my-5 bg-emerald-600 border-0 rounded"></hr>
        </h1>
        <div className="text-lg text-neutral-900 dark:text-neutral-200 md:text-xl mt-5">
          <p className="leading-8">
            Hello, my name is Jireh Siayngco. I'm a avid & quick learner,
            detail-oriented, a critical thinker, and keen on exploring new
            technologies.
          </p>
          <br />
          <p className="leading-8">
            I have always been fascinated with technologies and have had a knack
            with computers ever since I was a kid. When I was studying at
            college, I had the opportunity to be a software developer intern for
            Global Talent Accelerator where I learned React. I worked on
            business projects during my time that allowed my skills to develop.
          </p>
          <br />
          <p className="leading-8">
            Whenever I am not coding or learning new technologies, I have other
            hobbies that keeps me busy. These include reading books, playing
            videogames, and hanging out with friends.
          </p>
          <br />
          <p className="leading-8">
            I graduated from Southern Alberta Institute of Technology with a
            diploma in Information Technology and I majored in Software
            Development. I am looking forward for what the future holds and I am
            always open for new opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
