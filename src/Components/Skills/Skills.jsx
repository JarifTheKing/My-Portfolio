import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPalette,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skillsData = [
  { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-600" /> },
  {
    name: "JavaScript",
    level: 80,
    icon: <FaJsSquare className="text-yellow-500" />,
  },
  { name: "React", level: 85, icon: <FaReact className="text-blue-400" /> },
  {
    name: "TailwindCSS",
    level: 90,
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  {
    name: "UI/UX Design",
    level: 80,
    icon: <FaPalette className="text-pink-500" />,
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const [animatedLevels, setAnimatedLevels] = useState(skillsData.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setAnimatedLevels((prev) =>
        prev.map((val, i) => (val < skillsData[i].level ? val + 1 : val)),
      );
    }, 15);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-background-dark text-gray-300 relative overflow-hidden rounded-2xl my-6"
    >
      {/* Decorative Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl " />

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-500 mb-12 text-center md:text-left">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative p-6 rounded-2xl bg-gray-900/50 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-2xl">{skill.icon}</div>
                <span className="font-semibold text-lg text-white">
                  {skill.name}
                </span>

                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="ml-auto text-sm font-semibold text-purple-400"
                >
                  {isInView ? `${animatedLevels[idx]}%` : "0%"}
                </motion.span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                  style={{
                    width: isInView ? `${animatedLevels[idx]}%` : "0%",
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
