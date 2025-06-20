import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  type ExperienceItem = {
    role: string;
    company: string;
    period: string;
    location: string;
    highlights: string[];
    skills: string[];
  };

  const experiences: ExperienceItem[] = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 – Present",
      location: "San Francisco, CA",
      highlights: [
        "Led development of responsive web apps with React & TypeScript",
        "Collaborated with UX/UI designers for pixel-perfect design",
        "Optimized performance → 40 % faster load-time",
        "Mentored junior developers and ran code-reviews",
      ],
      skills: ["React", "TypeScript", "Next.js", "GraphQL"],
    },
    {
      role: "Full-Stack Engineer",
      company: "CloudSync Solutions",
      period: "2020 – 2022",
      location: "Austin, TX",
      highlights: [
        "Built REST & GraphQL APIs with Node.js and PostgreSQL",
        "Migrated legacy app to serverless on AWS Lambda",
        "Implemented CI/CD pipeline (GitHub Actions + Docker)",
      ],
      skills: ["Node.js", "PostgreSQL", "AWS", "Docker"],
    },
    {
      role: "UI/UX Designer & Frontend",
      company: "PixelCraft Studio",
      period: "2018 – 2020",
      location: "Bangkok, TH",
      highlights: [
        "Designed wireframes & hi-fi prototypes in Figma",
        "Converted designs to Vue / Tailwind components",
        "Achieved 25 % higher user-engagement after redesign",
      ],
      skills: ["Figma", "Vue.js", "Tailwind CSS"],
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
          Work{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </span>
        </div>
        <div className="animate-shimmer w-40 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 mb-6 mx-auto inline"></div>
        <div className="text-center text-gray-100 text-xl max-w-200 pt-6">
          My professional journey and the experiences that shaped my career
        </div>
        <div className="flex flex-col items-center justify-center mt-16 gap-4">
          {experiences.map((exp, index) => (
            <div key={exp.role} className="flex-row flex">
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
                        {exp.role}
                      </h3>
                      <p className="md:text-xl text-lg font-semibold text-purple-400">
                        {exp.company}
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
                    {exp.highlights.map((hl) => (
                      <div
                        key={hl}
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
                    {exp.skills.map((skill) => (
                      <Button
                        key={skill}
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
