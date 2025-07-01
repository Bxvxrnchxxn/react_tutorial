"use client";
import React from "react";
import { Star, CodeXml, Code, Smartphone, ChevronDown } from "lucide-react";
import BouncingWord from "@/components/BouncingWord";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
gsap.registerPlugin(ScrollToPlugin);

const About = () => {
  const downloadFile = (path: string) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = path.split("/").pop()!;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const scrollToProject = () => {
    const target = document.querySelector<HTMLElement>("#projects");
    if (target) {
      gsap.to(window, {
        duration: 1,
        ease: "power.inOut",
        scrollTo: { y: target, offsetY: 50, autoKill: true },
      });
    }
  };
  const scrollToContact = () => {
    const target = document.querySelector<HTMLElement>("#contact");
    if (target) {
      gsap.to(window, {
        duration: 1,
        ease: "power.inOut",
        scrollTo: { y: target, offsetY: 50, autoKill: true },
      });
    }
  };
  const skills = [
    {
      icon: Code,
      name: "Frontend Development",
      description: "React, Next, Tailwind CSS",
    },
    {
      icon: Code,
      name: "Frontend Development",
      description: "Vue, Nuxt, Vuetify",
    },
    {
      icon: Smartphone,
      name: "Responsive Design",
      description: "Designing for all devices",
    },
  ];
  return (
    <div className="relative bg-slate-700 text-gray-100 flex flex-col items-center justify-center min-h-screen py-10">
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
      <div className="md:text-5xl text-4xl font-bold mb-4">
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
        Hello, my name is Bovorn Dejsuwannachai (Choon). I’m Frontend Developer
        crafting responsive, user-friendly.
      </div>
      <div className="flex flex-col md:flex-row gap-8 py-8">
        <div className="flex flex-col gap-8 md:flex-1 md:mx-30 mx-8 self-end">
          <p className="text-xl text-gray-300 max-w-250">
            I work daily with Vue.js, Nuxt.js and Vuetify and tools like Docker,
            GitHub and Postman. I thrive on clean code, performance tuning and
            collaborative problem solving.
          </p>
          <p className="text-xl text-gray-300 max-w-250">
            As a Software Engineer at iNet (Internet Thailand Public Company
            Limited.), I build and maintain scalable client portals and admin
            dashboards. Let’s create something great together!
          </p>

          <div className="flex gap-4">
            <Button
              onClick={scrollToProject}
              className="bg-purple-600 text-gray-100 rounded-full hover:bg-purple-600 transition transform 
              duration-300 hover:-translate-y-2 hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)] cursor-pointer"
            >
              View Projects
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  onClick={scrollToContact}
                  className="bg-pink-600  text-gray-100 rounded-full hover:bg-pink-600 transition transform 
                      duration-300 hover:-translate-y-2 hover:drop-shadow-[0_0_8px_rgba(244,114,182,1)] cursor-pointer"
                >
                  Download CV
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border border-slate-600">
                <DropdownMenuItem
                  onClick={() => downloadFile("/cv/bovorn_cv_th.pdf")}
                  className="cursor-pointer text-gray-100 
                focus:text-gray-100 focus:bg-slate-700 flex"
                >
                  <span>🇹🇭</span>
                  <span>ไทย</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => downloadFile("/cv/bovorn_cv_en.pdf")}
                  className="cursor-pointer text-gray-100 focus:text-gray-100 focus:bg-slate-700 flex"
                >
                  <span>ᴇɴ</span>
                  <span>English</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-1">
          <div className="relative h-80 w-80">
            <div className="h-full w-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-20 animate-bounce-in-out" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-60 w-60 rounded-full bg-slate-700 animate-bounce-in-out animate-glow-pulse flex items-center justify-center">
              <CodeXml
                size={70}
                className="text-purple-400 animate-glow-pulse animate-float"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group hover:-translate-y-3 hover:shadow-2xl rounded-lg bg-slate-800 w-full transition-all duration-300 hover:bg-slate-600 overflow-hidden"
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
