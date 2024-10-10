'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
      <div className="min-h-screen">
        <motion.div 
          className="container mx-auto px-6 py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-green-800 mb-12 text-center">About Us</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At EcoLiving, we're dedicated to making sustainable living accessible and enjoyable for everyone. 
                Our mission is to provide practical solutions and education for a more sustainable future.
              </p>
            </motion.div>
            <motion.div
              className="bg-green-100 rounded-lg p-8"
              whileHover={{ scale: 1.02 }}
            >
              {/* Add about page specific content */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }