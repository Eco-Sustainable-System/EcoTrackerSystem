"use client";
import React from 'react';
import { Leaf, Sun, Droplet, Users, ChevronDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const carbonData = [
  { year: 2018, emissions: 10 },
  { year: 2019, emissions: 9.5 },
  { year: 2020, emissions: 8.2 },
  { year: 2021, emissions: 7.8 },
  { year: 2022, emissions: 7.1 },
  { year: 2023, emissions: 6.5 },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://source.unsplash.com/1920x1080/?sustainable,environment"
            alt="Sustainable Living Hero"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
              Sustainable Living
            </h1>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto mb-8">
              Creating a better future through eco-friendly practices and sustainable living solutions.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
          <ChevronDown className="w-12 h-12 text-green-600 mt-12 animate-bounce" />
        </div>
      </section>

      {/* Sustainable Living Section */}
      <section id="sustainable" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://source.unsplash.com/1920x1080/?eco,friendly"
            alt="Sustainable Living Solutions"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <Leaf className="w-12 h-12 text-green-600 mb-6" />
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Sustainable Living Solutions
              </h2>
              <p className="text-gray-700 mb-6">
                Discover practical ways to reduce your environmental impact and live more sustainably.
                Our comprehensive guide helps you make eco-friendly choices in your daily life.
              </p>
              <ul className="space-y-4">
                {['Reduce waste', 'Eco-friendly products', 'Sustainable practices', 'Green living tips'].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <Leaf className="w-5 h-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl animate-slideInRight">
              <img
                src="https://source.unsplash.com/800x600/?sustainable,living"
                alt="Sustainable living"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Energy Section */}
      <section id="energy" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://source.unsplash.com/1920x1080/?renewable,energy"
            alt="Renewable Energy Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slideInLeft">
              <div className="bg-white bg-opacity-90 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Energy Efficiency Stats</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Solar Energy', value: '40%' },
                    { label: 'Wind Power', value: '35%' },
                    { label: 'Hydroelectric', value: '15%' },
                    { label: 'Other Renewable', value: '10%' },
                  ].map((stat) => (
                    <div key={stat.label} className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                            {stat.label}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-green-600">
                            {stat.value}
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                        <div
                          style={{ width: stat.value }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-slideInRight">
              <img
                src="https://source.unsplash.com/800x600/?renewable,energy"
                alt="Renewable energy"
                className="rounded-lg shadow-xl mb-6"
              />
              <Sun className="w-12 h-12 text-yellow-500 mb-6" />
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Renewable Energy
              </h2>
              <p className="text-gray-700">
                Harness the power of renewable energy sources for a cleaner future.
                Learn about solar, wind, and other sustainable energy solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Water Conservation Section */}
      <section id="water" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://source.unsplash.com/1920x1080/?water,conservation"
            alt="Water Conservation Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <Droplet className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Water Conservation
              </h2>
              <p className="text-gray-700 mb-6">
                Discover innovative ways to conserve water and protect this precious resource.
                From rainwater harvesting to efficient appliances, every drop counts.
              </p>
              <ul className="space-y-4">
                {['Rainwater harvesting', 'Low-flow fixtures', 'Xeriscaping', 'Greywater systems'].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <Droplet className="w-5 h-5 text-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl animate-slideInRight">
              <img
                src="https://source.unsplash.com/800x600/?water,saving"
                alt="Water conservation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section id="community" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://source.unsplash.com/1920x1080/?community,engagement"
            alt="Community Engagement Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slideInLeft">
              <Users className="w-12 h-12 text-yellow-600 mb-6" />
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Community Engagement
              </h2>
              <p className="text-gray-700 mb-6">
                Join forces with your community to create lasting change. Discover local initiatives,
                volunteer opportunities, and ways to make a collective impact.
              </p>
              <ul className="space-y-4">
                {['Local clean-ups', 'Community gardens', 'Eco-workshops', 'Green initiatives'].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-yellow-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 animate-slideInRight">
              <div className="bg-white bg-opacity-90 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Community Impact</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={carbonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="emissions" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-600 mt-4">
                  Our community's carbon emissions reduction over the years
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-20 text-white relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://source.unsplash.com/1920x1080/?join,movement"
            alt="Join the Movement Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Join the Sustainable Living Movement</h2>
          <p className="text-xl mb-8">
            Together, we can make a difference. Start your journey towards a more sustainable lifestyle today.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-green-100 transition-all transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}