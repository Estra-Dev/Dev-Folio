"use client";

import { Calendar, Github, LocateFixedIcon, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Header = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "MERN & Next.js Specialist",
      "Data Analyst",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 100,
    delaySpeed: 2500,
  });

  return (
    <div className=" max-w-5xl w-full mx-auto mt-32 md:pt-14">
      <div className=" md:flex justify-center items-center gap-7 my-7">
        {/* Profile Image */}
        <div className=" max-w-[15rem] w-full mx-auto overflow-hidden rounded-full border-4">
          <Image
            src={"/profile.jpg"}
            alt="my Profile"
            width={200}
            height={200}
            className=" w-full object-cover"
          />
        </div>
        {/* Description */}
        <div className=" relative text-center px-4 text-gray-900 mt-4 max-w-2xl mx-auto">
          <h1 className=" text-3xl md:text-6xl font-bold">
            {text}{" "}
            <span className=" text-2xl text-black">
              <Cursor
                cursorStyle={
                  <FaBug className="text-black ant-cursor absolute top-0" />
                }
              />
            </span>
          </h1>
          <p className=" mt-7 text-sm md:text-xl font-medium text-gray-800/70 space-x-5">
            I craft and build fast, scalable, and user-friendly web applications
            and digital experiences that blend beautiful design, solve
            real-world problems with robust functionality. Passionate about
            creating scalable solutions that make a difference.
          </p>
          <div className=" flex flex-row gap-2 justify-center items-center md:gap-6 mt-4 text-gray-800/70">
            <span className=" flex gap-1 items-center text-sm md:text-[16px] font-medium">
              <LocateFixedIcon className=" w-5 h-5" /> Port Harcourt, Rivers
            </span>
            <span className=" flex gap-1 items-center text-sm md:text-[16px] font-medium">
              <Calendar className=" w-5 h-5" /> Available for Hire
            </span>
          </div>
          {/* Get in touch */}
          <div className=" mt-6 flex justify-center gap-3">
            <a
              target="_blank"
              href={"mailto:dominionyungmann@gmail.com"}
              className=" px-3 py-1 bg-gray-800 font-medium text-sm text-white rounded-md flex items-center gap-3 shadow-sm"
            >
              <Mail className=" w-4 h-4" />
              <p>Get in Touch</p>
            </a>
            <Link
              target="_blank"
              href={"https://github.com/Estra-Dev"}
              className=" px-3 py-1 border font-medium text-sm text-gray-800 rounded-md flex items-center gap-3 shadow-sm"
            >
              <Github className=" w-4 h-4" />
              <p>View Work</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
