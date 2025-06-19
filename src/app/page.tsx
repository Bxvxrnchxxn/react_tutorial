import React from "react";
import "./globals.css";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
}
