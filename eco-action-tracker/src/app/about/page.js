'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, TrendingUp, ChevronRight } from 'lucide-react';

const teamMembers = [
  { name: "Abdallah Aljbour", role: "Scrum Master", image: "/api/placeholder/300/300" },
  { name: "Abd-Alrahman Mansour Ata", role: "Product Owner", image: "/api/placeholder/300/300" },
  { name: "Islam Ismail", role: "QA", image: "/api/placeholder/300/300" },
  { name: "AbdelRahman Alwabarneh", role: "Developer", image: "/api/placeholder/300/300" },
  { name: "Mohammed Husban", role: "Developer", image: "/api/placeholder/300/300" }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D3134] to-[#1A1D1F] text-white px-4 sm:px-6 lg:px-20 mt-[68px]">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto py-10 sm:py-14 lg:py-20 text-center"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
            font-extrabold mb-4 md:mb-6 bg-clip-text text-transparent 
            bg-gradient-to-r from-[#ceae62] to-[#FDB713] 
            leading-tight sm:leading-snug max-w-5xl mx-auto"
        >
          Revolutionizing Energy
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl 
            text-[#FAF8ED]/80 max-w-3xl mx-auto leading-relaxed sm:leading-normal"
        >
          Harnessing the power of motion to create a sustainable future
        </p>
      </motion.header>

      {/* Features Section */}
      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              icon: <Zap className="w-12 h-12 text-[#FDB713]" />,
              title: "Kinetic Conversion",
              description:
                "Our groundbreaking technology transforms everyday movement into clean, sustainable electrical energy.",
            },
            {
              icon: <Globe className="w-12 h-12 text-[#FDB713]" />,
              title: "Global Impact",
              description:
                "We're reducing carbon emissions and promoting environmental sustainability on a global scale.",
            },
            {
              icon: <TrendingUp className="w-12 h-12 text-[#FDB713]" />,
              title: "Future Vision",
              description:
                "Pioneering smart cities and green buildings where kinetic energy powers our world.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-[#FAF8ED]/10 rounded-xl p-6 sm:p-8 backdrop-blur-sm 
                hover:bg-[#FAF8ED]/20 transition-all text-center"
            >
              {item.icon}
              <h2 className="text-xl font-semibold mt-4 mb-2">{item.title}</h2>
              <p className="text-[#FAF8ED]/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Our Visionary Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#FAF8ED]/5 rounded-2xl overflow-hidden 
                hover:bg-[#FAF8ED]/10 transition-all shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-sm text-[#FAF8ED]/60">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="container mx-auto py-16 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Join the Energy Revolution
        </h2>
        <a
          href="/Market"
          className="inline-flex items-center bg-[#FDB713] text-[#2D3134] 
            px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold 
            hover:bg-[#FDB713]/90 transition-colors"
        >
          Get Involved
          <ChevronRight className="ml-2 w-5 h-5" />
        </a>
      </motion.section>
    </div>
  );
  
};

export default AboutUs;