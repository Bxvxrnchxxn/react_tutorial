/* eslint-disable @next/next/no-img-element */
"use client";
import { DialogProjectDetail } from "./DialogProjectDetail";
import React, { useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye } from "lucide-react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // batch สำหรับภาพ
    ScrollTrigger.batch(".reveal-image", {
      start: "top 70%",
      onEnter: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        });
      },
      onLeaveBack: (batch) => {
        gsap.to(batch, {
          autoAlpha: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        });
      },
    });

    // batch สำหรับแต่ละบรรทัดของข้อความ
    containerRef.current
      .querySelectorAll<HTMLElement>(".reveal-text-line")
      .forEach((el) => {
        const split = SplitText.create(el, {
          type: "lines",
          linesClass: "line-child",
        });
        ScrollTrigger.batch(split.lines, {
          start: "top 80%",
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.1,
            });
          },
          onLeaveBack: (batch) => {
            gsap.to(batch, {
              autoAlpha: 0,
              y: 50,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.1,
            });
          },
        });
      });
  }, []);

  const projects = [
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
  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen bg-slate-800 py-16 px-8"
    >
      <div className="flex flex-col animate-float">
        <div className="md:text-5xl text-4xl font-bold mb-6 text-gray-100">
          My Projects
        </div>
        <div className="animate-shimmer w-40 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 mb-6 mx-auto"></div>
      </div>
      <div className="md:text-lg text-base text-gray-300">
        Scroll to experience interactive GSAP-powered animations
      </div>
      <div className="grid grid-cols-1 gap-16 mt-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } gap-14`}
          >
            {/* image card */}
            <div className="group relative overflow-hidden rounded-2xl w-auto aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="reveal-image w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-purple-500/0 via-purple-500/20 to-purple-500/70 
               opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <DialogProjectDetail projectId={project.id}>
                <div
                  className="absolute top-5 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 
                 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center cursor-pointer 
                 hover:shadow-purple-500/50 hover:scale-110 hover:shadow-[0_0_12px_3px_rgba(192,132,252,1)]"
                >
                  <Eye size={24} className="text-white" />
                </div>
              </DialogProjectDetail>
            </div>

            {/* text content */}
            <div className="flex flex-col justify-center gap-6 px-2">
              <span className="text-sm font-semibold text-purple-400 uppercase reveal-text-line">
                PROJECT {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-100 reveal-text-line">
                {project.title}
              </h3>
              <p className="text-gray-300 reveal-text-line">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 reveal-text-line">
                {project.technologies.map((tech) => (
                  <Button
                    key={tech}
                    className="rounded-full mx-1 bg-purple-600/20 text-purple-400 border 
                    border-purple-400 hover:bg-purple-600/20 hover:shadow-[0_0_12px_3px_rgba(192,132,252,0.75)] transition"
                  >
                    {tech}
                  </Button>
                ))}
              </div>

              <div className="flex flex-row gap-6">
                <a
                  href={project.codeLink}
                  className="reveal-text-line flex items-center gap-2 text-gray-300 hover:scale-110 transition-transform"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a
                  href={project.demoLink}
                  className="reveal-text-line flex items-center gap-2 text-gray-300 hover:scale-110 transition-transform"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
