// components/RotatingTextMotion.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Honda", "Yamaha", "Toyota", "Suzuki", "Nissan"];

export default function RotatingTextMotion() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 overflow-hidden text-indigo-400 font-bold text-2xl relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute left-0 top-0 w-full flex items-center justify-center"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
