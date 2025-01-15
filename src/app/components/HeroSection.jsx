"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactLinks from "./ContactLinks";

const HeroSection = () => {
  return (
    <section className="lg:py-16 my-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <div className="flex h-20 md:h-auto">
            <TypeAnimation
              sequence={[
                "Faraz Khan",
                1000,
                "Web Developer",
                1000,
                "Software engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
           Btech &apos;26 | information technology | Pre-final year | Full Stack Developer | competitive programmer |
          </p>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I&apos;m Faraz Khan, a Full Stack Developer and DSA enthusiast. Currently interning at Ionots, I&apos;ve previously contributed to impactful projects at Anajwala. I&apos;m passionate about building scalable solutions and solving complex problems.
          </p>          
          <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <button
              onClick={()=>{
                window.open("https://drive.google.com/drive/folders/12woZUWD96m_xGVyzhDTZx3vmZHRgzQsO?usp=drive_link", '_blank', 'noopener,noreferrer');
              }}
              // href="https://drive.google.com/drive/folders/12woZUWD96m_xGVyzhDTZx3vmZHRgzQsO?usp=drive_link"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <a target="_blank" className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
