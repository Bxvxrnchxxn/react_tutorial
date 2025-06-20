import React from "react";
import "./globals.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="md:scroll-mt-15">
        <About />
      </section>
      <section id="experience" className="md:scroll-mt-15">
        <Experience />
      </section>
      <section id="projects" className="md:scroll-mt-15">
        <Projects />
      </section>
    </div>
  );
}
