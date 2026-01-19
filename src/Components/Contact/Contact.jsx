import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

// Parent stagger variant
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

// Child fade-up variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({ name: "", email: "", message: "" });

    Swal.fire({
      title: "Message Sent 🚀",
      html: `Dear <span class="text-purple-500 font-bold">${e.target.name.value}</span>, your message has been delivered successfully.`,
      icon: "success",
      confirmButtonColor: "#a855f7",
    });
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: "Email", value: "mahfuzbillah24@gmail.com" },
    { icon: <FaPhone />, label: "Phone", value: "+880 1904 947 118" },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Mymensingh, Bangladesh",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-background-dark text-gray-300 overflow-hidden rounded-2xl my-6"
    >
      {/* Decorative Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full" />

      <div className="relative container mx-auto px-6 md:px-16">
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-center md:text-left bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Let’s Work Together
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mb-14 text-gray-400 text-center md:text-left"
        >
          Have a project in mind or just want to say hello? Feel free to reach
          out — I’m always open to discussing new ideas.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Contact Info Cards Here */}
          <motion.div
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-600/20 text-purple-400 text-2xl group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <p className="font-semibold text-white">{info.label}</p>
                  <p className="text-gray-400">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col gap-4 p-8 rounded-3xl bg-gray-900/50 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-950 border border-purple-500/40 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-950 border border-purple-500/40 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-white"
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-5 py-3 rounded-xl bg-gray-950 border border-purple-500/40 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-white"
            />

            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              Send Message →
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
