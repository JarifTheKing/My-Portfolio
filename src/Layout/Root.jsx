// import React from "react";
// import Navbar from "../Components/Navbar/Navbar";
// import { Outlet } from "react-router";
// import HeroSection from "../Components/HeroSection/HeroSection";
// import About from "../Components/About/About";
// import Skills from "../Components/Skills/Skills";
// import Projects from "../Components/Projects/Projects";
// import Contact from "../Components/Contact/Contact";
// import Footer from "../Components/Footer/Footer";

// const Root = () => {
//   return (
//     <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-300 antialiased min-h-screen flex flex-col px-4 sm:px-6 lg:px-8">
//       <nav className="sticky z-50">
//         <Navbar></Navbar>
//       </nav>
//       <main className="mt-20">
//         <HeroSection></HeroSection>
//         <About></About>
//         <Skills></Skills>
//         <Projects></Projects>
//         <Contact></Contact>
//       </main>
//       <footer>
//         <Footer></Footer>
//       </footer>
//     </div>
//   );
// };

// export default Root;



import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import HeroSection from "../Components/HeroSection/HeroSection";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Root = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    // transition-colors থিম পরিবর্তনের সময় স্মুথনেস দেয়
    <div className="relative bg-white dark:bg-slate-950 font-display text-slate-900 dark:text-slate-200 antialiased min-h-screen transition-colors duration-500 selection:bg-indigo-500/30">
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 z-[110] origin-left"
        style={{ scaleX }}
      />

      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 space-y-32 md:space-y-64">
        <section id="home"><HeroSection /></section>
        <Reveal><section id="about"><About /></section></Reveal>
        <Reveal><section id="skills"><Skills /></section></Reveal>
        <Reveal><section id="projects"><Projects /></section></Reveal>
        <Reveal><section id="contact"><Contact /></section></Reveal>
      </main>

      <footer className="mt-64 border-t border-slate-200 dark:border-white/5 bg-white/50 dark:bg-slate-900/40 backdrop-blur-2xl py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Root;