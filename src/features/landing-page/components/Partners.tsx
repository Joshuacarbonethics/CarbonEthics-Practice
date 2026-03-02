"use client";

import { motion, Variants } from "framer-motion";

const partners = [
  { 
    id: 1, 
    name: "Unilever", 
    src: "/images/landing-page/Unilever.png"
  },
  { 
    id: 2, 
    name: "Transjakarta", 
    src: "/images/landing-page/Transjakarta.png"
  },
  { 
    id: 3, 
    name: "Danone", 
    src: "/images/landing-page/Danone.png"
  },
  { 
    id: 4, 
    name: "Allianz", 
    src: "/images/landing-page/Allianz.png"
  },
  { 
    id: 5, 
    name: "Nutrifood", 
    src: "/images/landing-page/Nutrifood.png"
  },
  { 
    id: 6, 
    name: "Telin", 
    src: "/images/landing-page/Telin.png"
  },
  { 
    id: 7, 
    name: "Traveloka", 
    src: "/images/landing-page/Traveloka.png"
  },
  { 
    id: 8, 
    name: "Planet Ban", 
    src: "/images/landing-page/Planet ban.png"
  },
  { 
    id: 9, 
    name: "Ernst & Young", 
    src: "/images/landing-page/Ey.png"
  },
  { 
    id: 10, 
    name: "GoTo", 
    src: "/images/landing-page/Goto.png"
  },
  { 
    id: 11, 
    name: "Garnier", 
    src: "/images/landing-page/Garnier.png"
  },
  { 
    id: 12, 
    name: "Y20 Indonesia 2022", 
    src: "/images/landing-page/Y20 indonesia 2022.png"
  }
];

export default function Partners() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="w-full bg-[#FDFDFD] pt-0 pb-16 px-16">
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
          Trusted by <span className="text-[#0A3E6D] font-medium">500+ Partners</span> from Government to Top Businesses
        </motion.h2>

        <div className="grid grid-cols-6 gap-6 w-full">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              className="group bg-[#F6F8FA] rounded-[16px] p-3 flex items-center justify-center h-[110px] shadow-sm cursor-pointer"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  className="max-w-[90%] max-h-[90%] object-contain mx-auto grayscale opacity-70 transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/200x100/e2e8f0/64748b?text=${partner.name}` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          variants={itemVariants}
          className="text-[12px] text-[#403B3C]/50 mt-12"
        >
          And Many More
        </motion.p>
      </motion.div>
    </section>
  );
}