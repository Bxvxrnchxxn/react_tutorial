"use client";
import React from "react";
import {
  FaReact,
  FaVuejs,
  FaFigma,
  FaGithub,
  FaDocker,
  FaHtml5,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiVuetify,
  SiDart,
  SiPostman,
} from "react-icons/si";
import {
  RiTailwindCssFill,
  RiJavascriptFill,
  RiFlutterFill,
} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

export const Skill = () => {
  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "text-green-400/80";
      case 2:
        return "text-yellow-400/80";
      case 3:
        return "text-blue-400/80";
      case 4:
        return "text-red-400/80";
      default:
        return "text-gray-400/80";
    }
  };
  const getLevelText = (level: number) => {
    switch (level) {
      case 1:
        return "Beginner";
      case 2:
        return "Intermediate";
      case 3:
        return "Advanced";
      case 4:
        return "Expert";
      default:
        return "Beginner";
    }
  };
  const getLevelDots = (level: number) => {
    return Array.from({ length: 4 }, (_, index) => (
      <div
        key={index}
        className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
          index < level
            ? "bg-gradient-to-r from-purple-500 to-pink-500"
            : "bg-slate-600 light:bg-gray-300"
        }`}
      />
    ));
  };
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, level: 1 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 1 },
        { name: "Vue.js", icon: <FaVuejs />, level: 3 },
        { name: "Nuxt.js", icon: <SiNuxtdotjs />, level: 3 },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill />, level: 1 },
        { name: "Vuetify", icon: <SiVuetify />, level: 4 },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "HTML", icon: <FaHtml5 />, level: 3 },
        { name: "CSS", icon: <IoLogoCss3 />, level: 3 },
        { name: "JavaScript", icon: <RiJavascriptFill />, level: 2 },
        { name: "TypeScript", icon: <BiLogoTypescript />, level: 1 },
        { name: "Dart", icon: <SiDart />, level: 1 },
      ],
    },
    {
      title: "Mobile & Design",
      skills: [
        { name: "Flutter", icon: <RiFlutterFill />, level: 1 },
        { name: "Figma", icon: <FaFigma />, level: 1 },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "GitHub", icon: <FaGithub />, level: 2 },
        { name: "Docker", icon: <FaDocker />, level: 2 },
        { name: "VS Code", icon: <VscVscode />, level: 4 },
        { name: "Postman", icon: <SiPostman />, level: 3 },
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 py-16 px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-40 h-40 border border-purple-500/10 rounded-full animate-pulse-scale light:border-purple-300/20"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-pink-500/10 rounded-full animate-float light:border-pink-300/20"></div>
      </div>
      <div className="md:text-5xl text-4xl font-bold mb-6 text-gray-100 animate-blink">
        My Skills & Technologies
      </div>
      <div className="animate-shimmer w-40 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 mb-6 mx-auto"></div>
      <div className="md:text-lg text-base text-gray-300">
        My technical expertise across various domains of software development
      </div>
      <div className="grid-cols-2 md:grid-cols-4 gap-4 px-30 mt-10 w-full grid">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-slate-700/40 p-4 rounded-lg transition-all duration-300 justify-center items-center"
          >
            <div className="flex justify-center text-xl font-semibold text-gray-100 pt-4">
              {category.title}
            </div>
            <div>
              {category.skills.map((skill) => (
                <div key={skill.name} className="mb-6 mt-8">
                  <div className="flex items-center justify-between gap-2 text-gray-300 text-lg font-medium">
                    <div className="flex flex-row gap-2 items-center">
                      <div className="text-xl">{skill.icon}</div>
                      <div>{skill.name}</div>
                    </div>

                    <div
                      className={`text-lg font-medium ${getLevelColor(
                        skill.level
                      )}`}
                    >
                      {getLevelText(skill.level)}
                    </div>
                  </div>
                  <div
                    className="flex space-x-1 justify-end"
                    data-level={skill.level}
                  >
                    {getLevelDots(skill.level).map((dot, dotIndex) => (
                      <div key={dotIndex} className="">
                        {dot}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 px-30 text-center w-full">
        <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl light:bg-white/50">
          <div className="text-3xl font-bold text-purple-400 mb-2 light:text-purple-600">
            15+
          </div>
          <div className="text-gray-300 light:text-gray-600">Technologies</div>
        </div>
        <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl light:bg-white/50">
          <div className="text-3xl font-bold text-pink-400 mb-2 light:text-pink-600">
            0 - 1
          </div>
          <div className="text-gray-300 light:text-gray-600">
            Years Experience
          </div>
        </div>
        <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl light:bg-white/50">
          <div className="text-3xl font-bold text-cyan-400 mb-2 light:text-cyan-600">
            4
          </div>
          <div className="text-gray-300 light:text-gray-600">Projects</div>
        </div>
        <div className="bg-slate-900/30 backdrop-blur-sm p-6 rounded-xl light:bg-white/50">
          <div className="text-3xl font-bold text-green-400 mb-2 light:text-green-600">
            ∞
          </div>
          <div className="text-gray-300 light:text-gray-600">Learning</div>
        </div>
      </div>
    </div>
  );
};
