"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Sparkles, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-pink-400 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-purple-300 rounded-full animate-float"></div>
        <div className="absolute bottom-60 right-20 w-2 h-2 bg-pink-300 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-float"></div>
      </div>
      <div>
        <Sparkles
          className="text-purple-400 text-6xl mb-4 animate-spin-y"
          size={48}
        />
      </div>
      <div className="text-4xl md:text-7xl font-bold text-white font-ui-sans-serif">
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-t from-purple-400 to-pink-400 bg-clip-text text-transparent animate-shimmer">
          <span className="inline">Bovorn</span>
          <span className="hidden md:inline"> Dejsuwannachai</span>
        </span>
      </div>
      <div className="mt-6">
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "Backend Developer",
            2000,
            "Full Stack Developer",
            2000,
            "Software Engineer",
            2000,
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
          className="text-gray-300 md:text-3xl text-xl font-medium"
        />
      </div>
      <div className="flex flex-row gap-6 mt-16 text-gray-300">
        <Github
          size={28}
          className="hover:scale-110 transition-transform duration-200 cursor-pointer hover:rotate-20 hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]"
        />
        <Linkedin
          size={28}
          className="hover:scale-110 transition-transform duration-200 cursor-pointer hover:-rotate-20 hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]"
        />
        <Mail
          size={28}
          className="hover:scale-110 transition-transform duration-200 cursor-pointer hover:rotate-20 hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]"
        />
      </div>
      <div className="absolute bottom-8 animate-float text-gray-300 hover:scale-130 transition-transform duration-200 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)] hover:text-purple-400">
        <ChevronDown size={28} />
      </div>
    </div>
  );
};

export default Hero;
