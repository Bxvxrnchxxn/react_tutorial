/* eslint-disable @next/next/no-img-element */
// DialogProjectDetail.tsx
"use client";
import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Props {
  projectId: number;
  children: React.ReactNode;
}

export function DialogProjectDetail({ projectId, children }: Props) {
  interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    codeLink: string;
    demoLink: string;
  }
  const projects: Project[] = [
    {
      id: 1,
      title: "LASDB",
      description:
        "Website compregensive academic management platform covering books, article, jounals, projects, patents, research and awards.",
      image: "/imgs/lasdb.png",
      technologies: [
        "Vue",
        "Nuxt",
        "Vuetify",
        "Github",
        "Docker",
        "Postman",
        "Javascript",
      ],
      codeLink: "",
      demoLink: "https://oos.flas.kps.ku.ac.th/lasdb/Home",
    },
    {
      id: 2,
      title: "ProofEng Solution",
      description: "Website English grammar checking and proofreading service.",
      image: "/imgs/proofeng.png",
      technologies: [
        "Vue",
        "Nuxt",
        "Vuetify",
        "Github",
        "Docker",
        "Postman",
        "Javascript",
      ],
      codeLink: "",
      demoLink: "https://www.proofengsolutions.com/Home",
    },
    {
      id: 3,
      title: "ProofEngThailand",
      description: "Website English grammar checking and proofreading service.",
      image: "/imgs/proofengthailand.png",
      technologies: [
        "Vue",
        "Nuxt",
        "Vuetify",
        "Github",
        "Docker",
        "Postman",
        "Javascript",
      ],
      codeLink: "",
      demoLink: "https://proofengthailand.com/home",
    },
    {
      id: 4,
      title: "Clockin",
      description:
        "Website for timestamp in/out work and manage human resource.",
      image: "/imgs/timestamp.png",
      technologies: [
        "Vue",
        "Nuxt",
        "Vuetify",
        "Github",
        "Docker",
        "Postman",
        "Javascript",
      ],
      codeLink: "",
      demoLink: "https://uat.thaijobjob.com/timestamp/",
    },
    {
      id: 5,
      title: "PortFolio",
      description:
        "My personal portfolio website that using new frameworks and study new thing.",
      image: "/imgs/portfolio.png",
      technologies: [
        "React",
        "Next",
        "Tailwind CSS",
        "Radix UI",
        "Github",
        "Typescript",
      ],
      codeLink: "https://github.com/Bxvxrnchxxn/react_tutorial.git",
      demoLink: "https://portfolio-bovorns-projects.vercel.app/",
    },
  ];
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-slate-800 border-slate-800 text-gray-100 text-3xl w-[90vw]  md:max-w-3xl px-4">
        <DialogDescription>
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-lg rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent w-full rounded-xl"></div>
          </div>
          <div className="text-3xl text-gray-100 font-bold pt-8 pb-5">
            {project.title}
          </div>
          <div className="text-lg text-gray-100">{project.description}</div>
          <div className="flex flex-row align-center gap-2 py-6">
            {project.technologies.map((tech) => (
              <Button
                className="rounded-full text-purple-400 bg-purple-600/20 hover:bg-purple-600/20 
                border border-purple-600/30 hover:shadow-[0_0_12px_3px_rgba(192,132,252,0.75)] transition-all duration-300"
                key={tech}
              >
                {tech}
              </Button>
            ))}
          </div>
          <div className="flex flex-row gap-2">
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-20 min-h-12 flex justify-center gap-2 items-center px-4 py-1 bg-slate-700  md:text-lg text-base text-white 
              rounded-full hover:bg-slate-700 transition-all duration-300 glow-on-hover"
              >
                <Github className="w-5 h-5"></Github>
                View Code
              </a>
            )}
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-20 flex min-h-12  justify-center gap-2 items-center px-4 py-1 bg-gradient-to-r md:text-lg text-base from-purple-600 to-pink-600 
              text-white rounded-full hover:bg-purple-700 transition-all duration-300 glow-on-hover animate-glow-pulse
              hover:from-purple-700 hover:to-pink-700"
            >
              <ExternalLink className="w-5 h-5"></ExternalLink>
              Live Demo
            </a>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
