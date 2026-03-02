"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="w-full bg-[#FDFDFD] py-16 px-6 md:px-16 overflow-hidden">
      <motion.div
        className="max-w-[1400px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

          {/* Kolom Kiri */}
          <div className="lg:col-span-2 flex flex-col gap-4 md:gap-6">

            {/* Kartu Lebar Atas */}
            <motion.div variants={itemVariants} className="relative h-[320px] md:h-[340px] rounded-[32px] overflow-hidden group shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200"
                alt="Aerial Mangrove View"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#535D67]/95 via-[#535D67]/80 to-transparent"></div>

              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-center h-full max-w-[90%] md:max-w-[75%]">
                <h2 className="text-[28px] md:text-[32px] font-medium text-[#FDFDFD] mb-4">
                  About CarbonEthics
                </h2>
                <p className="text-[13px] md:text-[14px] text-[#FDFDFD]/90 leading-relaxed mb-8">
                  CarbonEthics is a tech-enabled Ecosystem Restoration Company specializing in carbon project development, pioneering in the blue carbon ecosystem. We bridge ecosystem restoration, climate finance, and regulatory expertise to create high-integrity, scalable carbon solutions.
                </p>
                
                {/* Tombol Discover More dengan animasi khas Navbar */}
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-max flex items-center gap-3 overflow-hidden rounded-full bg-[#FDFDFD] pl-6 pr-2 py-2 text-[14px] font-bold text-[#0A3E6D] transition-colors duration-500 ease-out border-none outline-none ring-0 shadow-sm transform-gpu"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#FDFDFD]">
                    Discover More
                  </span>
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#0A3E6D] text-[#FDFDFD] transition-all duration-300 group-hover:bg-[#FDFDFD] group-hover:text-[#0A3E6D] shadow-sm">
                    <span className="text-[14px] leading-none transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ➔
                    </span>
                  </div>
                  <div className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#0A3E6D] transition-all duration-700 ease-out group-hover:scale-[15]"></div>
                </motion.button>

              </div>
            </motion.div>

            {/* Baris Bawah Kolom Kiri: 2 Kartu Kecil */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 h-[220px] md:h-[240px]">
              <motion.div variants={itemVariants} className="relative rounded-[32px] overflow-hidden group shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800"
                  alt="Drone Mapping"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
              <motion.div variants={itemVariants} className="relative rounded-[32px] overflow-hidden group shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800"
                  alt="Community Empowerment"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </div>

          </div>

          {/* Kolom Kanan (Kartu Tinggi) */}
          <motion.div variants={itemVariants} className="lg:col-span-1 h-[400px] lg:h-auto relative rounded-[32px] overflow-hidden group shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=800"
              alt="Farmer holding mangrove saplings"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}