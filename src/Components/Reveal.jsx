const Reveal = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      {" "}
      {/* Added wrapper for safety */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1] }} // "Bezier" curve for smoother motion
      >
        {children}
      </motion.div>
    </div>
  );
};
