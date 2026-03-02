"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const impactData = [
  {
    id: "pulang-pisau",
    label: "Pulang Pisau",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200", 
    tags: ["Carbon Project", "Peatland"],
    title: "Pulang Pisau PRESERVE - Peatland Restoration and Fire Prevention",
  },
  {
    id: "tanjungpakis",
    label: "Tanjungpakis",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200", 
    tags: ["Mangrove", "Community"],
    title: "Tanjungpakis Mangrove Restoration Initiative",
  },
  {
    id: "bintan",
    label: "Bintan",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200",
    tags: ["Blue Carbon", "Conservation"],
    title: "Bintan Blue Carbon Conservation Project",
  },
  {
    id: "bali",
    label: "Bali",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200",
    tags: ["Coral Reef", "Marine"],
    title: "Bali Coral Reef Restoration and Marine Protection",
  },
  {
    id: "kepulauan-seribu",
    label: "Kepulauan Seribu",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200",
    tags: ["Mangrove", "Biodiversity"],
    title: "Kepulauan Seribu Biodiversity Protection",
  },
];

export default function RealImpact() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll logic (5 seconds per item)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % impactData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const activeContent = impactData[activeIndex];

  return (
    <section className="relative w-full py-24 px-16 overflow-hidden min-h-[900px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000" 
          alt="Forest background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" /> 
      </div>

      {/* Glassmorphism Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[1400px] mx-auto bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[32px] p-12 lg:p-16 shadow-2xl"
      >
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <h2 className="text-[#FDFDFD] text-[48px] font-normal leading-tight tracking-tight drop-shadow-md">
            Real Impact <br /> in Action
          </h2>
          <p className="text-[#FDFDFD] text-[14px] max-w-[400px] text-left md:text-right leading-relaxed drop-shadow-md">
            Discover our nature-based projects, from mangrove and peatland restoration to blue carbon initiatives, built on measurable impact and local community empowerment
          </p>
        </div>

        {/* Inner White Content Card */}
        <div className="bg-[#FDFDFD] rounded-[24px] p-8 lg:p-10 flex flex-col md:flex-row gap-12 shadow-lg">
          
          {/* Sidebar Menu */}
          <div className="w-full md:w-[25%] flex flex-col gap-2 border-l-[1.5px] border-gray-200/80 relative my-2">
            {impactData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left py-4 pl-8 text-[15px] relative transition-colors duration-300 ${
                    isActive 
                      ? "text-[#0A3E6D] font-medium" 
                      : "text-gray-400 hover:text-gray-600 font-normal"
                  }`}
                >
                  {/* Seamless layoutId container + Hourglass draining effect */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute left-[-1.5px] top-0 bottom-0 w-[3px] bg-[#0A3E6D]/20 rounded-full overflow-hidden"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <motion.div 
                        key={`progress-${activeIndex}`}
                        className="absolute left-0 bottom-0 w-full bg-[#0A3E6D] rounded-full" 
                        initial={{ height: "100%" }}
                        animate={{ height: "0%" }}
                        transition={{ duration: 5, ease: "linear" }}
                      />
                    </motion.div>
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Area */}
          <div className="w-full md:w-[75%] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col w-full"
              >
                <div className="w-full h-[320px] rounded-[16px] overflow-hidden mb-6 shadow-sm">
                  <img 
                    src={activeContent.image} 
                    alt={activeContent.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="flex gap-3 mb-4">
                  {activeContent.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="border border-gray-300 rounded-md px-3 py-1 text-[11px] text-[#403B3C] uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-[28px] text-[#403B3C] font-normal leading-tight mb-8">
                  {activeContent.title}
                </h3>

                {/* Using the standard button formatting */}
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex w-max items-center gap-4 overflow-hidden rounded-full bg-[#0A3E6D] group-hover:bg-[#0A3E6D] pl-6 pr-2 py-2 text-sm font-bold text-[#FDFDFD] transition-colors duration-500 ease-out border-none outline-none ring-0 transform-gpu"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#FDFDFD]">
                    Learn More
                  </span>
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#FDFDFD] text-[#0A3E6D] transition-all duration-300 group-hover:bg-[#FDFDFD] group-hover:text-[#0A3E6D] shadow-sm">
                    <span className="text-sm leading-none transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ➔
                    </span>
                  </div>
                  <div className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#0A3E6D] transition-all duration-700 ease-out group-hover:scale-[15]"></div>
                </motion.button>

              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}