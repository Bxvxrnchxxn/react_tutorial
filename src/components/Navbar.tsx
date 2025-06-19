"use client";
import Link from "next/link";
import { Sparkles, Menu } from "lucide-react";
import { useState } from "react";

const pageItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white px-6 py-4 absolute w-screen z-50">
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

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <Menu size={28} />
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden mt-4 px-6 flex flex-col gap-4">
          {pageItems.map((item) => (
            <li key={item.href} className="border-b border-white pb-2">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
