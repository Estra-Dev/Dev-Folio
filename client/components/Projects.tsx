import { Github, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      name: "WellnessHub",
      image: "/dashboard.png",
      gitLink: "https://github.com/Estra-Dev/wellnesshub.git",
      webLink: "https://wellnesshub-5gzg.vercel.app/",
      description:
        "An appointment booking system for health and wellness service",

      stack: ["TypeScript", "Next.Js", "Tailwind", "Shad cn"],
      solution: "Enable Users to book without maaking phone calls",
    },
    {
      name: "Speedy",
      image: "/van.jpg",
      gitLink: "https://github.com/Estra-Dev/speedy.git",
      webLink: "https://speedy-omega.vercel.app/",
      description:
        "Taxi Booking system that make your travel easier by choosing the car of your choice, with awesome map layouts, payment integration, login system.",
      stack: [
        "TypeScript",
        "Next.Js",
        "Clerk",
        "MapBox",
        "Tailwind",
        "Shad cn",
        "Stripe",
      ],
      solution: "Choose your comfort car based on distance",
    },
    {
      name: "QuickPlanna",
      image: "/qkpln2.png",
      gitLink: "https://github.com/Estra-Dev/income_planner.git",
      webLink: "https://quick-planna.onrender.com",
      description:
        "An income planning web app/tool to simplify how income earners plan properly for better decision. ",

      stack: [
        "JavaScript",
        "React.Js",
        "MongoDB",
        "Express.Js",
        "Node.Js",
        "Tailwind",
      ],
      solution: "Helped users keep track of their income and also plan it",
    },
  ];

  return (
    <div className=" max-w-6xl mx-auto mt-6 px-2 bg-gray-100 p-2">
      <h1 className=" text-center text-4xl text-gray-800 font-bold">
        Featured Projects
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 my-10 gap-5 w-full">
        {projects.map((item, index) => (
          <div
            key={index}
            className=" py-2 rounded-md shadow-md border max-w-xl w-full bg-white"
          >
            {/* Pr Image */}
            <div className=" w-full">
              <Image
                src={item?.image}
                alt="Project image"
                height={200}
                width={200}
                className=" object-cover w-full"
              />
            </div>
            {/* Pr name & link */}
            <div className=" flex justify-between my-4 px-3 border-b-2 py-2">
              <p className=" text-gray-800 font-medium">{item.name}</p>
              <span className=" flex item-center gap-2">
                <Link
                  target="_blank"
                  href={item.gitLink}
                  className=" hover:bg-gray-800 hover:text-white border rounded-md"
                >
                  <Github className=" p-1 " size={"25px"} />
                </Link>
                <Link
                  target="_blank"
                  href={item.webLink}
                  className=" hover:bg-gray-800 hover:text-white border rounded-md"
                >
                  <Link2 className=" p-1 " size={"25px"} />
                </Link>
              </span>
            </div>
            {/* description */}
            <div className=" w-full px-3 pb-2 text-gray-500 font-medium text-sm">
              <p
                style={{
                  lineHeight: "1.5rem",
                }}
              >
                {item.description}
              </p>
            </div>
            <div className=" w-full px-3 pb-2 text-gray-500 font-medium text-sm">
              <p
                style={{
                  lineHeight: "1.5rem",
                }}
              >
                <span className=" font-bold">Solution: </span>
                {item.solution}
              </p>
            </div>
            {/* Pr Stack */}
            <div className=" flex flex-wrap justify-start gap-3 items-center w-full px-2">
              {item.stack.map((stack, index) => (
                <button
                  className=" p-1 border text-xs rounded-md font-medium text-gray-800"
                  key={index}
                >
                  {stack}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
