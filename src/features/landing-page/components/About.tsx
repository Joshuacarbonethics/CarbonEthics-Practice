"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="w-full bg-[#FDFDFD] pt-20 pb-8 px-16">
      <motion.div
        className="max-w-[1400px] mx-auto flex flex-col gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div 
          variants={itemVariants} 
          className="relative w-full rounded-[32px] overflow-hidden bg-[#E8E9EB] min-h-[400px] flex items-center shadow-sm"
        >
          <div className="absolute left-0 top-0 w-[55%] h-full">
            <img 
              src="https://images.unsplash.com/photo-1597113366853-9a93ad3efeed?q=80&w=1000" 
              alt="About CarbonEthics" 
              className="w-full h-full object-cover [mask-image:linear-gradient(to_right,black_60%,transparent_100%)]" 
            />
          </div>

          <div className="relative z-10 w-full flex justify-end">
            <div className="w-1/2 p-12 lg:pr-24 lg:pl-8 flex flex-col justify-center items-start">
              <h2 className="text-[40px] font-medium text-[#403B3C] mb-5">
                About CarbonEthics
              </h2>
              <p className="text-[16px] text-[#403B3C]/80 leading-relaxed mb-8">
                CarbonEthics is a tech-enabled Ecosystem Restoration Company specializing in carbon project development, pioneering in the blue carbon ecosystem. We bridge ecosystem restoration, climate finance, and regulatory expertise to create high-integrity, scalable carbon solutions.
              </p>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-[#0A3E6D] group-hover:bg-[#FDFDFD] pl-8 pr-3 py-3 text-base font-bold text-[#FDFDFD] transition-colors duration-500 ease-out border-none outline-none ring-0 transform-gpu"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0A3E6D]">
                  Discover More
                </span>
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#FDFDFD] text-[#0A3E6D] transition-all duration-300 group-hover:bg-[#0A3E6D] group-hover:text-[#FDFDFD] shadow-sm">
                  <span className="text-xl leading-none transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ➔
                  </span>
                </div>
                <div className="absolute right-3 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#FDFDFD] transition-all duration-700 ease-out group-hover:scale-[15]"></div>
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="relative w-full aspect-[21/9] md:aspect-[16/9] lg:aspect-[21/9] rounded-[32px] overflow-hidden shadow-lg bg-[#062541]"
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/XxjcyRT-1LE?si=Jha80Rg2CAXsnL_E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
}