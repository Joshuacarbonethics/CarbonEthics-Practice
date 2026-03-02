  "use client";

  import { motion, Variants } from "framer-motion";

  const impacts = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      ),
      number: "390K",
      label: "Biotas Planted",
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      ),
      number: "11.2M",
      label: "tCO₂e Potential Carbon Credit",
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      number: "1.2+ Million",
      label: "People Reached",
    },
    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      number: "26%",
      label: "Women Beneficiaries",
    },
    {
      id: 5,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      number: "435",
      label: "Beneficiaries Supported",
    },
    {
      id: 6,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      number: "1.8x",
      label: "Increase in Income of Farmer Beneficiaries*",
      subLabel: "*From our most mature site in Bintan and Tanjungpakis",
    },
  ];

  export default function CollectiveImpact() {
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
      <section className="w-full bg-[#FDFDFD] pt-4 pb-16 px-16">
        <motion.div
          className="max-w-[1400px] mx-auto flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-center text-[40px] font-normal text-[#403B3C] mb-8"
          >
            Our Collective Impact
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {impacts.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group bg-[#F6F8FA] rounded-[32px] p-8 flex flex-col justify-between transition-all duration-500 ease-out hover:shadow-[0_20px_40px_rgba(10,62,109,0.08)] hover:-translate-y-2 cursor-pointer border border-transparent hover:border-[#0A3E6D]/10"
              >
                <div className="text-[#0A3E6D] mb-6 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 origin-left">
                  {item.icon}
                </div>
                
                <div>
                  <h3 className="text-[44px] font-medium text-[#0A3E6D] leading-tight mb-2 tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-1 origin-left">
                    {item.number}
                  </h3>
                  <p className="text-[16px] text-[#403B3C] leading-snug transition-colors duration-500 ease-out group-hover:text-[#0A3E6D]/80">
                    {item.label}
                  </p>
                  {item.subLabel && (
                    <p className="text-[11px] text-[#403B3C]/60 mt-3 italic leading-tight transition-opacity duration-500 ease-out group-hover:opacity-80">
                      {item.subLabel}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p 
            variants={itemVariants}
            className="text-[12px] text-[#403B3C]/50 mt-8"
          >
            Updated July 2025
          </motion.p>
        </motion.div>
      </section>
    );
  }