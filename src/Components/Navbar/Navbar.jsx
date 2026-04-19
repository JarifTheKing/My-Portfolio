// import React, { useState, useEffect } from "react";
// import { RiMenuFold4Fill } from "react-icons/ri";
// import { FaRegWindowClose } from "react-icons/fa";

// const menuItems = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY + 200;
//       menuItems.forEach((item) => {
//         const section = document.querySelector(item.href);
//         if (section && scrollPos >= section.offsetTop) {
//           setActiveSection(item.name.toLowerCase());
//         }
//       });
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLinkClick = (e, href) => {
//     e.preventDefault();
//     const section = document.querySelector(href);
//     if (section) {
//       window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
//       setIsOpen(false);
//     }
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full border-b-0 z-50 backdrop-blur-2xl bg-gradient-to-r from-purple-900/30 via-slate-900/40 to-indigo-900/30 rounded-lg border-white/10 shadow-[0_10px_40px_rgba(99,102,241,0.25)]">
//       <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-16">
//         {/* Logo */}
//         <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(139,92,246,0.8)]">
//           Mahfuz Billah
//         </h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium">
//           {menuItems.map((item) => {
//             const isActive = activeSection === item.name.toLowerCase();
//             return (
//               <li key={item.name} className="relative">
//                 <a
//                   href={item.href}
//                   onClick={(e) => handleLinkClick(e, item.href)}
//                   className={`transition-all duration-300 ${
//                     isActive
//                       ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
//                       : "text-slate-200 hover:text-purple-300"
//                   }`}
//                 >
//                   {item.name}
//                 </a>

//                 {/* Glossy underline */}
//                 <span
//                   className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 shadow-[0_0_12px_rgba(99,102,241,0.9)] transition-all duration-300 ${
//                     isActive ? "w-full opacity-100" : "w-0 opacity-0"
//                   }`}
//                 />
//               </li>
//             );
//           })}
//         </ul>

//         {/* Mobile Button */}
//         <div className="md:hidden z-50">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-cyan-300 text-3xl drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]"
//           >
//             {isOpen ? <FaRegWindowClose /> : <RiMenuFold4Fill />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full w-72 transform transition-transform duration-300 md:hidden z-40 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="h-full bg-gradient-to-br from-purple-900/40 via-slate-900/70 to-indigo-900/40 backdrop-blur-2xl border-l border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.35)] rounded-l-3xl pt-24 px-8">
//           <ul className="flex flex-col gap-6">
//             {menuItems.map((item) => (
//               <li key={item.name}>
//                 <a
//                   href={item.href}
//                   onClick={(e) => handleLinkClick(e, item.href)}
//                   className={`block text-lg font-semibold tracking-wide transition-all ${
//                     activeSection === item.name.toLowerCase()
//                       ? "text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]"
//                       : "text-slate-200 hover:text-purple-300"
//                   }`}
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuFold4Fill } from "react-icons/ri";
import { FaRegWindowClose } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let currentSection = "home";

      menuItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Adjust threshold for detection
          if (rect.top <= 150) {
            currentSection = item.name.toLowerCase();
          }
        }
      });

      setActiveSection((prev) =>
        prev !== currentSection ? currentSection : prev,
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- FIXED NAVIGATION LOGIC ---
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const section = document.getElementById(targetId);

    if (section) {
      const offset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-4 md:pt-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          relative flex items-center justify-between transition-all duration-500 ease-in-out pointer-events-auto
          ${
            scrolled
              ? "w-[95%] md:w-[75%] rounded-2xl py-3 px-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-2xl"
              : "w-full md:w-[90%] py-5 px-10 bg-transparent"
          }
        `}
      >
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl md:text-2xl font-black tracking-tighter cursor-pointer"
        >
          <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent uppercase">
            Mahfuz Billah
          </span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <li key={item.name} className="relative px-4 py-2">
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`relative z-10 text-sm font-bold transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl -z-0 shadow-lg shadow-indigo-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          {/* <ThemeToggle /> */}
          <button className="hidden md:block px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform active:scale-95">
            Hire Me
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-indigo-500 dark:text-cyan-400 text-2xl z-[110]"
          >
            {isOpen ? <FaRegWindowClose /> : <RiMenuFold4Fill />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen w-full bg-white/95 dark:bg-slate-950/98 backdrop-blur-2xl z-[105] flex flex-col items-center justify-center gap-4 pointer-events-auto"
          >
            {menuItems.map((item, i) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative px-8 py-4"
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`relative z-10 text-4xl md:text-5xl font-black transition-colors uppercase tracking-tighter ${
                      isActive
                        ? "text-white"
                        : "text-slate-900 dark:text-white/50"
                    }`}
                  >
                    {item.name}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="activePillMobile"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl -z-0 shadow-xl shadow-indigo-500/40"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              );
            })}

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 px-10 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-widest"
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
