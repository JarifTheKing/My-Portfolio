// import React, { useState } from "react";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Swal from "sweetalert2";

// // Parent stagger variant
// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.2 } },
// };

// // Child fade-up variant
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 120, damping: 20 },
//   },
// };

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setFormData({ name: "", email: "", message: "" });

//     Swal.fire({
//       title: "Message Sent 🚀",
//       html: `Dear <span class="text-purple-500 font-bold">${e.target.name.value}</span>, your message has been delivered successfully.`,
//       icon: "success",
//       confirmButtonColor: "#a855f7",
//     });
//   };

//   const contactInfo = [
//     { icon: <FaEnvelope />, label: "Email", value: "mahfuzbillah24@gmail.com" },
//     { icon: <FaPhone />, label: "Phone", value: "+880 1904 947 118" },
//     {
//       icon: <FaMapMarkerAlt />,
//       label: "Location",
//       value: "Mymensingh, Bangladesh",
//     },
//   ];

//   return (
//     <section
//       id="contact"
//       className="relative py-24 bg-background-dark text-gray-300 overflow-hidden rounded-2xl my-6"
//     >
//       {/* Decorative Glow */}
//       <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full" />
//       <div className="absolute bottom-0 -left-32 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full" />

//       <div className="relative container mx-auto px-6 md:px-16">
//         {/* Title */}
//         <motion.h2
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="text-4xl md:text-5xl font-extrabold mb-4 text-center md:text-left bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
//         >
//           Let’s Work Together
//         </motion.h2>

//         {/* Subtitle */}
//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="max-w-2xl mb-14 text-gray-400 text-center md:text-left"
//         >
//           Have a project in mind or just want to say hello? Feel free to reach
//           out — I’m always open to discussing new ideas.
//         </motion.p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//           {/* Contact Info Cards Here */}
//           <motion.div
//             className="flex flex-col gap-6"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             {contactInfo.map((info, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={fadeUp}
//                 className="group flex items-center gap-4 p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
//               >
//                 <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-600/20 text-purple-400 text-2xl group-hover:scale-110 transition-transform">
//                   {info.icon}
//                 </div>
//                 <div>
//                   <p className="font-semibold text-white">{info.label}</p>
//                   <p className="text-gray-400">{info.value}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Contact Form */}
//           <motion.form
//             onSubmit={handleSubmit}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             className="relative flex flex-col gap-4 p-8 rounded-3xl bg-gray-900/50 backdrop-blur-xl border border-white/10 shadow-2xl"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-5 py-3 rounded-xl bg-gray-950 border border-purple-500/40 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-white"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-5 py-3 rounded-xl bg-gray-950 border border-purple-500/40 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-white"
//             />
//             <textarea
//               name="message"
//               placeholder="Tell me about your project..."
//               value={formData.message}
//               onChange={handleChange}
//               required
//               rows="5"
//               className="w-full px-5 py-3 rounded-xl bg-gray-950 border border-purple-500/40 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-white"
//             />

//             <button
//               type="submit"
//               className="mt-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
//             >
//               Send Message →
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      Swal.fire({
        title: "Message Sent!",
        text: `Thanks ${formData.name}, I'll get back to you shortly.`,
        icon: "success",
        background: "#030712",
        color: "#f8fafc",
        showConfirmButton: false,
        timer: 2500,
        customClass: {
          popup: "rounded-[2rem] border border-white/10 backdrop-blur-xl",
        },
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const contactItems = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      val: "jarifanuwar7@gmail.com",
      link: "mailto:mahfuzbillah24@gmail.com",
      color: "from-rose-500/20",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      val: "+880 1904 947 118",
      link: "https://wa.me/8801904947118",
      color: "from-emerald-500/20",
    },
    {
      icon: <FaPhone />,
      label: "Contact",
      val: "+880 1560 016 585",
      link: "tel:+8801560016585",
      color: "from-blue-500/20",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      val: "Rajshahi, BD",
      color: "from-purple-500/20",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 bg-[#030712] overflow-hidden flex items-center justify-center font-sans"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-600/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section - Fixed Sizing */}
          <div className="text-center mb-12 md:mb-20">
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-purple-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                Available for Projects
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1]"
            >
              Let's craft <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400">
                your vision.
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">
            {/* Left Column: Bento Items */}
            <div className="lg:col-span-5 flex flex-col gap-4 w-full">
              {contactItems.map((item, i) => (
                <motion.a
                  href={item.link || "#"}
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                  variants={fadeInUp}
                  whileHover={{
                    x: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                  }}
                  className="group p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl flex items-center gap-4 md:gap-6 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} to-transparent flex items-center justify-center text-xl md:text-2xl text-white border border-white/10 group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 mb-0.5 md:mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-white/90 font-medium truncate group-hover:text-white transition-colors">
                      {item.val}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Social Footer Card */}
              <motion.div
                variants={fadeInUp}
                className="mt-2 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br from-purple-600/10 to-indigo-600/10 border border-purple-500/20 flex flex-wrap justify-between items-center gap-4"
              >
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ y: -4 }}
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-lg text-white hover:bg-purple-500 transition-all"
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -4 }}
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-lg text-white hover:bg-gray-700 transition-all"
                  >
                    <FaGithub />
                  </motion.a>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold italic tracking-tighter text-lg md:text-xl leading-none">
                    Mahfuz Billah
                  </p>
                  <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mt-1">
                    Creative Developer
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Interactive Form */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-7 w-full h-full"
            >
              <div className="relative bg-[#0a0f1d]/60 border border-white/10 backdrop-blur-3xl rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl h-full">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 md:space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div className="relative group/input">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-transparent text-sm md:text-base"
                        placeholder="Name"
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-500 text-xs md:text-sm transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-purple-500 font-medium">
                        Name
                      </label>
                    </div>
                    <div className="relative group/input">
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-transparent text-sm md:text-base"
                        placeholder="Email"
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-500 text-xs md:text-sm transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-purple-500 font-medium">
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="relative group/input">
                    <textarea
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-transparent resize-none text-sm md:text-base"
                      placeholder="Message"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-500 text-xs md:text-sm transition-all peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-purple-500 font-medium">
                      Project Details
                    </label>
                  </div>

                  <motion.button
                    whileHover={{
                      scale: 1.01,
                      boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-sm md:text-lg tracking-widest uppercase transition-all flex items-center justify-center gap-3 md:gap-4 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Ignite Project{" "}
                        <FaPaperPlane className="text-xs md:text-sm" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
