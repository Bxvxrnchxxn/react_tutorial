"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ExperienceItem } from "../../types/get_all";

type ExperienceProps = {
  data: ExperienceItem[];
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return new Date(Number(year), Number(month) - 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
};

const formatPeriod = (startDate: string, endDate: string, isPresent: boolean) =>
  `${formatDate(startDate)} – ${isPresent ? "Present" : formatDate(endDate)}`;

const parseHighlights = (description: string) =>
  description
    .split("\n")
    .map((line) => line.replace(/^-\s*/, "").trim())
    .filter(Boolean);

export const Experience = ({ data }: ExperienceProps) => {
  const { t, i18n } = useTranslation();
  const experiences = data.map((exp) => ({
    name: exp.namePosition,
    role: exp.position,
    company: exp.company,
    period: formatPeriod(exp.startDate, exp.endDate, exp.isPresent),
    location: exp.location,
    highlights: parseHighlights(i18n.language === "th" ? exp.descriptionTH : exp.descriptionEN),
    skills: exp.technologies.map((s) => s.charAt(0).toUpperCase() + s.slice(1)),
  }));
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
            <div key={index} className="flex-row flex">
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
