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
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      codeLink: "#",
      demoLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      codeLink: "#",
      demoLink: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather application with location-based forecasts and interactive charts.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "Chart.js", "Weather API"],
      codeLink: "#",
      demoLink: "#",
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
      <DialogContent className="bg-slate-800 border-slate-800 text-gray-100 text-3xl">
        <DialogDescription>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-[8px]"
          />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul>
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            Code
          </a>{" "}
          |{" "}
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
