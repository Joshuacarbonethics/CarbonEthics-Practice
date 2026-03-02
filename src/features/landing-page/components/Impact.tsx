"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

const impacts = [
  {
    id: "balance",
    title: "Restoring Climate Balance",
    description: "To restore our earth, we need to keep a dynamic balance between life and climate. We believe that conserving the existing ecosystem & carbon sequestration is essential in achieving climate positivity.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000"
  },
  {
    id: "biodiversity",
    title: "Protecting Indonesia Nature and Its Biodiversity",
    description: "The variety of all life forms on earth supports healthy ecosystems that we rely on. We strive to keep biodiverse ecosystems with our restoration initiative.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000"
  },
  {
    id: "community",
    title: "Empowering Local Communities",
    description: "Communities have always been placed at the heart of our work. With every support given, you are advancing social impact by directly enhancing the livelihoods of our community partners.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000"
  }
];

export default function Impact() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % impacts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="w-full bg-[#0A3E6D] py-16 px-16 overflow-hidden">
      <motion.div 
        className="max-w-[1400px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-center text-[56px] text-[#FDFDFD] font-medium mb-12 tracking-wide"
        >
          Your <span className="text-[#E4D0A0]">Climate Action</span> Will Transform Into
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col gap-6 justify-center">
            {impacts.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  onClick={() => setActiveIndex(index)}
                  className="relative pl-10 cursor-pointer group py-2"
                >
                  <div className="absolute left-0 top-0 w-[4px] h-full bg-[#FDFDFD]/10 group-hover:bg-[#FDFDFD]/30 rounded-full overflow-hidden">
                    {isActive && (
                      <motion.div
                        key={activeIndex}
                        className="absolute left-0 bottom-0 w-full bg-[#E4D0A0] rounded-full"
                        initial={{ height: "100%" }}
                        animate={{ height: "0%" }}
                        transition={{ duration: 5, ease: "linear" }}
                      />
                    )}
                  </div>
                  
                  <h3 
                    className={`text-[22px] font-medium mb-2.5 transition-colors duration-500 ease-out ${
                      isActive ? "text-[#FDFDFD]" : "text-[#FDFDFD]/30 group-hover:text-[#FDFDFD]/60"
                    }`}
                  >
                    {item.title}
                  </h3>
                  
                  <p 
                    className={`text-[16px] leading-relaxed transition-colors duration-500 ease-out pr-4 ${
                      isActive ? "text-[#FDFDFD]/90" : "text-[#FDFDFD]/20 group-hover:text-[#FDFDFD]/40"
                    }`}
                  >
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            variants={imageVariants}
            className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-[#062541] self-stretch"
          >
            {impacts.map((item, index) => (
              <motion.img
                key={item.id}
                src={item.image}
                initial={false}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0, 
                  scale: activeIndex === index ? 1 : 1.05 
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
                alt={item.title}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
                fetchPriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}