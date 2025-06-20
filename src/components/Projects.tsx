/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">
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
        <div className="relative overflow-hidden rounded-2xl perspectivce-1000">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
            alt="img2"
            className="object-cover w-full h-80 transition-all duration-600 hover:scale-110"
          />
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
            <Button className="rounded-full bg-purple-600/20 text-purple-400 border border-purple-400 hover:bg-purple-600/20">
              React
            </Button>
            <Button className="rounded-full bg-purple-600/20 text-purple-400 border border-purple-400 hover:bg-purple-600/20">
              Node.js
            </Button>
            <Button className="rounded-full bg-purple-600/20 text-purple-400 border border-purple-400 hover:bg-purple-600/20">
              MongoDB
            </Button>
            <Button className="rounded-full bg-purple-600/20 text-purple-400 border border-purple-400 hover:bg-purple-600/20">
              Stripe
            </Button>
          </div>
          <div className="flex flex-row gap-4">
            <a
              href=""
              className="flex flex-row gap-2 text-gray-300 font-semibold hover:scale-105 transition-transform duration-300"
            >
              <Github size={18} />
              <span>Code</span>
            </a>
            <a
              href=""
              className="flex flex-row gap-2 text-gray-300 font-semibold hover:scale-105 transition-transform duration-300"
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
