"use client";

import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   setMailDetails({...mailDetails, [name]: value})
  // }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    try {
      if (!subject && !message) {
        return setError("Fill all fields please");
      } else {
        setSuccess(true);
      }
      const email = "dominionyungmann@gmail.com";
      const mailto = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(message)}`;
      window.location.href = mailto;
      setSubject("");
      setMessage("");
    } catch (error: any) {
      setError(error);
    }
  };
  console.log(subject, message);
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

      <form onSubmit={handleSubmit} className=" max-w-2xl mx-auto mt-4 px-2">
        <div className=" flex flex-col gap-1 w-full items-start">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject..."
            className=" border w-full p-2 rounded-md"
          />
        </div>
        <div className=" flex flex-col gap-1 w-full items-start">
          <label htmlFor="message">Message</label>
          <textarea
            name="subject"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message..."
            rows={5}
            className=" border w-full p-2 rounded-md"
          />
        </div>
        {error && (
          <p className=" mt-2 rounded-md p-2 text-red-500 bg-red-400/20">
            {error}
          </p>
        )}
        {success && (
          <p className=" mt-2 rounded-md p-2 text-green-600 bg-green-400/20">
            Sent Successfully
          </p>
        )}
        <div className=" mt-6 flex justify-start gap-3 px-3">
          <Button
            disabled={success}
            type="submit"
            className=" px-3 py-1 bg-gray-800 font-medium text-sm text-white rounded-md items-center gap-3 shadow-sm mt-2 flex justify-center"
          >
            <Mail className=" w-4 h-4" />
            <p>Email Me</p>
          </Button>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/dominion-ikonwa-54348a207/"}
            className=" px-3 py-1 border font-medium text-sm text-gray-800 rounded-md items-center gap-3 shadow-sm mt-2 flex justify-center"
          >
            <Linkedin className=" w-4 h-4" />
            <p>LinkedIn</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Contact;
