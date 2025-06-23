"use client";
import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const pageItems = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];
const OFFSET = 50;

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

    /* bind → ทุกลิงก์ที่มี data-scrollto */
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

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-4 transition-colors duration-300
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
            Portfolio
          </span>
        </a>

        {/* desktop menu */}
        <ul className="hidden md:flex gap-10">
          {pageItems.map((it) => (
            <li key={it.href} className="group flex flex-col cursor-pointer text-gray-100">
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
        </ul>

        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* mobile dropdown */}
      {(menuOpen || closing) && (
        <ul
          className={`md:hidden mt-4 py-4 flex flex-col gap-4
         ${
           scrolled
             ? "bg-slate-900"
             : "bg-gradient-to-r from-slate-900 to-purple-900"
         }
         ${menuOpen ? "animate-slide-up" : "animate-fade-out-left"}`}
        >
          {pageItems.map((it, i) => (
            <li
              key={it.href}
              style={{ animationDelay: `${i * 0.3}s` }}
              className="border-b border-white pb-2 animate-fade-in-left"
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
