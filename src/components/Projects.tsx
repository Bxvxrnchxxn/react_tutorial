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
      image: "/imgs/defaultImgs.jpg",
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
            } gap-20`}
          >
            {/* image card */}
            <div className="group relative overflow-hidden rounded-2xl w-auto aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="reveal-image w-full md:max-w-[35vw] md:h-[20vw] h-full object-cover transition-transform duration-300 ease-out"
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-purple-500/0 via-purple-500/20 to-purple-500/70 
               opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <DialogProjectDetail projectId={project.id}>
                <div
                  className="sm:reveal-image absolute top-5 right-6 opacity-0 md:group-hover:opacity-100  transition-all duration-300 
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
              <p className="text-gray-300 text-base md:text-lg reveal-text-line">
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
                  href={project.codeLink || undefined}
                  target={project.codeLink ? "_blank" : undefined}
                  rel={project.codeLink ? "noopener noreferrer" : undefined}
                  className={`reveal-text-line flex items-center ${
                    project.codeLink
                      ? "text-gray-300 hover:scale-110 cursor-pointer"
                      : "text-gray-500 cursor-not-allowed"
                  } transition-transform`}
                  onClick={(e) => {
                    if (!project.codeLink) e.preventDefault();
                  }}
                >
                  <Github size={18} className="mr-2" />
                  <span>Code</span>
                </a>

                <a
                  href={project.demoLink || undefined}
                  target={project.demoLink ? "_blank" : undefined}
                  rel={project.demoLink ? "noopener noreferrer" : undefined}
                  className={`reveal-text-line flex items-center ${
                    project.demoLink
                      ? "text-gray-300 hover:scale-110 cursor-pointer"
                      : "text-gray-500 cursor-not-allowed"
                  } transition-transform`}
                  onClick={(e) => {
                    if (!project.demoLink) e.preventDefault();
                  }}
                >
                  <ExternalLink size={18} className="mr-2" />
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
