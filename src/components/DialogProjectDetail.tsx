/* eslint-disable @next/next/no-img-element */
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
import { useTranslation } from "react-i18next";
import { ProjectItem } from "../../types/projects";

interface Props {
  project: ProjectItem;
  description: string;
  technologies: string[];
  children: React.ReactNode;
}

export function DialogProjectDetail({ project, description, technologies, children }: Props) {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-slate-800 border-slate-800 text-gray-100 text-3xl w-[90vw]  md:max-w-3xl px-4">
        <DialogDescription>
          <div className="relative">
            <img
              src={project.image_url}
              alt={project.project_name}
              className="w-full h-40 object-cover rounded-t-lg rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent w-full rounded-xl"></div>
          </div>
          <div className="text-3xl text-gray-100 font-bold pt-8 pb-5">
            {project.project_name}
          </div>
          <div className="text-lg text-gray-100">{description}</div>
          <div className="flex flex-row align-center gap-2 py-6">
            {technologies.map((tech) => (
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
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-20 min-h-12 flex justify-center gap-2 items-center px-4 py-1 bg-slate-700  md:text-lg text-base text-white
              rounded-full hover:bg-slate-700 transition-all duration-300 glow-on-hover"
              >
                <Github className="w-5 h-5"></Github>
                {t("projects.button1")}
              </a>
            )}
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-20 flex min-h-12  justify-center gap-2 items-center px-4 py-1 bg-gradient-to-r md:text-lg text-base from-purple-600 to-pink-600
              text-white rounded-full hover:bg-purple-700 transition-all duration-300 glow-on-hover animate-glow-pulse
              hover:from-purple-700 hover:to-pink-700"
            >
              <ExternalLink className="w-5 h-5"></ExternalLink>
              {t("projects.button2")}
            </a>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
