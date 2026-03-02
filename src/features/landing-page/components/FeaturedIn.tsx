"use client";

import { motion, Variants } from "framer-motion";

const mediaLogos = [
  { id: 1, name: "Tempo", src: "/images/landing-page/Tempo.png" },
  { id: 2, name: "MetroTV", src: "/images/landing-page/Metro TV.png" },
  { id: 3, name: "tvOne", src: "/images/landing-page/Tvone.png" },
  { id: 4, name: "National Geographic", src: "/images/landing-page/National geographics.png" },
  { id: 5, name: "Fortune", src: "/images/landing-page/Fortune.png" },
  { id: 6, name: "Liputan 6", src: "/images/landing-page/Liputan 6.png" },
  { id: 7, name: "CNN Indonesia", src: "/images/landing-page/CNN Indonesia.png" },
  { id: 8, name: "Forbes", src: "/images/landing-page/Forbes.png" },
];

const duplicatedLogos = [...mediaLogos, ...mediaLogos];

export default function FeaturedIn() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="w-full bg-[#FDFDFD] pt-4 pb-16 overflow-hidden">
      <motion.div
        className="max-w-[1400px] mx-auto flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-[32px] text-center font-normal text-[#403B3C] mb-12"
        >
          As <span className="text-[#0A3E6D] font-medium">Featured</span> In
        </motion.h2>

        <motion.div variants={itemVariants} className="relative w-full flex items-center">
          <motion.div
            className="flex gap-6 w-max pl-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          >
            {duplicatedLogos.map((media, index) => (
              <div
                key={`${media.id}-${index}`}
                className="bg-[#F6F8FA] rounded-[16px] p-3 flex items-center justify-center w-[220px] h-[110px] shrink-0 shadow-sm cursor-pointer transition-transform duration-500 hover:-translate-y-1"
              >
                <img
                  src={media.src}
                  alt={`${media.name} logo`}
                  className="max-w-[90%] max-h-[85%] object-contain mx-auto opacity-70 transition-all duration-300 hover:opacity-100 filter grayscale hover:grayscale-0 hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/200x100/e2e8f0/64748b?text=${media.name}` }}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-[12px] text-[#403B3C]/50 mt-12 italic font-medium"
        >
          And Many More
        </motion.p>
      </motion.div>
    </section>
  );
}