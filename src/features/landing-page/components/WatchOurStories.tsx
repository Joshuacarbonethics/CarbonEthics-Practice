"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const storiesData = [
  {
    id: 1,
    title: "Who We Are",
    description: "Discover our mission to restore the balance between people and the planet",
    embedId: "XxjcyRT-1LE",
  },
  {
    id: 2,
    title: "Pulang Pisau",
    description: "Seeing our field impact and community empowerment in Pulang Pisau",
    embedId: "XxjcyRT-1LE",
  },
  {
    id: 3,
    title: "Tanjungpakis Mangrove",
    description: "A closer look at our mangrove restoration efforts and blue carbon potential",
    embedId: "XxjcyRT-1LE",
  },
];

export default function WatchOurStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1100 : -1100,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 32 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1100 : -1100,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 32 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  const paginate = (newDirection: number) => {
    const nextIndex = currentIndex + newDirection;
    if (nextIndex >= 0 && nextIndex < storiesData.length) {
      setDirection(newDirection);
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <section className="w-full bg-[#FDFDFD] py-16 overflow-hidden">
      {/* Container Utama diperlebar sedikit ke 1450px */}
      <div className="max-w-[1450px] mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[28px] md:text-[36px] font-normal text-[#403B3C]"
          >
            Watch Our Stories
          </motion.h2>

          <div className="flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                currentIndex === 0 
                  ? "border-gray-100 text-gray-200 cursor-not-allowed" 
                  : "border-gray-200 text-[#403B3C] hover:bg-[#0A3E6D] hover:text-[#FDFDFD] shadow-sm bg-white"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              disabled={currentIndex === storiesData.length - 1}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                currentIndex === storiesData.length - 1 
                  ? "border-gray-100 text-gray-200 cursor-not-allowed" 
                  : "border-gray-200 text-[#403B3C] hover:bg-[#0A3E6D] hover:text-[#FDFDFD] shadow-sm bg-white"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Slider Area */}
        <div className="relative h-[580px] w-full flex items-start justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full flex flex-col items-start"
            >
              {/* Video Box: w-full mengikuti max-w-1450px */}
              <div className="relative w-full max-h-[480px] aspect-video rounded-[32px] overflow-hidden bg-black shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-100/50">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${storiesData[currentIndex].embedId}?rel=0&modestbranding=1`}
                  title={storiesData[currentIndex].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Text Area */}
              <div className="mt-8 text-left w-full px-2"> 
                <motion.h3 
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-[24px] md:text-[30px] font-medium text-[#0A3E6D] mb-2 tracking-tight"
                >
                  {storiesData[currentIndex].title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[15px] md:text-[17px] text-[#403B3C]/70 leading-relaxed font-light max-w-[750px]"
                >
                  {storiesData[currentIndex].description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}