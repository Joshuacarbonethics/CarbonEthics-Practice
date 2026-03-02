"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A3E6D] text-white pt-20 pb-10 px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Newsletter / Subscribe Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-16 border-b border-white/20 mb-16">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-medium mb-2">Keep in touch!</h3>
            <p className="text-sm text-white/70">You will subscribe to our exclusive content on all our carbon conservation efforts and gain access to our newsletter!</p>
          </div>
          <button className="flex items-center gap-4 bg-white text-[#0A3E6D] px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
            Subscribe 
            <span className="text-lg leading-none">➔</span>
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img src="/images/global/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-bold">CarbonEthics</span>
            </div>
            <div className="flex gap-4 mb-8">
              {/* Social Icons */}
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0A3E6D] transition-all cursor-pointer text-sm">in</div>
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0A3E6D] transition-all cursor-pointer text-sm">ig</div>
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0A3E6D] transition-all cursor-pointer text-sm">yt</div>
            </div>
            <img src="/images/global/bcorp-logo.png" alt="B Corp" className="h-16 object-contain opacity-80" />
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm mb-2 uppercase tracking-widest text-white/50">Our Climate Solutions</h4>
            <Link href="#" className="text-sm hover:text-white/60 transition-colors">CSR Tree Planting</Link>
            <Link href="#" className="text-sm hover:text-white/60 transition-colors">Climate Consultation</Link>
            <Link href="#" className="text-sm hover:text-white/60 transition-colors">Nature-based Carbon Project</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm mb-2 uppercase tracking-widest text-white/50">Our Projects & Impacts</h4>
            <Link href="#" className="text-sm hover:text-white/60 transition-colors">Our Project</Link>
            <Link href="#" className="text-sm hover:text-white/60 transition-colors">Our Impact</Link>
            <Link href="#" className="text-sm hover:text-white/60 transition-colors">Digital Monitoring</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm mb-2 uppercase tracking-widest text-white/50">Climate Resources</h4>
            <Link href="#" className="text-sm hover:text-white/60 transition-colors">Recent Publication</Link>
            <Link href="#" className="text-sm hover:text-white/60 transition-colors">Latest Blog & Press</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm mb-2 uppercase tracking-widest text-white/50">About Us</h4>
            <Link href="#" className="text-sm hover:text-white/60 transition-colors">About CarbonEthics</Link>
            <Link href="#" className="text-sm hover:text-white/60 transition-colors">Join CarbonEthics</Link>
            <Link href="#" className="text-sm hover:text-white/60 transition-colors">Contact Us</Link>
            <Link href="#" className="text-sm hover:text-white/60 transition-colors">FaQ</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[11px] text-white/40 pt-10 border-t border-white/10">
          Copyright © 2026 CarbonEthics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}