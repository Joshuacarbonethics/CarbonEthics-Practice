"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "CarbonEthics has helped us fulfill our commitment to ESG through the Telin for Community program, where, together with CarbonEthics, we have planted 15,000 mangrove trees in Tanjung Pakis. Not only have we planted them, but we have also ensured their care and survival to maximize their contribution to coastal communities.",
    name: "Budi Satria Dharma Purba",
    title: "Chief Executive Officer at Telin",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800", 
    logo: "/images/landing-page/Telin.png",
  },
  {
    id: 2,
    quote: "Through our partnership with CarbonEthics, we've successfully integrated blue carbon initiatives into our core sustainability targets. The transparency and real impact generated for local communities is truly commendable.",
    name: "Jane Doe",
    title: "Sustainability Director at Danone",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
    logo: "/images/landing-page/Danone.png",
  },
  {
    id: 3,
    quote: "Working with CarbonEthics allowed us to reach our net-zero goals faster while empowering coastal farmers. Their holistic approach to environmental and social impact makes them an ideal partner.",
    name: "John Smith",
    title: "Head of CSR at Traveloka",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
    logo: "/images/landing-page/Traveloka.png",
  }
];

// Trik Loop: Kita gandakan array jadi 3x lipat biar bisa geser ke kiri/kanan tanpa putus
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonial() {
  // Kita mulai dari index array tengah supaya ada kartu ngintip di kiri
  const [currentIndex, setCurrentIndex] = useState(testimonials.length); 
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isClickable, setIsClickable] = useState(true); // TAMBAHAN: State untuk lock tombol

  const nextSlide = () => {
    if (!isClickable) return; // Batalkan klik kalau lagi jalan
    setIsClickable(false); // Kunci tombol
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isClickable) return; // Batalkan klik kalau lagi jalan
    setIsClickable(false); // Kunci tombol
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleAnimationComplete = () => {
    if (currentIndex < testimonials.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + testimonials.length);
    } else if (currentIndex >= testimonials.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - testimonials.length);
    }
    setIsClickable(true); // Buka kunci tombol pas animasi selesai
  };

  // Nyalakan kembali animasi setelah "silent jump" selesai
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // Untuk navigasi titik (dots), kita hitung index aslinya
  const activeDotIndex = currentIndex % testimonials.length;

  return (
    <section className="w-full bg-[#FDFDFD] py-20 overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center text-[40px] text-[#403B3C] font-normal mb-12"
      >
        Testimonial
      </motion.h2>

      {/* Wrapper untuk area carousel */}
      <div className="w-full flex justify-center">
        <div className="w-[90vw] max-w-[1000px] relative">
          
          {/* Slider Track (w-full penting di sini agar 100% mengikuti lebar wrapper) */}
          <motion.div 
            className="flex gap-6 w-full"
            animate={{ x: `calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem)` }}
            transition={{ 
              type: "tween", 
              ease: [0.25, 1, 0.5, 1], // Custom easing biar mulus banget berhentinya
              duration: isTransitioning ? 0.6 : 0
            }}
            onAnimationComplete={handleAnimationComplete}
          >
            {extendedTestimonials.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                // 1. Ubah items-center menjadi items-stretch di sini:
                className="w-full shrink-0 bg-[#0A3E6D] rounded-[24px] md:rounded-[32px] p-6 md:p-10 flex flex-col md:flex-row gap-8 items-stretch shadow-lg"
              >
                {/* Left Side: Photo + Logo */}
                <div className="relative w-full md:w-[320px] h-[320px] shrink-0 rounded-2xl overflow-hidden bg-white/10">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-2 rounded-lg shadow-sm">
                    <img 
                      src={item.logo} 
                      alt="Company Logo" 
                      className="h-6 object-contain"
                      onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/100x40/e2e8f0/64748b?text=Logo` }}
                    />
                  </div>
                </div>

                {/* Right Side: Text Area */}
                {/* 2. Tambahkan py-2 opsional untuk ngerapihin jarak atas-bawah */}
                <div className="flex flex-col text-[#FDFDFD] flex-1 py-2">
                  <p className="text-[15px] md:text-[17px] leading-relaxed mb-8">
                    "{item.quote}"
                  </p>
                  
                  {/* 3. Tambahkan mt-auto di div ini biar selalu nempel di bawah */}
                  <div className="mt-auto">
                    <h4 className="text-[20px] font-normal">{item.name}</h4>
                    <p className="text-[13px] text-[#FDFDFD]/70 mt-1.5">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 mt-12">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border-[1.5px] border-[#0A3E6D] text-[#0A3E6D] flex items-center justify-center transition-colors hover:bg-[#0A3E6D] hover:text-[#FDFDFD]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="flex items-center gap-2.5">
          {testimonials.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => {
                if (!isClickable || activeDotIndex === idx) return; // Cegah spam klik
                setIsClickable(false);
                setIsTransitioning(true);
                setCurrentIndex(testimonials.length + idx);
              }}
              className={`rounded-full transition-all duration-300 ease-out ${
                activeDotIndex === idx 
                  ? "w-8 h-2 bg-[#0A3E6D]" 
                  : "w-2 h-2 bg-[#DDDEE0] hover:bg-[#0A3E6D]/50"
              }`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border-[1.5px] border-[#0A3E6D] text-[#0A3E6D] flex items-center justify-center transition-colors hover:bg-[#0A3E6D] hover:text-[#FDFDFD]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
}