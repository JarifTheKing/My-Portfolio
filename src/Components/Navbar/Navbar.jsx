import React, { useState, useEffect } from "react";
import { RiMenuFold4Fill } from "react-icons/ri";
import { FaRegWindowClose } from "react-icons/fa";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      menuItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section && scrollPos >= section.offsetTop) {
          setActiveSection(item.name.toLowerCase());
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full border-b-0 z-50 backdrop-blur-2xl bg-gradient-to-r from-purple-900/30 via-slate-900/40 to-indigo-900/30 rounded-lg border-white/10 shadow-[0_10px_40px_rgba(99,102,241,0.25)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-16">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(139,92,246,0.8)]">
          Mahfuz Billah
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium">
          {menuItems.map((item) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <li key={item.name} className="relative">
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                      : "text-slate-200 hover:text-purple-300"
                  }`}
                >
                  {item.name}
                </a>

                {/* Glossy underline */}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 shadow-[0_0_12px_rgba(99,102,241,0.9)] transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-300 text-3xl drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]"
          >
            {isOpen ? <FaRegWindowClose /> : <RiMenuFold4Fill />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 transform transition-transform duration-300 md:hidden z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full bg-gradient-to-br from-purple-900/40 via-slate-900/70 to-indigo-900/40 backdrop-blur-2xl border-l border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.35)] rounded-l-3xl pt-24 px-8">
          <ul className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`block text-lg font-semibold tracking-wide transition-all ${
                    activeSection === item.name.toLowerCase()
                      ? "text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                      : "text-slate-200 hover:text-purple-300"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
