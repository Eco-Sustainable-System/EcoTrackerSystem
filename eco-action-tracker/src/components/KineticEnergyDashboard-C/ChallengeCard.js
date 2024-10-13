import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Bell,
  Users,
  Calendar,
  Clock,
  Trophy,
  Zap,
} from "lucide-react";
import Cookies from "js-cookie";
import "../../app/Sidebar.css";

const ChallengeCardspage = ({ challenge, onJoin, challengeId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [reminder, setReminder] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [participants, setParticipants] = useState(0);

  const addReminder = async () => {
    const authToken = Cookies.get("authToken");

    try {
      const response = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ reminder }),
      });

      if (!response.ok) {
        throw new Error("Failed to add reminder");
      }

      setReminder("");
      setInterval(() => showToast(reminder), 600000);
      console.log("Reminder added successfully!");
    } catch (error) {
      console.error("Error adding reminder:", error);
    }
  };

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/joiningChallenges?challengeId=${challengeId}`
        );
        const data = await response.json();
        setParticipants(data.userCount);
      } catch (error) {
        console.error("Error fetching participants:", error);
      }
    };

    fetchParticipants();
  }, [challengeId]);

  const handleJoin = () => {
    onJoin(challenge.id);
  };

  const showToast = (message) => {
    alert(`Reminder: ${message}`);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(
      new Date(dateString)
    );
  };

  const formatTime = (timeString) => {
    const options = { hour: "numeric", minute: "2-digit" };
    return new Intl.DateTimeFormat("en-US", options).format(
      new Date(`1970-01-01T${timeString}`)
    );
  };

  return (
    <>
      <motion.div
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 mb-6 shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-orange-300">
            {challenge.name}
          </h3>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-orange-400 hover:text-orange-300 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isExpanded ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
          </motion.button>
        </div>
        <div className="mb-6 relative">
          <img
            src={challenge.thumbnail}
            alt={challenge.name}
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-2 right-2 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {challenge.category}
          </div>
        </div>
        <p className="text-md text-gray-300 mb-6 leading-relaxed">
          {challenge.description}
        </p>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-md font-medium text-gray-300 flex items-center">
              <Trophy size={20} className="mr-2 text-orange-400" /> Progress
            </span>
            <span className="text-lg font-bold text-orange-400">
              {challenge.progress}%
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <motion.div
              className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${challenge.progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            ></motion.div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-md font-medium text-gray-300 flex items-center">
              <Zap size={20} className="mr-2 text-orange-400" /> Energy
            </span>
            <span className="text-lg font-bold text-orange-400">
              {challenge.currentEnergy} / {challenge.targetEnergy} kWh
            </span>
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mt-6 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between text-gray-300">
                <span className="flex items-center">
                  <Users size={20} className="mr-2 text-orange-400" />{" "}
                  Participants
                </span>
                <span className="font-bold text-orange-400">
                  {participants}
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span className="flex items-center">
                  <Calendar size={20} className="mr-2 text-orange-400" /> Start
                </span>
                <span className="font-bold">
                  {formatDate(challenge.startDate)} at{" "}
                  {formatTime(challenge.startHour)}
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span className="flex items-center">
                  <Clock size={20} className="mr-2 text-orange-400" /> End
                </span>
                <span className="font-bold">
                  {formatDate(challenge.endDate)} at{" "}
                  {formatTime(challenge.endHour)}
                </span>
              </div>
              <motion.button
                onClick={() => setShowModal(true)}
                className="mt-4 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-3 hover:from-orange-600 hover:to-orange-700 transition-colors duration-200 font-semibold text-lg shadow-md"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                View Details
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <motion.div
            className="bg-gray-800 rounded-xl p-8 max-w-md w-full shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <h2 className="text-3xl font-bold text-orange-300 mb-4">
              {challenge.name}
            </h2>
            <img
              src={challenge.thumbnail}
              alt={challenge.name}
              className="w-full h-48 object-cover rounded-lg shadow-md mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              {challenge.description}
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between text-gray-300">
                <span className="flex items-center">
                  <Users size={20} className="mr-2 text-orange-400" />{" "}
                  Participants
                </span>
                <span className="font-bold text-orange-400">
                  {participants}
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span className="flex items-center">
                  <Calendar size={20} className="mr-2 text-orange-400" /> Start
                </span>
                <span className="font-bold">
                  {formatDate(challenge.startDate)} at{" "}
                  {formatTime(challenge.startHour)}{" "}
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span className="flex items-center">
                  <Clock size={20} className="mr-2 text-orange-400" /> End
                </span>
                <span className="font-bold">
                  {formatDate(challenge.endDate)} at{" "}
                  {formatTime(challenge.endHour)}{" "}
                </span>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="text"
                value={reminder}
                onChange={(e) => setReminder(e.target.value)}
                placeholder="Set a reminder"
                className="border text-black border-gray-600 rounded-l-lg p-3 flex-grow focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <motion.button
                onClick={addReminder}
                className="bg-orange-600 text-white rounded-r-lg p-3 hover:bg-orange-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell size={25} />
              </motion.button>
            </div>
            <motion.button
              onClick={handleJoin}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-3 hover:from-orange-600 hover:to-orange-700 transition-colors duration-200 font-semibold text-lg shadow-md"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Challenge
            </motion.button>
            <motion.button
              onClick={() => setShowModal(false)}
              className="w-full mt-4 bg-gray-700 text-white rounded-lg p-3 hover:bg-gray-600 transition-colors duration-200 font-semibold text-lg shadow-md"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ChallengeCardspage;
