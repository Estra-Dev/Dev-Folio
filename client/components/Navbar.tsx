"use client";

import { Menu, MoonIcon, SunIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const pathName = usePathname();
  const menu = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Skills",
      href: "/skills",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setToggle(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggle = () => {
    setToggle((prevToggle) => {
      const newToggle = !prevToggle;

      if (newToggle) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return newToggle;
    });
  };
  console.log(toggle);

  return (
    <header className=" flex justify-between items-center py-3 px-[3%] fixed top-0 left-0 w-full z-50 bg-transparent/30 backdrop-blur-xs border-b border-white/10 shadow-xs mt-2 dark:bg-transparent/30 text-gray-900 dark:text-gray-100">
      {/* logo */}
      <div className=" w-[40px] h-[40px] md:w-[50px] md:h-[50px] overflow-hidden rounded-full">
        <Image
          src={"/dev_k_neon.png"}
          alt="logo"
          width={50}
          height={50}
          className=" object-cover"
        />
      </div>
      {/* menus */}
      <nav className=" hidden md:flex justify-between items-center max-w-xl w-full py-2 px-8 bg-white/75 shadow-sm rounded-4xl dark:bg-gray-900/75">
        {menu.map((item) => {
          const isActive = pathName === item.href;

          return (
            <div key={item.name}>
              <Link
                href={item.href}
                className={`${
                  isActive ? "text-blue-600" : "text-gray-800 dark:text-white"
                } font-medium text-sm transition-colors ease-in`}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </nav>
      {/* toggles */}
      <div className=" flex items-center gap-5 text-gray-700 dark:text-gray-100">
        <div className=" cursor-pointer" title="Light Mode">
          {toggle ? (
            <MoonIcon onClick={handleToggle} />
          ) : (
            <SunIcon onClick={handleToggle} />
          )}
        </div>
        <div
          className=" cursor-pointer hidden md:flex flex-col items-center gap-1"
          title="User"
        >
          <User className=" w-4 h-4" />
          <p className=" text-[9px] p-1 rounded-sm border-[0.5px]">sign-in</p>
        </div>
        {/* mobile menu */}
        <div className=" md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Menu className=" w-5 h-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className=" bg-white/90 backdrop-blur-md text-gray-800 dark:bg-gray-900/90 dark:text-gray-100"
            >
              <div className=" mt-16 flex flex-col gap-5 px-2">
                {menu.map((item) => {
                  const isActive = pathName === item.href;

                  return (
                    <Link
                      href={item.href}
                      key={item.name}
                      onClick={() => setOpen(false)}
                      className={` font-medium text-sm p-2.5 rounded-md ${
                        isActive
                          ? "text-white bg-blue-600"
                          : "text-gray-800 transition-colors ease-in dark:text-gray-100"
                      } `}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <div
                  className=" cursor-pointer flex gap-2 items-center pl-2"
                  title="User"
                >
                  <User className=" w-4 h-4" />
                  <p className=" text-[9px] p-1 rounded-sm border-[0.5px]">
                    sign-in
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
