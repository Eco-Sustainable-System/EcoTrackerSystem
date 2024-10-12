"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import ChallengeCard from "./KineticEnergyDashboard-C/ChallengeCard";
import UserDashboard from "./KineticEnergyDashboard-C/UserDashboard";
import Sidebar from "./KineticEnergyDashboard-C/Sidebar";
import VideoModal from "./KineticEnergyDashboard-C/VideoModal";
import ToastNotifications from "./KineticEnergyDashboard-C/ToastNotifications";

// Constants for width limits
const MIN_SIDEBAR_WIDTH = 10; // Minimum width for the sidebar
const MIN_CENTER_WIDTH = 20; // Minimum width for the center
const MIN_USER_DASHBOARD_WIDTH = 15; // Minimum width for the User Dashboard
const MAX_WIDTH = 90; // Maximum width for either section

const KineticEnergyDashboard = () => {
  const [widths, setWidths] = useState({
    sidebar: 25, // Sidebar width in percentage
    center: 50, // Center width in percentage
  });
  const [showVideo, setShowVideo] = useState(false);
  const [totalEnergy, setTotalEnergy] = useState(1234);
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      name: "City Lights Challenge",
      description: "Power city street lights for a week",
      image: "/api/placeholder/400/300",
      targetEnergy: 1000,
      currentEnergy: 750,
      progress: 75,
      participants: 50,
      startDate: "2024-10-15",
      startTime: "09:00",
      endDate: "2024-10-22",
      endTime: "18:00",
    },
    // Add more challenges here
  ]);
  const [user, setUser] = useState({
    name: "John Doe",
    totalPoints: 1000,
    totalEnergy: 500,
    co2Reduced: 15,
    currentChallenges: [
      { name: "City Lights Challenge", progress: 75 },
      { name: "Green Commute", progress: 50 },
    ],
  });

  // Track dragging state
  const isDragging = useRef(false);
  const initialPosition = useRef(0);
  const dragSide = useRef(null); // Track which side is being dragged

  // Load saved widths from local storage on mount
  useEffect(() => {
    const savedWidths = JSON.parse(localStorage.getItem("dashboardWidths"));
    if (savedWidths) {
      setWidths(savedWidths);
    }
  }, []);

  // Save widths to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("dashboardWidths", JSON.stringify(widths));
  }, [widths]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalEnergy(
        (prevEnergy) => prevEnergy + Math.floor(Math.random() * 10)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = useCallback((e, side) => {
    isDragging.current = true; // Start dragging
    initialPosition.current = e.clientX; // Get initial mouse position
    dragSide.current = side; // Save which side is being dragged
    e.preventDefault(); // Prevent text selection

    // Add mousemove and mouseup event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current) return; // Do nothing if not dragging

    const deltaX = e.clientX - initialPosition.current; // Calculate the distance moved
    const deltaPercentage = (deltaX / window.innerWidth) * 100; // Convert to percentage

    // Update widths based on which side is being dragged
    setWidths((prevWidths) => {
      const newWidths = { ...prevWidths };

      if (dragSide.current === "left") {
        newWidths.sidebar = Math.min(
          Math.max(prevWidths.sidebar + deltaPercentage, MIN_SIDEBAR_WIDTH),
          MAX_WIDTH
        );
      } else if (dragSide.current === "right") {
        newWidths.center = Math.min(
          Math.max(prevWidths.center - deltaPercentage, MIN_CENTER_WIDTH),
          MAX_WIDTH
        );
      }

      // Ensure that total width does not exceed 100%
      const totalWidth = newWidths.sidebar + newWidths.center;
      if (totalWidth > 100) {
        newWidths.sidebar = Math.max(
          MIN_SIDEBAR_WIDTH,
          newWidths.sidebar - (totalWidth - 100)
        );
        newWidths.center = Math.max(
          MIN_CENTER_WIDTH,
          newWidths.center - (totalWidth - 100)
        );
      }

      return newWidths;
    });

    initialPosition.current = e.clientX; // Update initial position
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false; // Stop dragging
    document.removeEventListener("mousemove", handleMouseMove); // Clean up event listeners
    document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

  const handleJoinChallenge = (challengeId) => {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) =>
        challenge.id === challengeId
          ? { ...challenge, participants: challenge.participants + 1 }
          : challenge
      )
    );
    setUser((prevUser) => ({
      ...prevUser,
      currentChallenges: [
        ...prevUser.currentChallenges,
        {
          name: challenges.find((c) => c.id === challengeId).name,
          progress: 0,
        },
      ],
    }));
  };

  // Keyboard control for the dividers
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setWidths((prevWidths) => ({
        sidebar: Math.max(prevWidths.sidebar - 1, MIN_SIDEBAR_WIDTH),
        center: prevWidths.center,
      }));
    } else if (e.key === "ArrowRight") {
      setWidths((prevWidths) => ({
        sidebar: Math.min(prevWidths.sidebar + 1, MAX_WIDTH),
        center: prevWidths.center,
      }));
    } else if (e.key === "ArrowUp") {
      setWidths((prevWidths) => ({
        sidebar: prevWidths.sidebar,
        center: Math.max(prevWidths.center - 1, MIN_CENTER_WIDTH),
      }));
    } else if (e.key === "ArrowDown") {
      setWidths((prevWidths) => ({
        sidebar: prevWidths.sidebar,
        center: Math.min(prevWidths.center + 1, MAX_WIDTH),
      }));
    }
  };

  return (
    <div
      className="flex h-screen text-white bg-black"
      tabIndex={0} // Make the div focusable
      onKeyDown={handleKeyDown} // Handle keyboard events
    >
      <Sidebar
        totalEnergy={totalEnergy}
        setShowVideo={setShowVideo}
        sidebarWidth={widths.sidebar}
      />

      {/* Left Divider */}
      <div
        className="w-3 bg-black cursor-col-resize hover:bg-orange-400 transition-colors duration-200 flex items-center justify-center"
        onMouseDown={(e) => handleMouseDown(e, "left")} // Left divider
      >
        <div className="h-8 w-1 bg-gray-500 rounded-md" />
      </div>

      {/* Center Content */}
      <motion.div
        style={{ width: `${widths.center}%`, transition: "width 0.2s ease" }} // Smooth transition for width change
        className="p-6 overflow-y-auto bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-white">
          Active Challenges
        </h2>
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            onJoin={handleJoinChallenge}
          />
        ))}
      </motion.div>

      {/* Right Divider */}
      <div
        className="w-3 bg-black cursor-col-resize hover:bg-orange-400 transition-colors duration-200 flex items-center justify-center"
        onMouseDown={(e) => handleMouseDown(e, "right")} // Right divider
      >
        <div className="h-8 w-1 bg-gray-500 rounded-md" />
      </div>

      {/* User Dashboard */}
      <motion.div
        style={{
          width: `${100 - widths.sidebar - widths.center}%`,
          minWidth: "500px", // Set a minimum width for responsiveness
          maxWidth: "900px", // Set a max width for smaller UserDashboard
          maxHeight: "calc(150vh - 2px)", // Adjust height for smaller screens
          overflowY: "auto", // Enable vertical scrolling
          transition: "width 0.2s ease",
        }}
        className="p-5 bg-black " // Smaller padding for responsiveness
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <UserDashboard user={user} />
      </motion.div>

      <VideoModal showVideo={showVideo} setShowVideo={setShowVideo} />
      {/* <ToastNotifications currentChallenges={user.currentChallenges} /> */}

      {/* Current Widths Display */}
      <div className="absolute bottom-5 right-4 bg-white p-2 rounded shadow-lg text-black">
        <p>Sidebar Width: {widths.sidebar.toFixed(2)}%</p>
        <p>Center Width: {widths.center.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default KineticEnergyDashboard;
