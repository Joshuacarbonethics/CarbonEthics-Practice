"use client";

import { motion, Variants } from "framer-motion";

const awardsData = [
  {
    id: 1,
    title: "B20 Sustainability 4.0 Award 2022 Finalist",
    image: "/images/landing-page/awards/b20.png",
  },
  {
    id: 2,
    title: "JICA Accelerator Program 2022 Finalist",
    image: "/images/landing-page/awards/jica.png",
  },
  {
    id: 3,
    title: "Blue Water Heroes Award 2023 Finalist",
    image: "/images/landing-page/awards/blue-water.png",
  },
  {
    id: 4,
    title: "One Young World Global Ambassador",
    image: "/images/landing-page/awards/one-young-world.png",
  },
  {
    id: 5,
    title: "ISRA 2024 Initiatives of The Year",
    image: "/images/landing-page/awards/isra.png",
  },
  {
    id: 6,
    title: "Startup World Cup Regional Indonesia 2023 Finalist",
    image: "/images/landing-page/awards/startup-world-cup.png",
  },
  {
    id: 7,
    title: "Rising Changemaker Award 2025",
    image: "/images/landing-page/awards/rising-changemaker.png",
  },
];

export default function AwardsRecognition() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="w-full bg-[#FDFDFD] py-16 overflow-hidden">
      <motion.div
        className="w-full flex flex-col items-center" // max-w-[1400px] dihapus biar bisa mentok layar
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-[32px] text-center font-normal text-[#403B3C] mb-12"
        >
          Awards and Recognition
        </motion.h2>

        {/* Kontainer Flex Justify Between (Stretching dari ujung kiri ke kanan) */}
        <motion.div 
          variants={itemVariants} 
          className="w-full flex justify-between items-start px-2 md:px-6 gap-2"
        >
          {awardsData.map((award) => (
            <div
              key={award.id}
              className="flex flex-col items-center justify-start flex-1 px-1 gap-3 md:gap-5"
            >
              <div className="h-[30px] sm:h-[40px] md:h-[60px] w-full flex items-center justify-center">
                <img
                  src={award.image}
                  alt={award.title}
                  className="max-w-full max-h-full object-contain mx-auto transition-transform duration-300 hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/150x60/e2e8f0/64748b?text=Award` }}
                />
              </div>
              
              <p className="text-[7px] sm:text-[9px] md:text-[12px] text-center font-medium text-[#0A3E6D]/90 leading-tight md:leading-snug">
                {award.title}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}