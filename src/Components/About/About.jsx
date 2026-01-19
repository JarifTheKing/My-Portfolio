import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "TailwindCSS",
  "UI/UX Design",
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const skillContainerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const skillItemVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-background-dark text-gray-300 overflow-hidden rounded-2xl my-6"
    >
      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-16 relative z-10 text-center md:text-left">
        {/* Title */}
        <motion.h2
          variants={textVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-4xl md:text-5xl font-extrabold text-purple-500 mb-6"
        >
          About Me
        </motion.h2>

        {/* Accent Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full mb-8 mx-auto md:mx-0" />

        {/* Description */}
        <motion.p
          variants={textVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-lg md:text-xl max-w-3xl mb-8 mx-auto md:mx-0 text-gray-200 leading-relaxed"
        >
          I’m a passionate Front-End Developer specializing in building modern,
          responsive, and accessible web applications. I focus on clean
          architecture, intuitive user experiences, and performance-driven UI
          development.
        </motion.p>

        <motion.p
          variants={textVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-sm md:text-base text-gray-400 max-w-3xl mb-12 mx-auto md:mx-0"
        >
          I enjoy turning complex problems into elegant digital solutions.
        </motion.p>

        {/* Skills */}
        <motion.div
          variants={skillContainerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center md:justify-start gap-4"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              variants={skillItemVariant}
              whileHover={{
                scale: 1.12,
                backgroundColor: "#7c3aed",
                color: "#ffffff",
                boxShadow: "0 0 20px rgba(124,58,237,0.6)",
              }}
              className="px-5 py-2.5 bg-gray-900/50 backdrop-blur-md border border-purple-500/40 rounded-full text-sm font-semibold transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
