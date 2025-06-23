/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 py-16">
      <div className="flex flex-col animate-float">
        <div className="md:text-5xl text-4xl font-bold mb-6 text-gray-100">
          My Projects
        </div>
        <div className="animate-shimmer w-40 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 mb-6 mx-auto"></div>
      </div>
      <div className="md:text-lg text-base text-gray-300">
        Scroll to experience interactive GSAP-powered animations
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="group relative overflow-hidden rounded-2xl perspectivce-1000">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
            alt="img2"
            className="object-cover w-full h-80 transition-all duration-600 group-hover:scale-110"
          />
          <div
            className="absolute inset-0
               bg-gradient-to-b
               from-purple-500/0
               via-purple-500/20
               to-purple-500/70
               opacity-0 
               transition-opacity duration-500
               group-hover:opacity-100"
          />
          <div className="group-hover:opacity-100 opacity-0 transition-all duration-300 cursor-pointer w-15 h-15 rounded-full bg-purple-600 top-5 right-6 absolute flex items-center justify-center">
            <Eye size={24} className="text-gray-100" ></Eye>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <div className="text-xl text-purple-400 font-semibold">
            PROJECT 01
          </div>
          <div className="text-gray-100 text-4xl font-bold">
            E-Commerce Platform
          </div>
          <div className="text-gray-300 text-lg">
            A full-stack e-commerce solution with React, Node.js, and Stripe
            integration.
          </div>
          <div className="flex flex-row gap-4">
            <Button
              className="rounded-full bg-purple-600/20 text-purple-400 border border-purple-400 
              hover:bg-purple-600/20 hover:hover:shadow-[0_0_12px_3px_rgba(192,132,252,0.75)] transition-all duration-300"
            >
              React
            </Button>
            <Button
              className="rounded-full bg-purple-600/20 text-purple-400 border border-purple-400 
            hover:bg-purple-600/20 hover:hover:shadow-[0_0_12px_3px_rgba(192,132,252,0.75)] transition-all duration-300"
            >
              Node.js
            </Button>
            <Button
              className="rounded-full bg-purple-600/20 text-purple-400 border border-purple-400
            hover:bg-purple-600/20 hover:hover:shadow-[0_0_12px_3px_rgba(192,132,252,0.75)] transition-all duration-300"
            >
              MongoDB
            </Button>
            <Button
              className="rounded-full bg-purple-600/20 text-purple-400 border border-purple-400
            hover:bg-purple-600/20 hover:hover:shadow-[0_0_12px_3px_rgba(192,132,252,0.75)] transition-all duration-300"
            >
              Stripe
            </Button>
          </div>
          <div className="flex flex-row gap-6">
            <a
              href=""
              className="flex flex-row gap-2 text-gray-300 font-semibold hover:scale-110 transition-transform duration-300"
            >
              <Github size={18} />
              <span>Code</span>
            </a>
            <a
              href=""
              className="flex flex-row gap-2 text-gray-300 font-semibold hover:scale-110 transition-transform duration-300"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
