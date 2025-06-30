"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation();
  type ExperienceItem = {
    name: string;
    role: string;
    company: string;
    period: string;
    location: string;
    highlights: string[];
    skills: string[];
  };

  const experiences: ExperienceItem[] = [
    {
      name: t("experience.exp1.name"),
      role: t("experience.exp1.role"),
      company: t("experience.exp1.company"),
      period: t("experience.exp1.period"),
      location: t("experience.exp1.location"),
      highlights: [
        t("experience.exp1.highlights.hl1"),
        t("experience.exp1.highlights.hl2"),
        t("experience.exp1.highlights.hl3"),
      ],
      skills: [
        t("experience.exp1.skills.s1"),
        t("experience.exp1.skills.s2"),
        t("experience.exp1.skills.s3"),
        t("experience.exp1.skills.s4"),
        t("experience.exp1.skills.s5"),
        t("experience.exp1.skills.s6"),
      ],
    },
    {
      name: t("experience.exp2.name"),
      role: t("experience.exp2.role"),
      company: t("experience.exp2.company"),
      period: t("experience.exp2.period"),
      location: t("experience.exp2.location"),
      highlights: [
        t("experience.exp2.highlights.hl1"),
        t("experience.exp2.highlights.hl2"),
        t("experience.exp2.highlights.hl3"),
      ],
      skills: [
        t("experience.exp2.skills.s1"),
        t("experience.exp2.skills.s2"),
        t("experience.exp2.skills.s3"),
        t("experience.exp2.skills.s4"),
        t("experience.exp2.skills.s5"),
        t("experience.exp2.skills.s6"),
        t("experience.exp2.skills.s7"),
      ],
    },
    {
      name: t("experience.exp3.name"),
      role: t("experience.exp3.role"),
      company: t("experience.exp3.company"),
      period: t("experience.exp3.period"),
      location: t("experience.exp3.location"),
      highlights: [
        t("experience.exp3.highlights.hl1"),
        t("experience.exp3.highlights.hl2"),
        t("experience.exp3.highlights.hl3"),
      ],
      skills: [
        t("experience.exp3.skills.s1"),
        t("experience.exp3.skills.s2"),
        t("experience.exp3.skills.s3"),
        t("experience.exp3.skills.s4"),
        t("experience.exp3.skills.s5"),
        t("experience.exp3.skills.s6"),
        t("experience.exp3.skills.s7"),
      ],
    },
    {
      name: t("experience.exp4.name"),
      role: t("experience.exp4.role"),
      company: t("experience.exp4.company"),
      period: t("experience.exp4.period"),
      location: t("experience.exp4.location"),
      highlights: [
        t("experience.exp4.highlights.hl1"),
        t("experience.exp4.highlights.hl2"),
        t("experience.exp4.highlights.hl3"),
      ],
      skills: [
        t("experience.exp4.skills.s1"),
        t("experience.exp4.skills.s2"),
        t("experience.exp4.skills.s3"),
        t("experience.exp4.skills.s4"),
        t("experience.exp4.skills.s5"),
        t("experience.exp4.skills.s6"),
        t("experience.exp4.skills.s7"),
      ],
    },
    {
      name: t("experience.exp5.name"),
      role: t("experience.exp5.role"),
      company: t("experience.exp5.company"),
      period: t("experience.exp5.period"),
      location: t("experience.exp5.location"),
      highlights: [
        t("experience.exp5.highlights.hl1"),
        t("experience.exp5.highlights.hl2"),
        t("experience.exp5.highlights.hl3"),
      ],
      skills: [
        t("experience.exp5.skills.s1"),
        t("experience.exp5.skills.s2"),
        t("experience.exp5.skills.s3"),
        t("experience.exp5.skills.s4"),
        t("experience.exp5.skills.s5"),
        t("experience.exp5.skills.s6"),
        t("experience.exp5.skills.s7"),
      ],
    },
    {
      name: t("experience.exp6.name"),
      role: t("experience.exp6.role"),
      company: t("experience.exp6.company"),
      period: t("experience.exp6.period"),
      location: t("experience.exp6.location"),
      highlights: [
        t("experience.exp6.highlights.hl1"),
        t("experience.exp6.highlights.hl2"),
        t("experience.exp6.highlights.hl3"),
      ],
      skills: [
        t("experience.exp6.skills.s1"),
        t("experience.exp6.skills.s2"),
        t("experience.exp6.skills.s3"),
        t("experience.exp6.skills.s4"),
        t("experience.exp6.skills.s5"),
        t("experience.exp6.skills.s6"),
        t("experience.exp6.skills.s7"),
      ],
    },
    {
      name: t("experience.exp7.name"),
      role: t("experience.exp7.role"),
      company: t("experience.exp7.company"),
      period: t("experience.exp7.period"),
      location: t("experience.exp7.location"),
      highlights: [
        t("experience.exp7.highlights.hl1"),
        t("experience.exp7.highlights.hl2"),
        t("experience.exp7.highlights.hl3"),
      ],
      skills: [t("experience.exp7.skills.s1")],
    },
  ];
  return (
    <div className="bg-slate-700 flex flex-col items-center justify-center min-h-screen py-16 relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/30"></div>
      </div>
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-float"></div>
        <div
          className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/6 w-1 h-1 bg-blue-400 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/7 w-1 h-1 bg-pink-400 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/6 left-1/7 w-1 h-1 bg-blue-400 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="md:text-5xl text-4xl font-bold mb-4 text-gray-100 text-center">
          {t("experience.title1")}{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t("experience.title2")}
          </span>
        </div>
        <div className="animate-shimmer w-40 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 mb-6 mx-auto inline"></div>
        <div className="text-center text-gray-100 text-xl mx-8 max-w-200 pt-6">
          {t("experience.subtitle")}
        </div>
        <div className="flex flex-col items-center justify-center mt-16 gap-4">
          {experiences.map((exp, index) => (
            <div key={`${exp.name}-exp-${index}`} className="flex-row flex">
              <div className="flex flex-col justify-center items-center mr-6">
                <div className="w-2 h-2 rounded-full bg-pink-300"></div>
                {index !== experiences.length + 1 && (
                  <div className="mt-3 w-px flex-1 bg-pink-200"></div>
                )}
              </div>
              <div className="flex flex-col w-auto min-h-60 rounded-lg bg-slate-800 text-gray-100 border-gray-500 border-1 hover:border-purple-300 transition-all duration-300 hover-lift">
                <div className="p-4 mx-4 my-2 md:w-auto w-65">
                  <div className="flex md:flex-row flex-col gap-4 md:w-250 md:justify-between">
                    <div>
                      <h3 className="md:text-2xl text-xl font-bold">
                        {exp.name}
                      </h3>
                      <p className="md:text-xl text-lg font-semibold text-purple-400">
                        {exp.company}
                      </p>
                      <p className="md:text-lg text-base font-semibold text-gray-500">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2 text-gray-400">
                        <Calendar size={16} />
                        <div>{exp.period}</div>
                      </div>
                      <div className="flex flex-row gap-2 text-gray-400">
                        <MapPin size={16} />
                        <div>{exp.location}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 pt-6">
                    {exp.highlights.map((hl, i) => (
                      <div
                        key={`${hl}-${i}`}
                        className="flex flex-row gap-4 items-baseline"
                      >
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-1"></div>
                        <div className="md:text-lg text-base text-gray-100">
                          {hl}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-5 mb-2">
                    {exp.skills.map((skill, index) => (
                      <Button
                        key={`${skill}-${index}`}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)] transition-all duration-300 hover:-translate-y-1"
                      >
                        {skill}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
