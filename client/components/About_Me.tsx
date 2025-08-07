import { Code, Database, Github, Globe, Linkedin, Palette } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

const About_Me = () => {
  const about = [
    { icon: Code, years: 15, type: "Projects Completed", id: 1 },
    { icon: Globe, years: 5, type: "Years Experience", id: 2 },
    { icon: Palette, years: 12, type: "Technologies", id: 3 },
    { icon: Database, years: 10, type: "Happy Clients", id: 4 },
  ];

  return (
    <div className=" max-w-7xl w-full mx-auto mt-32 md:pt-20 px-4 pb-4">
      <h1 className=" text-center font-bold text-gray-800 text-4xl mb-4">
        About Me
      </h1>
      <div className=" md:flex justify-center gap-4 items-start mt-6 w-full mx-auto">
        {/* Description */}
        <div className=" w-full mb-4 md:w-xl font-medium text-sm md:text-lg text-gray-800">
          <p
            style={{
              lineHeight: "2rem",
            }}
          >
            Hi, I'm <span className=" text-2xl font-bold">Dominion Ikonwa</span>{" "}
            — a passionate full-stack developer with a sharp edge in modern web
            technologies. With over 5 years of experience in full-stack
            development, I specialize in building clean, scalable, user-focused
            and real-time web applications using the MERN stack, Next.js and
            lots more. Whether it's developing fast, SEO-friendly frontends or
            designing scalable backends, I love turning ideas into polished,
            production-ready solutions.
          </p>
          <p
            className=" mt-3"
            style={{
              lineHeight: "2rem",
            }}
          >
            I'm passionate about writing clean and maintainable code, creating
            seamless user experience, and continuously learning to stay current
            with the latest technologies.
          </p>
          <p className=" mt-3">
            Let’s build the web — one powerful app at a time.
          </p>
          <div className=" mt-6 flex justify-start gap-3">
            <Link
              target="_blank"
              href={"https://github.com/Estra-Dev"}
              className=" px-3 py-1 border font-medium text-sm text-gray-800 rounded-md flex items-center gap-3 shadow-sm"
            >
              <Github className=" w-4 h-4" />
              <p>GitHub</p>
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/dominion-ikonwa-54348a207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              className=" px-3 py-1 border font-medium text-sm text-gray-800 rounded-md flex items-center gap-3 shadow-sm"
            >
              <Linkedin className=" w-4 h-4" />
              <p>LinkedIn</p>
            </Link>
          </div>
        </div>

        {/* Projects, Experience etc.. */}
        <div className=" grid grid-cols-2 gap-6">
          {about.map((item) => {
            const IconComponents = item.icon;
            return (
              <div
                key={item.id}
                className=" flex justify-center items-center flex-col gap-1.5 w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-md shadow-md border text-gray-900"
              >
                <IconComponents />
                <p className=" font-bold text-2xl">{item.years}+</p>
                <p className=" text-gray-500 text-sm">{item.type}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About_Me;
