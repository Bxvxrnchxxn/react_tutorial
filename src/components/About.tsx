import React from "react";
import { Star, CodeXml, Code, Globe, Palette, Smartphone } from "lucide-react";
import BouncingWord from "@/components/BouncingWord";
import { Button } from "@/components/ui/button";

const About = () => {
  const skills = [
    {
      icon: Code,
      name: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS",
    },
    {
      icon: Globe,
      name: "Backend Development",
      description: "Node.js, Express, MongoDB",
    },
    {
      icon: Palette,
      name: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS",
    },
    {
      icon: Smartphone,
      name: "Full Stack Development",
      description: "MERN Stack, Next.js",
    },
  ];
  return (
    <div className="relative bg-slate-800 text-gray-100 flex flex-col items-center justify-center min-h-screen py-10">
      {/* decoration */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-20 h-20 border border-purple-500/20 rounded-full animate-pulse-scale" />
        <div
          className="absolute bottom-20 right-20 w-32 h-32 border border-pink-500/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-20 w-4 h-4 bg-purple-400/30 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <div className="text-5xl font-bold mb-4">
        <BouncingWord word="About Me" span={0.35} />
      </div>
      <div className="flex flex-row gap-2 mb-4">
        <Star
          fill="gold"
          color="gold"
          size={20}
          className="hover:-translate-y-2 transform-all duration-300 ease-in-out"
        />
        <Star
          fill="gold"
          color="gold"
          size={20}
          className="hover:-translate-y-2 transform-all duration-300 ease-in-out"
        />
        <Star
          fill="gold"
          color="gold"
          size={20}
          className="hover:-translate-y-2 transform-all duration-300 ease-in-out"
        />
        <Star
          fill="gold"
          color="gold"
          size={20}
          className="hover:-translate-y-2 transform-all duration-300 ease-in-out"
        />
        <Star
          fill="gold"
          color="gold"
          size={20}
          className="hover:-translate-y-2 transform-all duration-300 ease-in-out"
        />
      </div>
      <div className="mx-8 max-w-200 min-w-10 text-center py-7 text-xl text-gray-300">
        I&apos; m a passionate developer with 5+ years of experience creating
        digital solutions that combine beautiful design with robust
        functionality.
      </div>
      <div className="flex flex-col md:flex-row gap-8 py-8">
        <div className="flex flex-col gap-8 md:flex-1 px-30 self-end">
          <p className="text-xl text-gray-300 max-w-250">
            With a background in both design and development, I bring a unique
            perspective to every project. I believe in creating user-centered
            experiences that not only look great but also solve real problems.
          </p>
          <p className="text-xl text-gray-300 max-w-250">
            When I&apos;m not coding, you can find me exploring new
            technologies, contributing to open source, or sharing knowledge with
            the developer community.
          </p>

          <div className="flex gap-4">
            <Button className="bg-purple-600 text-gray-100 rounded-full transition transform duration-300 hover:-translate-y-2 hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]">
              View Projects
            </Button>
            <Button className="bg-pink-600  text-gray-100 rounded-full transition transform duration-300 hover:-translate-y-2 hover:drop-shadow-[0_0_8px_rgba(244,114,182,1)]">
              Contact Me
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-1">
          <div className="relative h-80 w-80">
            <div className="h-full w-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-20 animate-bounce-in-out" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-60 w-60 rounded-full bg-slate-700 animate-bounce-in-out animate-glow flex items-center justify-center">
              <CodeXml
                size={70}
                className="text-purple-400 animate-glow animate-float"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group hover:-translate-y-3 hover:shadow-2xl rounded-lg bg-slate-900 w-full transition-all duration-300 hover:bg-slate-700 overflow-hidden"
            >
              <skill.icon
                size={40}
                className="mx-8 my-8 animate-float text-purple-400 group-hover:text-pink-400"
                style={{ animationDelay: `${index * 0.5}s` }}
              />

              <div className="flex flex-col gap-2 pb-8">
                <div className="pl-6 text-xl font-semibold text-gray-100">
                  {skill.name}
                </div>
                <div className="pl-6 text-lg text-gray-400">
                  {skill.description}
                </div>
              </div>
              <div className=" bottom-0 left-0 h-2 w-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-[width] duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
