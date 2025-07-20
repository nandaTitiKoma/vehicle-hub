import SectionWrapper from "../components/SectionWrapper"
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const words = [
  { text: "Civic", gradient: "from-indigo-400 to-purple-400" },
  { text: "Accord", gradient: "from-green-400 to-teal-400" },
  { text: "CR-V", gradient: "from-pink-400 to-red-400" },
  { text: "Pilot", gradient: "from-yellow-400 to-orange-400" },
  { text: "Fit", gradient: "from-blue-400 to-cyan-400" }
];
export default function Hero(){
 const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  
    return(
    <SectionWrapper>
      <div className="mx-auto w-full pt-32 sm:pt-48 lg:pt-56 text-left cihuy">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center relative">
            Eksplorasi Data Kendaraan Dari <br />Brand Honda {" "}
            <span className="inline-block relative min-w-[150px] h-[1.3em] align-middle overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index].text}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`inline-block absolute left-0 top-0 bg-gradient-to-r ${words[index].gradient} bg-clip-text text-transparent`}
                >
                  {words[index].text}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-300 text-center">
            Jelajahi berbagai informasi tentang merk dan model kendaraan dari database resmi NHTSA.
          </p>
        </div>
        <div className="mt-10 flex justify-center gap-x-6">
          <Link to="/search">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(99, 102, 241, 0.4)"
              }}
              whileTap={{ scale: 0.85 }}
              className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Mulai Sekarang
            </motion.button>
          </Link>
        </div>
      </div>
    </SectionWrapper>

    )
}