import { NavLink } from "react-router-dom"; 
import Hero from "../section/HeroSection"
import ProductCard from "../components/Card";
import About from "../section/About"
import Timeline from "../section/Timeline";
import Testimonial from "../section/Testimonial";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";



export default function HomePage() {
  const [result, setResult] = useState([]);
  

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    const res = await fetch(
        "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/honda/modelyear/2015?format=json"
      );
      const data = await res.json();
      const sliced = data.Results.slice(0, 4); 

      const cuki = sliced.map((car) => {
        const sanitized = car.Model_Name
          .toLowerCase()
          .replace(/\s+/g, "-") 
          .replace(/[^a-z0-9\-]/g, "");
        const image = `/cars/${sanitized}.jpg`;

          return { ...car, image };
      })

       setResult(cuki)
  }


  return (
    <div className="min-h-screen text-white">
      <main className="relative isolate px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            > 
          <Hero/>
        </motion.div>
        <div className="mt-[50px]" data-aos="fade-up">
          <div className="mx-auto max-w-2xl px-4  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">   
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Populer</h2>
              <p className="mt-2 text-gray-400 text-sm">Beberapa list populer dari honda</p>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-3" >
              {result.map((item) => (
                <ProductCard
                  key={item.Model_ID}
                  modelId={item.Model_ID}
                  image={item.image}
                  modelName={item.Model_Name}
                  makeName={item.Make_Name}
                  color="2015"
                  price="Rp 250 Jutaan"
                />
                ))}
            </div>
          </div>
        </div>
        <About/>
        <Timeline/>
        <Testimonial/>
      </main>
    </div>
  );
}
