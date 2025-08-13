import React from "react";
import {
  SiClerk,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMapbox,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const frontend = [
    { name: "HTML", icon: SiHtml5, color: "#e34f26" },
    { name: "CSS", icon: SiCss3, color: "#1572b6" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Next.Js", icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
  ];

  const backend = [
    { name: "Node.Js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.Js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
  ];

  const tools = [
    { name: "Git", icon: SiGit, color: "#f05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "MapBox", icon: SiMapbox, color: "#4264fb" },
    { name: "Clerk", icon: SiClerk, color: "#3b49df" },
    { name: "Stripe", icon: SiStripe, color: "#635bff" },
  ];
  return (
    <div className=" max-w-6xl w-full mx-auto p-4">
      <h1 className=" font-bold text-4xl text-gray-800 dark:text-gray-100 text-center">
        My Skills
      </h1>

      <div className=" ">
        {/* frontend */}
        <div className=" mt-4">
          <h1 className=" font-bold text-2xl text-gray-700 dark:text-gray-100">
            Frontend
          </h1>
          <div className=" grid grid-cols-3 md:grid-cols-7 gap-5 justify-center items-center mt-3">
            {frontend.map((item, index) => {
              const IconComponents = item.icon;

              return (
                <div
                  className=" py-2 px-4 rounded-md border bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-100 flex flex-col justify-center items-center gap-2"
                  key={index}
                >
                  <IconComponents
                    className=" w-10 h-10"
                    style={{ color: item.color }}
                  />
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* backend */}
        <div className=" mt-6">
          <h1 className=" font-bold text-2xl text-gray-700 dark:text-gray-100">
            Backend
          </h1>
          <div className=" grid grid-cols-3 md:grid-cols-7 gap-5 justify-center items-center mt-3">
            {backend.map((item, index) => {
              const IconComponents = item.icon;

              return (
                <div
                  className=" py-2 px-4 rounded-md border bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-100 flex flex-col justify-center items-center gap-2"
                  key={index}
                >
                  <IconComponents
                    className=" w-10 h-10"
                    style={{ color: item.color }}
                  />
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Tools */}
        <div className=" mt-6">
          <h1 className=" font-bold text-2xl text-gray-700 dark:text-gray-100">
            Tools
          </h1>
          <div className=" grid grid-cols-3 md:grid-cols-7 gap-5 justify-center items-center mt-3">
            {tools.map((item, index) => {
              const IconComponents = item.icon;

              return (
                <div
                  className=" py-2 px-4 rounded-md border bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-100 flex flex-col justify-center items-center gap-2"
                  key={index}
                >
                  <IconComponents
                    className=" w-10 h-10"
                    style={{ color: item.color }}
                  />
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
