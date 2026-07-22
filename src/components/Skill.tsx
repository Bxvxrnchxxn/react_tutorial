"use client";
import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaVuejs,
  FaFigma,
  FaGithub,
  FaDocker,
  FaHtml5,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNuxt,
  SiVuetify,
  SiDart,
  SiPostman,
  SiMongodb,
  SiShadcnui,
  SiAntdesign,
  SiMui,
  SiCanva,
  SiExpress,
  SiMysql,
  SiBruno,
  SiAngular,
  SiBootstrap,
  SiClaude,
  SiGithubcopilot,
  SiGitlab,
  SiGrafana,
  SiJenkins,
  SiLinux,
  SiMariadb,
  SiOllama,
  SiOpenvpn,
  SiPostgresql,
  SiSwift,
} from "react-icons/si";
import {
  RiTailwindCssFill,
  RiJavascriptFill,
  RiFlutterFill,
} from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
import { SkillTechnologies } from "../../types/skill_technologies";
import { getSkillTechnologies } from "../../service/skill_technologies";

const iconMap: Record<string, React.ReactElement> = {
  react: <FaReact className="text-blue-400" />,
  nextjs: <SiNextdotjs className="text-gray-100" />,
  vuejs: <FaVuejs className="text-green-500" />,
  nuxtjs: <SiNuxt className="text-green-500" />,
  tailwindcss: <RiTailwindCssFill className="text-cyan-400" />,
  vuetify: <SiVuetify className="text-sky-400" />,
  html5: <FaHtml5 className="text-orange-500" />,
  css3: <IoLogoCss3 className="text-blue-500" />,
  javascript: <RiJavascriptFill className="text-amber-300" />,
  typescript: <BiLogoTypescript className="text-blue-500" />,
  dart: <SiDart className="text-sky-400" />,
  flutter: <RiFlutterFill className="text-sky-400" />,
  figma: <FaFigma className="text-orange-500" />,
  canva: <SiCanva className="text-teal-400" />,
  github: <FaGithub className="text-gray-100" />,
  docker: <FaDocker className="text-blue-500" />,
  vscode: <VscVscode className="text-sky-500" />,
  postman: <SiPostman className="text-orange-500" />,
  mongodb: <SiMongodb className="text-green-500" />,
  shadcnui: <SiShadcnui className="text-purple-500" />,
  antdesign: <SiAntdesign className="text-blue-500" />,
  mui: <SiMui className="text-blue-500" />,
  express: <SiExpress className="text-gray-100" />,
  mysql: <SiMysql className="text-blue-500" />,
  bruno: <SiBruno className="text-purple-500" />,
  angular: <SiAngular className="text-red-500" />,
  bootstrap: <SiBootstrap className="text-purple-500" />,
  claude: <SiClaude className="text-orange-500" />,
  githubcopilot: <SiGithubcopilot className="text-gray-100" />,
  gitlab: <SiGitlab className="text-orange-500" />,
  grafana: <SiGrafana className="text-blue-500" />,
  jenkins: <SiJenkins className="text-orange-500" />,
  linux: <SiLinux className="text-blue-500" />,
  mariadb: <SiMariadb className="text-blue-500" />,
  ollama: <SiOllama className="text-purple-500" />,
  openvpn: <SiOpenvpn className="text-blue-500" />,
  postgresql: <SiPostgresql className="text-blue-500" />,
  swift: <SiSwift className="text-orange-500" />,
  node: <FaNodeJs className="text-green-500" />,
  python: <FaPython className="text-yellow-500" />,
};

export const Skill = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<SkillTechnologies | null>(null);

  useEffect(() => {
    getSkillTechnologies()
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

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

  if (!data) return null;

  const skillCategories = data.skill_sections.map((section) => ({
    title: section.title,
    skills: [...section.items]
      .sort((a, b) => a.order - b.order)
      .map((item) => ({
        name: item.name,
        icon: iconMap[item.icon] ?? <FaReact />,
        level: item.score,
      })),
  }));

  const statColors = ["text-purple-400", "text-pink-400", "text-cyan-400", "text-green-400"];
  const stats = [...data.summary_stats].sort((a, b) => a.order - b.order);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 py-16 px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-40 h-40 border border-purple-500/10 rounded-full animate-pulse-scale light:border-purple-300/20"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-pink-500/10 rounded-full animate-float light:border-pink-300/20"></div>
      </div>
      <div className="md:text-5xl text-3xl font-bold mb-6 text-gray-100 animate-blink align-center">
        {t("skills.title")}
      </div>
      <div className="animate-shimmer w-40 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 mb-6 mx-auto"></div>
      <div className="md:text-lg text-base text-gray-300">
        {t("skills.subtitle")}
      </div>
      <div className="grid-cols-1 md:grid-cols-4 gap-4 md:px-[6vw] mt-10 w-full grid">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-slate-700/40 p-4 border-slate-700/40 rounded-lg transition-all duration-300 justify-center items-center hover:scale-105
            hover:border-slate-400 hover:border glow-on-hover"
          >
            <div className="flex justify-center text-xl font-semibold text-gray-100 pt-4">
              {category.title}
            </div>
            <div>
              {category.skills.map((skill) => (
                <div key={skill.name} className="mb-6 mt-8 ">
                  <div className="flex items-center justify-between gap-2 text-gray-300 text-lg font-medium">
                    <div className="flex flex-row gap-2 items-center">
                      <div className="text-xl">
                        {skill.icon}
                      </div>
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
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 md:px-[6vw] text-center w-full">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl light:bg-white/50 glow-on-hover hover:scale-105
          transition-all duration-300 hover:shadow-slate-900/60"
          >
            <div className={`text-3xl font-bold mb-2 ${statColors[index % statColors.length]}`}>
              {stat.value}
            </div>
            <div className="text-gray-300 light:text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
