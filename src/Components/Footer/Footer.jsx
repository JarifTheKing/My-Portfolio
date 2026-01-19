import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/ddewan.jjamil",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/mahfuz-billah/",
    },
    { icon: <FaGithub />, href: "https://github.com/JarifTheKing" },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/8801904947118?text=Hello%20Mahfuz!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
    },
    {
      icon: <BiLogoGmail />,
      href: "mailto:mahfuzbillah24@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Mahfuz,%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-background-dark border-t border-white/10 rounded-t-2xl mt-6">
      {/* Glow Effects */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 -right-24 w-80 h-80 bg-indigo-600/20 blur-3xl rounded-full" />

      <div className="relative container mx-auto px-6 md:px-16 py-16 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Brand */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Mahfuz Billah
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-sm">
            Front-End Developer specializing in React.js, modern JavaScript, and
            building clean, scalable, and user-centric web experiences.
          </p>
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="relative text-gray-300 hover:text-purple-400 transition duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-gray-900/60 backdrop-blur-lg border border-white/10 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 text-lg">{link.icon}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-gray-300">Mahfuz Billah</span>. Crafted with
        passion & precision.
      </div>
    </footer>
  );
}
