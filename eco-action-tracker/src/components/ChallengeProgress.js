"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Users,
  Calendar,
  BookOpen,
} from "lucide-react";

const EcoChallenge = () => {
  const [activeTab, setActiveTab] = useState("Global");

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-800">EcoChallenge</h1>
          <div className="flex items-center space-x-4">
            <img
              src="/api/placeholder/40/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-green-700 font-semibold">John Doe</span>
          </div>
        </header>

        {/* Top section */}
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3 bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Leaf className="h-16 w-16" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  Eco Challenge: Plant 100 Trees
                </h2>
                <p className="text-lg opacity-80">
                  Join our community effort to increase urban green cover!
                </p>
                <div className="mt-4">
                  <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <p className="text-sm mt-1">65% Complete</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Quick Stats
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-green-600">Trees Planted</span>
                <span className="text-2xl font-bold text-green-800">65</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-green-600">Days Left</span>
                <span className="text-2xl font-bold text-green-800">15</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-green-600">Participants</span>
                <span className="text-2xl font-bold text-green-800">387</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle section */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="/api/placeholder/300/200"
              alt="Eco tip"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-green-800">
              5 Easy Ways to Reduce Your Carbon Footprint
            </h3>
            <p className="text-green-600 mt-2">
              Small changes, big impact! Learn how you can make a difference in
              your daily life.
            </p>
            <div className="flex items-center mt-4 text-green-500">
              <Users className="w-4 h-4 mr-2" />
              <span className="text-sm">1.2k readers</span>
            </div>
          </div>
          <div className="col-span-2 bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-800">
              Upcoming Events
            </h3>
            <div className="space-y-4 mt-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg"
                >
                  <Calendar className="w-10 h-10 text-green-500" />
                  <div>
                    <h4 className="font-semibold text-green-800">
                      Community Tree Planting Day {i}
                    </h4>
                    <p className="text-sm text-green-600">
                      June {15 + i}, 2024 | Central Park
                    </p>
                  </div>
                  <button className="ml-auto py-1 px-3 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white">
                    Join
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-800">
              Featured Eco Warrior
            </h3>
            <div className="flex items-center space-x-6 mt-4">
              <img
                src="/api/placeholder/150/150"
                alt="Eco Warrior"
                className="w-32 h-32 rounded-full object-cover"
              />
              <div>
                <h4 className="text-2xl font-bold text-green-800">
                  Samantha Green
                </h4>
                <p className="text-lg text-green-600">Environmental Activist</p>
                <div className="flex space-x-6 mt-4">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-green-700">
                      127
                    </span>
                    <span className="text-sm text-green-600">Challenges</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-green-700">
                      15.4k
                    </span>
                    <span className="text-sm text-green-600">Followers</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-green-700">
                      9.2
                    </span>
                    <span className="text-sm text-green-600">Impact Score</span>
                  </div>
                </div>
                <button className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="/api/placeholder/300/200"
              alt="Eco documentary"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold text-green-800">
              The Green Revolution
            </h3>
            <p className="text-sm text-green-600 mt-2">
              An Inspiring Eco Documentary
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center text-green-500">
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="text-sm">50,893 views</span>
              </div>
              <button className="py-1 px-3 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white">
                Watch Now
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-between items-center mt-8">
          <p className="text-green-600">
            &copy; 2024 EcoChallenge. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <ChevronLeft className="w-6 h-6 text-green-600" />
            <ChevronRight className="w-6 h-6 text-green-600" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EcoChallenge;
