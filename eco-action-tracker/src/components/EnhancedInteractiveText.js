"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";

export default function EnhancedInteractiveText() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const letters = ["K", "E"]; // Changed letters to represent Kinetic Energy
  const colors = ["#f39c12", "#e67e22"]; // Colors representing energy and motion

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full bg-gradient-to-br from-yellow-400 to-orange-600 overflow-hidden"
    >
      <ThreeScene />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex mb-8">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              className="text-9xl font-extrabold"
              style={{
                color: colors[index],
                textShadow: "0 0 20px rgba(255,255,255,0.7)",
              }}
              animate={{
                x: mousePosition.x * 50 - 25,
                y: mousePosition.y * 50 - 25,
                rotateY: mousePosition.x * 20 - 10,
                rotateX: -mousePosition.y * 20 + 10,
                scale: [1, 1.2, 1],
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {letter}
            </motion.div>
          ))}
        </div>
        <motion.h1
          className="text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Kinetic Energy Challenge
        </motion.h1>
        <motion.p
          className="text-2xl text-white text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Join the movement! Discover how kinetic energy powers our world. Every
          step you take counts towards a sustainable future!
        </motion.p>
        <motion.button
          className="mt-8 px-6 py-3 bg-white text-yellow-700 rounded-full text-xl font-semibold hover:bg-yellow-100 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start the Challenge
        </motion.button>
      </div>
    </div>
  );
}
