"use client";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {
  const { t } = useTranslation();
  const scrollToNext = () => {
    const target = document.querySelector<HTMLElement>("section + section");
    if (target) {
      gsap.to(window, {
        duration: 1,
        ease: "power.inOut",
        scrollTo: { y: target, offsetY: 50, autoKill: true },
      });
    }
  };
  const scrollToExp = () => {
    const target = document.querySelector<HTMLElement>("#experience");
    if (target) {
      gsap.to(window, {
        duration: 1,
        ease: "power.inOut",
        scrollTo: { y: target, offsetY: 50, autoKill: true },
      });
    }
  };
  const scrollToContact = () => {
    const target = document.querySelector<HTMLElement>("#contact");
    if (target) {
      gsap.to(window, {
        duration: 1,
        ease: "power.inOut",
        scrollTo: { y: target, offsetY: 50, autoKill: true },
      });
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen flex-col relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-30 left-20 w-2 h-2 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-pink-400 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-purple-300 rounded-full animate-float"></div>
        <div className="absolute bottom-60 right-20 w-2 h-2 bg-pink-300 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-float"></div>
      </div>
      <div>
        <Sparkles
          className="text-purple-400 text-6xl mb-4 animate-spin-y"
          size={48}
        />
      </div>
      <div className="text-4xl md:text-7xl font-bold text-white">
        {t("hero.intro.greeting")}
        <span className="bg-gradient-to-t from-purple-400 to-pink-400 bg-clip-text text-transparent animate-shimmer-text">
          <span className="inline">{t("hero.intro.firstname")}</span>
          <span className="hidden md:inline"> {t("hero.intro.lastname")}</span>
        </span>
      </div>
      <div className="mt-6">
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "Software Engineer",
            2000,
            "Responsive Designer",
            2000,
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
          className="text-gray-300 md:text-3xl text-xl font-medium"
        />
      </div>
      <div className="flex flex-row gap-6 mt-16 text-gray-300">
        <Link
          href="https://github.com/Bxvxrnchxxn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200 cursor-pointer hover:rotate-20 hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]"
        >
          <Github size={28} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/bxvxrnchxxn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200 cursor-pointer hover:-rotate-20 hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]"
        >
          <Linkedin size={28} />
        </Link>

        <Link
          href="mailto:bovorn09871@gmail.com?subject=Hello&body=Hi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200 cursor-pointer hover:rotate-20 
          hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]"
        >
          <Mail size={28} />
        </Link>
      </div>
      <div className="space-x-4 flex flex-col md:flex-row gap-4 py-12">
        <Button
          onClick={scrollToExp}
          className="cursor-pointer rounded-full text-lg py-6 px-6 font-bold bg-gradient-to-r from-purple-600 to-pink-600 
          hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]"
        >
          {t("hero.button1")}
        </Button>
        <Button
          onClick={scrollToContact}
          className="cursor-pointer rounded-full text-lg py-6 px-6 font-bold text-purple-400 border-2 border-purple-400 
          hover:bg-purple-400 hover:text-white transition-all duration-300 bg-transparent hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]  "
        >
          {t("hero.button2")}
        </Button>
      </div>
      <div
        onClick={scrollToNext}
        className="absolute bottom-8 animate-float text-gray-300 hover:scale-130 transition-transform duration-200 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)] hover:text-purple-400"
      >
        <ChevronDown size={28} />
      </div>
    </div>
  );
};

export default Hero;
