"use client";
import Link from "next/link";
import { Sparkles, Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollToPlugin);

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("en");
  const OFFSET = 50;
  const { t, i18n, ready } = useTranslation();

  const pageItems = useMemo(
    () => [
      { href: "home", label: t("navbar.home") },
      { href: "about", label: t("navbar.about") },
      { href: "skills", label: t("navbar.skills") },
      { href: "experience", label: t("navbar.experience") },
      { href: "projects", label: t("navbar.projects") },
      { href: "contact", label: t("navbar.contact") },
    ],
    [t]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const id = a.dataset.scrollto;
      if (!id) return;
      e.preventDefault();

      if (menuOpen) toggleMenu();

      gsap.to(window, {
        duration: 1.5,
        ease: "power.in",
        scrollTo: { y: `#${id}`, offsetY: OFFSET, autoKill: true },
      });
    };

    document
      .querySelectorAll("[data-scrollto]")
      .forEach((a) => a.addEventListener("click", handler));
    return () => {
      document
        .querySelectorAll("[data-scrollto]")
        .forEach((a) => a.removeEventListener("click", handler));
    };
  }, [menuOpen]);

  function toggleMenu() {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      }, 350);
    } else {
      setMenuOpen(true);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  if (!ready) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 px-6 py-4 transition-colors duration-300
      ${scrolled ? "bg-slate-900" : "bg-transparent"}`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#home"
          data-scrollto="home"
          className="flex items-center gap-2 hover-scale"
        >
          <Sparkles className="text-purple-400 animate-float" />
          <span
            className="text-3xl font-semibold bg-gradient-to-t
            from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            {t("navbar.title")}
          </span>
        </a>

        {/* desktop menu */}
        <ul className="hidden md:flex gap-10 items-baseline">
          {pageItems.map((it) => (
            <li
              key={it.href}
              className="group flex flex-col cursor-pointer text-gray-100"
            >
              <Link href={"#" + it.href} data-scrollto={it.href}>
                {it.label}
              </Link>
              <span
                className="block h-0.5 w-0 bg-gradient-to-r
                from-purple-400 to-pink-400 transition-all duration-300
                group-hover:w-full"
              ></span>
            </li>
          ))}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex gap-1 items-baseline space-x-1 text-gray-300 hover:text-purple-400 
              transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <Globe size={20} className="self-center" />
                <div className="text-sm font-medium">
                  {language.toUpperCase()}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border border-slate-600 text-gray-100 cursor-pointer">
                <DropdownMenuItem
                  onClick={() => changeLanguage("en")}
                  className="focus:bg-slate-700 cursor-pointer focus:text-gray-100"
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => changeLanguage("th")}
                  className="focus:bg-slate-700 cursor-pointer focus:text-gray-100"
                >
                  ไทย
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>

        <button onClick={toggleMenu} className="md:hidden text-gray-100">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* mobile dropdown */}
      {(menuOpen || closing) && (
        <ul
          className={`md:hidden py-4 flex flex-col gap-4 absolute top-full left-0 right-0 w-full
         ${
           scrolled
             ? "bg-slate-900"
             : "bg-gradient-to-r from-slate-900 to-purple-900"
         }
         ${menuOpen ? "animate-slide-up" : "animate-fade-out"}`}
        >
          {pageItems.map((it, i) => (
            <li
              key={it.href}
              style={{ animationDelay: `${i * 0.3}s` }}
              className="border-b border-white pb-2 animate-fade-in-left text-gray-100 px-6"
            >
              <Link
                href={"#" + it.href}
                data-scrollto={it.href}
                onClick={toggleMenu}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
