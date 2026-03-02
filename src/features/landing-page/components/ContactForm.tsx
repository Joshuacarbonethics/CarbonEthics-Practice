"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    // Section pembungkus dengan warna Navy (mengikuti section atasnya) 
    // agar border radius terlihat memotong warna biru muda (Frost)
    <section className="w-full bg-[#0A3E6D] overflow-hidden">
      
      {/* Container utama dengan warna Frost dan Border Radius di bagian atas */}
      <div className="w-full bg-[#BFDAE8] pt-20 pb-10 px-6 md:px-16 rounded-t-[80px]">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header Form */}
          <div className="flex flex-col md:flex-row justify-between mb-10 relative">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[48px] md:text-[64px] font-medium text-[#0A3E6D] leading-tight"
            >
              Let's <br /> Collaborate!
            </motion.h2>
            
            <div className="md:max-w-[500px] mt-6 md:mt-0 text-right">
              <p className="text-[14px] md:text-[16px] text-[#403B3C] leading-relaxed mb-4">
                We welcome all partners including corporate partners, landowners, NGOs, research institutions, and governments to collaborate on climate action.
              </p>
              <p className="text-[14px] md:text-[16px] text-[#403B3C] mb-4 font-medium">Fill the form and let's get connected!</p>
              
              {/* Social Icons */}
              <div className="flex justify-end gap-4">
                <a href="#" className="text-[#0A3E6D] hover:opacity-70 transition-opacity">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </a>
                <a href="#" className="text-[#0A3E6D] hover:opacity-70 transition-opacity">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
                </a>
                <a href="#" className="text-[#0A3E6D] hover:opacity-70 transition-opacity">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.58.28-1.25.07-2.39.1-3.42.1L12 19c-4.12 0-6.41-.12-6.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L3 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.58-.28 1.25-.07 2.39-.1 3.42-.1L12 5c4.12 0 6.41.12 6.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1.5px] bg-[#0A3E6D]/20 mb-16" />

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Photo Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-full lg:w-[35%]"
            >
              <div className="rounded-[40px] overflow-hidden shadow-sm aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=800" 
                  alt="CarbonEthics Member" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Form Grid */}
            <form className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#0A3E6D]">Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g., Bimo Soewadji" className="w-full bg-white rounded-xl p-4 text-[14px] shadow-sm outline-none border-none focus:ring-1 focus:ring-[#0A3E6D]/20" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#0A3E6D]">Institutions <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g., CarbonEthics" className="w-full bg-white rounded-xl p-4 text-[14px] shadow-sm outline-none border-none focus:ring-1 focus:ring-[#0A3E6D]/20" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#0A3E6D]">Email <span className="text-red-500">*</span></label>
                <input type="email" placeholder="e.g., bimosoewadji@gmail.com" className="w-full bg-white rounded-xl p-4 text-[14px] shadow-sm outline-none border-none focus:ring-1 focus:ring-[#0A3E6D]/20" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#0A3E6D]">Phone Number <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g., 085291919494" className="w-full bg-white rounded-xl p-4 text-[14px] shadow-sm outline-none border-none focus:ring-1 focus:ring-[#0A3E6D]/20" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#0A3E6D]">LinkedIn or Website</label>
                <input type="text" placeholder="e.g., bimosoewadji.com" className="w-full bg-white rounded-xl p-4 text-[14px] shadow-sm outline-none border-none focus:ring-1 focus:ring-[#0A3E6D]/20" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#0A3E6D]">How do you know us? <span className="text-red-500">*</span></label>
                <select className="w-full bg-white rounded-xl p-4 text-[14px] shadow-sm outline-none border-none appearance-none cursor-pointer">
                  <option value="">Choose an option</option>
                  <option value="social-media">Social Media</option>
                  <option value="event">Event</option>
                </select>
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#0A3E6D]">Which product / service you interested in? <span className="text-red-500">*</span></label>
                <select className="w-full bg-white rounded-xl p-4 text-[14px] shadow-sm outline-none border-none appearance-none cursor-pointer">
                  <option value="">Choose an option</option>
                </select>
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#0A3E6D]">How can we help you?</label>
                <textarea placeholder="Let us know more details?" className="w-full bg-white rounded-xl p-4 text-[14px] shadow-sm outline-none border-none h-32 resize-none" />
              </div>
              
              <div className="md:col-span-2 flex items-center gap-3 mt-2">
                <input type="checkbox" id="newsletter" className="w-4 h-4 rounded border-gray-300 text-[#0A3E6D]" />
                <label htmlFor="newsletter" className="text-[13px] text-[#403B3C]">Get updates on CarbonEthics activities, climate solutions, and carbon insights</label>
              </div>

              <div className="md:col-span-2 mt-6">
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 bg-[#0A3E6D] text-white px-10 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-[#082d4f] transition-all"
                >
                  Submit 
                  <span className="bg-white text-[#0A3E6D] w-6 h-6 rounded-full flex items-center justify-center text-xs">➔</span>
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}