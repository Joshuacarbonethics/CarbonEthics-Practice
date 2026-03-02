"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isLangHovered, setIsLangHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const langTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsScrolled(window.scrollY > 50);
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { 
      name: "Climate Solutions", 
      subLinks: ["Carbon Offsetting", "Nature-based Solutions", "Corporate Advisory"] 
    },
    { 
      name: "Our Projects & Impacts", 
      subLinks: ["Mangrove Restoration", "Coral Reef Conservation", "Community Empowerment"] 
    },
    { 
      name: "Climate Resources", 
      subLinks: ["Articles", "Reports", "Case Studies"] 
    },
    { 
      name: "About Us", 
      subLinks: ["Our Story", "Team", "Careers", "Contact"] 
    },
  ];

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHoveredIndex(null), 300);
  };

  const handleLangMouseEnter = () => {
    if (langTimeoutRef.current) clearTimeout(langTimeoutRef.current);
    setIsLangHovered(true);
  };

  const handleLangMouseLeave = () => {
    langTimeoutRef.current = setTimeout(() => setIsLangHovered(false), 300);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isHidden ? -100 : 0,
        opacity: isHidden ? 0 : 1,
        paddingTop: isScrolled ? 12 : 24,
        paddingBottom: isScrolled ? 12 : 24,
        backgroundColor: isScrolled ? "rgba(10, 62, 109, 0.7)" : "rgba(10, 62, 109, 0)",
        backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
        boxShadow: isScrolled ? "0 10px 40px rgba(0,0,0,0.3)" : "0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ 
        y: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.3, ease: "easeInOut" },
        default: { duration: 0.4, ease: "easeInOut" }
      }}
      className="fixed top-0 left-0 w-full z-50 grid grid-cols-[1fr_auto_1fr] items-center px-[70px] text-[#FDFDFD]"
    >
      <div className="flex items-center gap-3 cursor-pointer group justify-start">
        <div className="relative overflow-hidden rounded-full flex items-center justify-center w-10 h-10">
          <img 
            src="/images/global/logo.png" 
            alt="CarbonEthics Logo" 
            className="object-contain transition-transform duration-500 ease-out group-hover:scale-110 w-full h-full" 
          />
        </div>
        <span className="font-semibold tracking-wide drop-shadow-md text-xl">
          CarbonEthics
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-8 text-sm font-medium justify-center">
        {navLinks.map((link, index) => (
          <div 
            key={index} 
            className="relative py-2"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="#" className="relative flex items-center gap-1.5 group drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              <span className="relative z-10 transition-colors duration-300">
                {link.name}
              </span>
              <span className="text-[10px] inline-block opacity-80">
                ▼
              </span>
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#FDFDFD] rounded-full transition-all duration-300 ease-out group-hover:w-full opacity-0 group-hover:opacity-100 shadow-[0_0_8px_rgba(253,253,253,0.8)]"></span>
            </Link>

            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-[#FDFDFD] text-[#0A3E6D] rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden py-3 w-64"
                >
                  {link.subLinks.map((subLink, subIndex) => (
                    <Link
                      key={subIndex}
                      href="#"
                      className="group/item flex items-center justify-between px-5 py-2.5 hover:bg-[#0A3E6D]/5 transition-colors"
                    >
                      <span className="relative font-semibold text-sm transition-transform duration-300 group-hover/item:translate-x-1">
                        {subLink}
                      </span>
                      <span className="text-xs opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0">
                        ➔
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-5 justify-end">
        <div 
          className="relative py-2"
          onMouseEnter={handleLangMouseEnter}
          onMouseLeave={handleLangMouseLeave}
        >
          <div className="group relative flex items-center gap-2 overflow-hidden rounded-full px-2.5 py-1.5 cursor-pointer transition-all border border-transparent hover:border-[#FDFDFD]/30 hover:bg-[#FDFDFD]/10">
            <div className="relative z-10 w-5 h-5 rounded-full overflow-hidden shadow-sm">
              <img src="https://flagcdn.com/w40/gb.png" alt="UK Flag" className="w-full h-full object-cover" />
            </div>
            
            <span className="relative z-10 text-[10px] opacity-80 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              ▼
            </span>
          </div>

          <AnimatePresence>
            {isLangHovered && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-0 top-full mt-4 bg-[#FDFDFD] rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden py-2 w-40"
              >
                <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#0A3E6D]/5 cursor-pointer transition-colors group/lang">
                  <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="w-5 h-5 rounded-full object-cover shadow-sm group-hover/lang:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-[#0A3E6D]">English</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#0A3E6D]/5 cursor-pointer transition-colors group/lang">
                  <img src="https://flagcdn.com/w40/id.png" alt="ID" className="w-5 h-5 rounded-full object-cover shadow-sm group-hover/lang:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-gray-500 group-hover/lang:text-[#0A3E6D] transition-colors">Bahasa</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button className={`group relative flex items-center gap-2 overflow-hidden rounded-full pl-5 pr-1.5 py-1.5 text-sm font-bold shadow-lg transition-colors duration-500 ease-out border-none outline-none ring-0 transform-gpu ${
          isScrolled 
            ? "bg-[#0A3E6D] text-[#FDFDFD] hover:bg-[#FDFDFD]" 
            : "bg-[#FDFDFD] text-[#0A3E6D] hover:bg-[#0A3E6D]"
        }`}>
          <span className={`relative z-10 transition-colors duration-300 ${
            isScrolled ? "group-hover:text-[#0A3E6D]" : "group-hover:text-[#FDFDFD]"
          }`}>
            Get Started
          </span>
          <div className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 shadow-sm ${
            isScrolled 
              ? "bg-[#FDFDFD] text-[#0A3E6D] group-hover:bg-[#0A3E6D] group-hover:text-[#FDFDFD]" 
              : "bg-[#0A3E6D] text-[#FDFDFD] group-hover:bg-[#FDFDFD] group-hover:text-[#0A3E6D]"
          }`}>
            <span className="text-lg leading-none transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ➔
            </span>
          </div>
          <div className={`absolute right-1.5 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full transition-all duration-700 ease-out group-hover:scale-[15] ${
            isScrolled ? "bg-[#FDFDFD]" : "bg-[#0A3E6D]"
          }`}></div>
        </button>

        <div className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ease-out ${
          isScrolled ? "bg-[#FDFDFD]/10 hover:bg-[#FDFDFD]/20 text-[#FDFDFD]" : "border-2 border-[#FDFDFD]/80 hover:bg-[#FDFDFD]/10 shadow-md"
        }`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 drop-shadow-md">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </div>
      </div>
    </motion.nav>
  );
}