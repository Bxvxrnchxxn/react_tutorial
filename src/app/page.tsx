"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Skill } from "@/components/Skill";
import "@/i18n";
import { getPortfolioAll } from "../../service/get_all";
import { PortfolioData } from "../../types/get_all";

export default function Home() {
  const [data, setData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    getPortfolioAll()
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <div>
      <section id="home">
        <Hero data={data.hero} />
      </section>
      <section id="about" className="md:scroll-mt-15">
        <About data={data.about_me} />
      </section>
      <section id="skills" className="md:scroll-mt-15">
        <Skill data={data.skill_technologies} />
      </section>
      <section id="experience" className="md:scroll-mt-15">
        <Experience data={data.experience} />
      </section>
      <section id="projects" className="md:scroll-mt-15">
        <Projects data={data.projects} />
      </section>
      <section id="contact" className="md:scroll-mt-15">
        <Contact data={data.get_in_touch} />
      </section>
    </div>
  );
}
