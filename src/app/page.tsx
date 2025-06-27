import React from "react";
import "./globals.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Skill } from "@/components/Skill";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="md:scroll-mt-15">
        <About />
      </section>
      <section id="skills" className="md:scroll-mt-15">
        <Skill />
      </section>
      <section id="experience" className="md:scroll-mt-15">
        <Experience />
      </section>
      <section id="projects" className="md:scroll-mt-15">
        <Projects />
      </section>
      <section id="contact" className="md:scroll-mt-15">
        <Contact />
      </section>
    </div>
  );
}
