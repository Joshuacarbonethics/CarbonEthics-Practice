"use client";

import { motion, Variants } from "framer-motion";

const solutions = [
  {
    title: "CSR Tree Planting",
    description: "Climate action by planting mangroves to restore the community-based blue carbon ecosystem.",
    image: "/images/solution-1.jpg",
  },
  {
    title: "Nature-based Carbon Project",
    description: "Explore our pre-assessed nature-based projects.",
    image: "/images/solution-2.jpg",
  },
  {
    title: "Landscape Restoration",
    description: "Explore our pre-assessed nature-based projects.",
    image: "/images/solution-3.jpg",
  }
];

export default function Solutions() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.section 
      className="relative pt-0 pb-16 text-center w-full flex flex-col items-center bg-[#FDFDFD] z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <motion.h2 
        variants={itemVariants}
        className="text-[56px] font-normal text-[#403B3C] mb-4 px-4"
      >
        Our Solutions to Achieve Your <span className="text-[#0A3E6D] font-semibold">Decarbonization</span> Goals
      </motion.h2>

      <div className="w-full px-16 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1200px]">
          {solutions.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`relative group overflow-hidden h-[600px] cursor-pointer shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-[#FDFDFD]/10 ${
                index % 2 === 0 
                  ? "rounded-tr-[64px] rounded-bl-[64px]" 
                  : "rounded-tl-[64px] rounded-br-[64px]"
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 backdrop-blur-xl [mask-image:linear-gradient(to_bottom,black_35%,transparent_55%)] transition-all duration-500 group-hover:backdrop-blur-2xl" />
              
              <div className="absolute top-0 left-0 w-full p-10 text-[#FDFDFD] text-left flex flex-col z-10">
                <h3 className="text-[28px] font-medium mb-3 leading-tight drop-shadow-md">{item.title}</h3>
                <p className="text-[16px] text-[#FDFDFD]/95 mb-8 leading-relaxed pr-4 drop-shadow-md">
                  {item.description}  
                </p>
                <div className="flex items-center gap-3 font-semibold text-[16px] mb-6 transition-transform duration-300 group-hover:translate-x-2 drop-shadow-md">
                  View Details 
                  <div className="bg-[#FDFDFD] text-[#0A3E6D] rounded-full w-7 h-7 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0A3E6D] group-hover:text-[#FDFDFD] shadow-sm">
                    <span className="text-[12px] leading-none">➔</span>
                  </div>
                </div>
                <div className="w-full h-px bg-[#FDFDFD]/70 transition-transform duration-500 origin-left group-hover:scale-x-110" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}