import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className=" w-full border-t-2 py-6 mt-6 bg-gray-200/60 dark:bg-gray-800/60 dark:border-gray-700">
      <div className=" max-w-5xl mx-auto px-3">
        <div className=" md:flex justify-between items-center">
          <p className=" text-gray-500 dark:text-gray-400 text-sm mt-2">
            &copy; {date} Dev King Studios. All right Reverved
          </p>
          <div className=" flex justify-start md:justify-end gap-6 items-center text-gray-800 dark:text-gray-600 font-medium mt-2">
            <Link href={"https://github.com/Estra-Dev"} target="_blank">
              <Github className=" w-4 h-4" />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/dominion-ikonwa-54348a207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
            >
              <Linkedin className=" w-4 h-4" />
            </Link>
            <Link href={"mailto:dominionyungmann@gmail.com"} target="_blank">
              <Mail className=" w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
