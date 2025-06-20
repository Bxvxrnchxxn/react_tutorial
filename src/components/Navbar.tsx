"use client";
import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const pageItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      }, 350);
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 text-white px-6 py-4  w-screen z-50 ${
        scrolled ? "bg-slate-900" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#home"
          className="flex items-center gap-2 hover-scale transition-transform duration-300"
        >
          <Sparkles className="animate-float text-purple-400" />
          <span className="ml-2 text-3xl font-semibold bg-gradient-to-t from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </a>

        <ul className="hidden md:flex flex-row items-center gap-10">
          {pageItems.map((item) => (
            <li key={item.href} className="group flex flex-col cursor-pointer">
              <Link href={item.href}>{item.label}</Link>
              <span className="block h-0.5 w-0 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {(menuOpen || closing) && (
        <ul
          className={`md:hidden mt-4 py-4 flex flex-col gap-4
            ${
              !scrolled
                ? "bg-gradient-to-r from-slate-900 to-purple-900"
                : "bg-slate-900"
            }
            ${menuOpen ? "animate-slide-up" : "animate-fade-out-left"}`}
        >
          {pageItems.map((item, index) => (
            <li
              key={item.href}
              className="border-b border-white pb-2 animate-fade-in-left"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <Link href={item.href} onClick={toggleMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
