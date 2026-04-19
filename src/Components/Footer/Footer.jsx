// import React from "react";
// import { BiLogoGmail } from "react-icons/bi";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaGithub,
//   FaWhatsapp,
// } from "react-icons/fa";

// export default function Footer() {
//   const socialLinks = [
//     {
//       icon: <FaFacebookF />,
//       href: "https://www.facebook.com/ddewan.jjamil",
//     },
//     {
//       icon: <FaLinkedinIn />,
//       href: "https://www.linkedin.com/in/mahfuz-billah/",
//     },
//     { icon: <FaGithub />, href: "https://github.com/JarifTheKing" },
//     {
//       icon: <FaWhatsapp />,
//       href: "https://wa.me/8801904947118?text=Hello%20Mahfuz!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
//     },
//     {
//       icon: <BiLogoGmail />,
//       href: "mailto:mahfuzbillah24@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Mahfuz,%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
//     },
//   ];

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const handleScroll = (e, href) => {
//     e.preventDefault();
//     const section = document.querySelector(href);
//     if (section) {
//       window.scrollTo({
//         top: section.offsetTop - 80,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <footer className="relative overflow-hidden bg-background-dark border-t border-white/10 rounded-t-2xl mt-6">
//       {/* Glow Effects */}
//       <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-600/20 blur-3xl rounded-full" />
//       <div className="absolute bottom-0 -right-24 w-80 h-80 bg-indigo-600/20 blur-3xl rounded-full" />

//       <div className="relative container mx-auto px-6 md:px-16 py-16 flex flex-col md:flex-row justify-between items-center gap-10">
//         {/* Brand */}
//         <div className="text-center md:text-left space-y-3">
//           <h3 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
//             Mahfuz Billah
//           </h3>
//           <p className="text-gray-400 text-sm md:text-base max-w-sm">
//             Front-End Developer specializing in React.js, modern JavaScript, and
//             building clean, scalable, and user-centric web experiences.
//           </p>
//         </div>

//         {/* Navigation */}
//         <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a
//                 href={link.href}
//                 onClick={(e) => handleScroll(e, link.href)}
//                 className="relative text-gray-300 hover:text-purple-400 transition duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all hover:after:w-full"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Social Icons */}
//         <div className="flex gap-4">
//           {socialLinks.map((link, idx) => (
//             <a
//               key={idx}
//               href={link.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative p-3 rounded-full bg-gray-900/60 backdrop-blur-lg border border-white/10 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
//             >
//               <span className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
//               <span className="relative z-10 text-lg">{link.icon}</span>
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="relative border-t border-white/10 py-6 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()}{" "}
//         <span className="text-gray-300">Mahfuz Billah</span>. Crafted with
//         passion & precision.
//       </div>
//     </footer>
//   );
// }

import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/ddewan.jjamil",
      color: "hover:bg-blue-600",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/mahfuz-billah/",
      color: "hover:bg-blue-700",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      href: "https://github.com/JarifTheKing",
      color: "hover:bg-gray-800",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      href: "https://wa.me/8801904947118?text=Hello%20Mahfuz!",
      color: "hover:bg-green-600",
    },
    {
      name: "Gmail",
      icon: <BiLogoGmail />,
      href: "mailto:mahfuzbillah24@gmail.com",
      color: "hover:bg-red-600",
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
    <footer className="relative mt-20 overflow-hidden  border-t border-white/5">
      {/* --- Animated Background Elements --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full animate-pulse delay-700" />

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Brand Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <h3 className="text-3xl font-black tracking-tighter text-white">
              MAHFUZ<span className="text-purple-500">.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs text-center md:text-left">
              Crafting high-performance, visually stunning web experiences with
              a focus on user-centric design and modern architecture.
            </p>
          </motion.div>

          {/* Dynamic Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-400 hover:text-white text-sm font-semibold uppercase tracking-widest transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </motion.nav>

          {/* Social Links with Ultra Hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-end gap-4"
          >
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-300 transition-all duration-300 backdrop-blur-xl group shadow-xl ${social.color} hover:text-white hover:border-transparent`}
                title={social.name}
              >
                <span className="text-xl group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                  {social.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] font-medium tracking-wide">
          <p className="text-gray-500 uppercase">
            © {new Date().getFullYear()} All Rights Reserved
          </p>

          <div className="flex items-center gap-2 text-gray-400">
            <span className="w-8 h-[1px] bg-white/20"></span>
            <p>
              Designed by{" "}
              <span className="text-white font-bold">Mahfuz Billah</span>
            </p>
            <span className="w-8 h-[1px] bg-white/20"></span>
          </div>

          <p className="text-gray-500 uppercase">
            Built with React & Framer Motion
          </p>
        </div>
      </div>

      {/* Extreme Bottom Decorative Gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-30" />
    </footer>
  );
}
