import React, { useMemo } from "react";
import {
  FaReact,
  FaBolt,
  FaPaintBrush,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import BannerBg from "../../assets/banner-bg.jpg";
import ProfileImageSrc from "../../assets/Mahfuz-Billah.png";
import { BiLogoGmail } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HeroSection() {
  const shapes = useMemo(() => {
    return [...Array(8)].map(() => {
      const size = 20 + Math.random() * 50;
      const colors = [
        `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      ];
      return {
        size,
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
        color: colors[Math.floor(Math.random() * colors.length)],
        xOffset: 5 - Math.random() * 10,
        yOffset: -10 + Math.random() * 10,
        duration: 6 + Math.random() * 4,
        delay: Math.random() * 2,
      };
    });
  }, []);

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

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center px-6 md:px-16 py-10 md:py-20 overflow-hidden rounded-2xl"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(12px)",
          opacity: 0.5,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-70" />

      {/* Animated Shapes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        {shapes.map((shape, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full opacity-20"
            style={{
              width: shape.size,
              height: shape.size,
              top: shape.top,
              left: shape.left,
              backgroundColor: shape.color,
            }}
            animate={{ y: [0, shape.yOffset, 0], x: [0, shape.xOffset, 0] }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay,
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Text */}
        <motion.div
          className="text-center md:text-left md:max-w-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 font-medium mb-4 px-4 py-1 rounded-full mx-auto md:mx-0 backdrop-blur-md border border-green-500/30">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for work
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Junior Frontend{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          <p className="text-gray-300 mt-4 max-w-md text-lg mx-auto md:mx-0 leading-relaxed">
            Skilled in React.js and modern JavaScript, passionate about building
            clean, responsive, and user-friendly web interfaces.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-6 justify-center md:justify-start text-white font-semibold">
            {[
              { num: "10+", label: "Projects" },
              { num: "5+", label: "Technologies" },
              { num: "0", label: "Clients" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
              >
                <p className="text-2xl text-blue-500">{stat.num}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 text-center"
              whileHover={{ scale: 1.05 }}
            >
              View My Work →
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/17zUDkz7n2XYT6MvxhvhQL31wSgCsB9vi/view?usp=sharing"
              target="_blank"
              className="relative inline-block rounded-lg overflow-hidden px-0 py-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-[2px] rounded-lg">
                <div className="bg-gray-800 rounded-lg px-6 py-3 text-purple-500 font-semibold text-center">
                  Download Resume
                </div>
              </div>
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center md:justify-start mt-4 md:mt-6">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/20 border border-purple-700 rounded-full backdrop-blur-md hover:bg-purple-700 hover:text-white transition-all duration-300 shadow-md"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Profile Image + Floating Badges */}
        <div className="relative mb-10 md:mb-0 flex justify-center md:justify-end">
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl"
            animate={{
              scale: [1, 1.05, 1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full p-1"
              style={{
                background:
                  "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                maskImage:
                  "radial-gradient(circle, black 90%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(circle, black 90%, transparent 100%)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <img
              src={ProfileImageSrc}
              alt="Profile"
              className="relative w-full h-full rounded-full object-cover"
            />
          </motion.div>

          {/* Floating Badges */}
          {[
            {
              icon: <FaReact />,
              label: "React",
              position: "top-0 left-0",
              delay: 0,
            },

            {
              icon: <TbBrandNextjs />,

              label: "Next.js",
              position: "bottom-0 left-0",

              delay: 0,
            },
            {
              icon: <FaBolt />,
              label: "Fast",
              position: "bottom-0 right-0",
              delay: 0.3,
            },
            {
              icon: <FaPaintBrush />,
              label: "Design",
              position: "bottom-2/4 -left-16",
              delay: 0.6,
            },
          ].map((badge, idx) => (
            <motion.div
              key={idx}
              className={`absolute ${badge.position} bg-purple-700 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-md text-xs md:text-sm`}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: badge.delay,
                ease: "easeInOut",
              }}
            >
              {badge.icon} {badge.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
