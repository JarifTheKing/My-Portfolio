import React from "react";
import { motion } from "framer-motion";
import projectsData from "../../../public/data.json";

// Motion Variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, type: "spring", stiffness: 120, damping: 18 },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-background-dark text-gray-300 overflow-hidden rounded-2xl my-6"
    >
      {/* Glow Background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full" />

      <div className="relative container mx-auto px-6 md:px-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center md:text-left bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          My Projects
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-900/70 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Hover Overlay */}
              {/* <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col justify-center items-center gap-4 bg-black/60 backdrop-blur-md transition-opacity duration-300"
              >
                {project.demoLink && (
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    className="px-6 py-2 text-sm font-semibold rounded-full border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white transition-all"
                  >
                    Live Preview
                  </motion.a>
                )}

                {project.codeLink && (
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    className="px-6 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md hover:shadow-purple-500/40 transition-all"
                  >
                    Source Code
                  </motion.a>
                )}
              </motion.div> */}
              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col justify-center items-center gap-4 bg-black/70 backdrop-blur-md transition-opacity duration-300 px-4"
              >
                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  {project.demoLink && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      className="px-6 py-2 text-sm font-semibold rounded-full border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white transition-all text-center"
                    >
                      Live Preview
                    </motion.a>
                  )}

                  {project.codeLink && (
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      className="px-6 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md hover:shadow-purple-500/40 transition-all text-center"
                    >
                      Source Code
                    </motion.a>
                  )}
                </div>

                {/* Divider */}
                <span className="w-12 h-[1px] bg-purple-500/50 my-2" />

                {/* Technologies */}
                <div className="flex flex-wrap justify-center gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-purple-300 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Content */}
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-purple-300 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
