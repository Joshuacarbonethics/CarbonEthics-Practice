"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const aboutImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1200" },
  { id: 2, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200" },
  { id: 3, src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200" },
  { id: 4, src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200" },
  { id: 5, src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200" },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide ke kanan setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="w-full bg-[#FDFDFD] py-16 overflow-hidden">
      <motion.div
        className="max-w-[1400px] mx-auto px-6 md:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-start">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="px-4 py-1.5 rounded-full border border-[#0A3E6D] text-[#0A3E6D] text-[12px] font-bold uppercase tracking-widest">
                About CarbonEthics
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-[38px] md:text-[52px] font-medium text-[#0A3E6D] leading-[1.1] tracking-tight">
              Your Climate Solution In <br /> Blue Carbon & Beyond
            </motion.h2>
          </div>

          <div className="flex flex-col justify-between items-end text-right lg:pt-8">
            <motion.p variants={itemVariants} className="text-[16px] md:text-[18px] text-[#403B3C] leading-relaxed mb-6 font-light max-w-[600px]">
              CarbonEthics is a tech-enabled <span className="font-bold">Ecosystem Restoration Company</span> specializing in carbon project development, pioneering in the blue carbon ecosystem. We bridge ecosystem restoration, climate finance, and regulatory expertise to create high-integrity, scalable carbon solutions.
            </motion.p>
            
            {/* PERBAIKAN ANIMASI BUTTON DI SINI */}
            <motion.button variants={itemVariants} whileTap={{ scale: 0.98 }} className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-[#0A3E6D] pl-8 pr-2 py-2 text-sm font-bold text-white transition-all duration-500 shadow-md">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0A3E6D]">
                Discover More
              </span>
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0A3E6D] transition-all duration-300 group-hover:bg-[#0A3E6D] group-hover:text-white">
                <span className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-0.5">➔</span>
              </div>
              <div className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white transition-all duration-700 ease-out group-hover:scale-[15]"></div>
            </motion.button>
            {/* AKHIR PERBAIKAN BUTTON */}
            
          </div>
        </div>
      </motion.div>

      {/* Snap Carousel: Absolute Centering */}
      <div className="relative w-full h-[300px] md:h-[400px] mt-6 flex items-center justify-center overflow-hidden">
        {aboutImages.map((image, index) => {
          const total = aboutImages.length;
          
          const normalizedCurrent = currentIndex % total;
          let offset = index - normalizedCurrent;
          
          if (offset > Math.floor(total / 2)) {
            offset -= total;
          } else if (offset < -Math.floor(total / 2)) {
            offset += total;
          }

          const isActive = offset === 0;
          const isWrapping = offset === Math.floor(total / 2);

          return (
            <motion.div
              key={image.id}
              initial={false}
              animate={{
                x: `calc(${offset * 100}% + ${offset * 24}px)`,
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.4,
                filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                zIndex: isActive ? 10 : 0,
              }}
              transition={{ 
                duration: isWrapping ? 0 : 0.8, 
                ease: isWrapping ? "linear" : [0.22, 1, 0.36, 1] 
              }}
              className="absolute w-[300px] md:w-[850px] h-full rounded-[40px] overflow-hidden shadow-xl border border-gray-100 cursor-pointer"
            >
              <img
                src={image.src}
                alt="CarbonEthics Action"
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {aboutImages.map((_, index) => {
          const activeDotIndex = currentIndex % aboutImages.length;
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)} 
              className={`h-2 transition-all duration-500 rounded-full ${
                activeDotIndex === index ? 'w-10 bg-[#0A3E6D]' : 'w-2 bg-[#0A3E6D]/20 hover:bg-[#0A3E6D]/40'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
} 