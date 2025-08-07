import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className=" max-w-3xl mx-auto my-10 border-b-2 pb-4 px-3 text-center">
      <h1 className=" text-4xl font-bold text-gray-800 my-6">
        Let's Work Together
      </h1>
      <p className=" text-gray-500 text-[16px] md:text-[20px]">
        I'm always interested in new opportunities and exciting projects.
        Whether you have a question or just want to say hi, feel free to reach
        out!
      </p>
      <div className=" mt-6 md:flex justify-center gap-3 px-3">
        <a
          target="_blank"
          href="mailto:dominionyungmann@gmail.com"
          className=" px-3 py-1 bg-gray-800 font-medium text-sm text-white rounded-md items-center gap-3 shadow-sm mt-2 flex justify-center"
        >
          <Mail className=" w-4 h-4" />
          <p>dominionyungmann@gmail.com</p>
        </a>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/dominion-ikonwa-54348a207/"}
          className=" px-3 py-1 border font-medium text-sm text-gray-800 rounded-md items-center gap-3 shadow-sm mt-2 flex justify-center"
        >
          <Linkedin className=" w-4 h-4" />
          <p>LinkedIn</p>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
