"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh+80px)] w-full flex flex-col justify-center px-16 overflow-hidden bg-[#0A3E6D]">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.15, filter: "blur(4px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/images/landing-page/nature-bg.jpg" 
          className="w-full h-full object-cover"
          alt="Nature Background"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] space-y-8 mt-[270px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-[140px] text-[#FDFDFD] leading-[0.9] tracking-tighter drop-shadow-lg"
          >
            Protect & <br /> <span className="text-[#FDFDFD]/90">Restore Nature</span>
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-4xl text-[#FDFDFD]/80 max-w-full leading-relaxed mt-8"
          >
            Your Climate Solution in Blue Carbon and Beyond
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex items-center gap-6 pt-10"
          >
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-[#0A3E6D] group-hover:bg-[#FDFDFD] pl-8 pr-3 py-3 text-base font-bold text-[#FDFDFD] transition-colors duration-500 ease-out border-none outline-none ring-0 transform-gpu"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0A3E6D]">
                Discover Our Solution 
              </span>
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#FDFDFD] text-[#0A3E6D] transition-all duration-300 group-hover:bg-[#0A3E6D] group-hover:text-[#FDFDFD] shadow-sm">
                <span className="text-xl leading-none transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ➔
                </span>
              </div>
              <div className="absolute right-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#FDFDFD] transition-all duration-700 ease-out group-hover:scale-[15]"></div>
            </motion.button>
            
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-[#FDFDFD] group-hover:bg-[#0A3E6D] pl-8 pr-3 py-3 text-base font-bold text-[#0A3E6D] transition-colors duration-500 ease-out border-none outline-none ring-0 transform-gpu"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#FDFDFD]">
                Start Planting
              </span>
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#0A3E6D] text-[#FDFDFD] transition-all duration-300 group-hover:bg-[#FDFDFD] group-hover:text-[#0A3E6D] shadow-sm">
                <span className="text-xl leading-none transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ➔
                </span>
              </div>
              <div className="absolute right-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#0A3E6D] transition-all duration-700 ease-out group-hover:scale-[15]"></div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.6, type: "spring", bounce: 0.6 }}
        className="absolute bottom-32 right-16 z-10"
      >
        <img 
          src="/images/global/bcorp-logo.png" 
          alt="Certified B Corporation" 
          className="h-20 object-contain drop-shadow-md" 
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-[80px] bg-[#FDFDFD] rounded-t-[80px] z-20"></div>
    </section>
  );
}