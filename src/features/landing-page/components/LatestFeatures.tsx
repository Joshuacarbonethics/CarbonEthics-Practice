"use client";

import { motion, Variants } from "framer-motion";

const featuresData = [
  {
    id: 1,
    date: "July 2025",
    title: "Jakarta Governor and Transjakarta Plant Mangroves at CarbonEthics Kepulauan...",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800",
  },
  {
    id: 2,
    date: "July 2025",
    title: "Seagrass Education Academy: Creating Indonesia's Next Generation of Seagrass...",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800",
  },
  {
    id: 3,
    date: "July 2025",
    title: "MIFX Plant Mangroves with CarbonEthics to Celebrate 25th Anniversary",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800",
  }
];

export default function LatestFeatures() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="w-full bg-[#0A3E6D] py-24 px-6 md:px-16 overflow-hidden">
      <motion.div
        className="max-w-[1400px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 px-2 gap-6">
          <motion.h2 variants={itemVariants} className="text-[36px] md:text-[48px] font-medium text-white leading-[1.1] max-w-[600px]">
            The Latest Features from CarbonEthics
          </motion.h2>
          
          {/* Minimalist Slide Button */}
          <motion.button 
            variants={itemVariants}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center bg-white rounded-full pl-8 pr-2 py-2 transition-all duration-500 ease-[0.22, 1, 0.36, 1] hover:pr-4"
          >
            <span className="text-[#0A3E6D] font-bold text-sm mr-4 select-none">
              See All
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A3E6D] text-white overflow-hidden relative">
              <motion.span 
                className="absolute transition-transform duration-500 ease-[0.22, 1, 0.36, 1] group-hover:translate-x-8"
              >
                ➔
              </motion.span>
              <motion.span 
                className="absolute -translate-x-8 transition-transform duration-500 ease-[0.22, 1, 0.36, 1] group-hover:translate-x-0"
              >
                ➔
              </motion.span>
            </div>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {featuresData.map((item, index) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              className={`relative group h-[600px] cursor-pointer bg-white transition-all duration-700 ease-[0.22, 1, 0.36, 1] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${
                index % 2 === 0 
                  ? "rounded-tr-[64px] rounded-bl-[64px]" 
                  : "rounded-tl-[64px] rounded-br-[64px]"
              }`}
            >
              <div className="relative h-[65%] w-full overflow-hidden rounded-inherit">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-10 flex flex-col justify-between h-[35%]">
                <div>
                  <span className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.15em] mb-4 block">
                    {item.date}
                  </span>
                  <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1A1A1A] leading-[1.3] group-hover:text-[#0A3E6D] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 text-[#0A3E6D] font-bold text-[13px] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  LEARN MORE <span className="text-[16px]">➔</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}