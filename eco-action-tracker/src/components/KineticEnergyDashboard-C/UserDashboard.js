"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Trophy,
  Bike,
  Award,
  Zap,
  Leaf,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import "../../app/Sidebar.css";

const UserDashboard = ({ user = {} }) => {
  const userName = user?.name || "User";
  const userRanking = user?.overallRanking || "N/A";
  const userPoints = user?.totalPoints || 0;
  const userEnergy = user?.totalEnergy || 0;
  const userCO2Reduced = user?.co2Reduced || 0;
  const userChallengesWon = user?.challengesWon || 0;
  const userChallengesjoined = user?.challengesJoined || 0; // Ensure this is defined
  const userCurrentChallenges = user?.currentChallenges || [];
  const userCompletedChallenges = user?.completedChallenges || [];

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 min-h-full p-4 space-y-4 md:p-6">
      <Card className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <h2 className="text-2xl font-bold text-white">
          {userName}'s Dashboard
        </h2>
        <div className="text-right text-sm md:text-base">
          <p className="font-semibold text-gray-300">
            Overall Ranking:{" "}
            <span className="text-orange-400">#{userRanking}</span>
          </p>
          <p className="font-semibold text-gray-300">
            Total Points: <span className="text-orange-400">{userPoints}</span>
          </p>
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StatCard
          icon={<Zap size={20} className="text-orange-400" />}
          title="Total Energy"
          value={`${userEnergy} kWh`}
        />
        <StatCard
          icon={<Leaf size={20} className="text-green-400" />}
          title="CO2 Reduced"
          value={`${userCO2Reduced} kg`}
        />
        <StatCard
          icon={<Trophy size={20} className="text-yellow-400" />}
          title="Challenges Won"
          value={userChallengesWon}
        />
        <StatCard
          icon={<Trophy size={20} className="text-yellow-400" />}
          title="Challenges Joined"
          value={userChallengesjoined} // Correctly reference this variable
        />
      </div>

      <Tabs
        tabs={[
          {
            label: "Current Challenges",
            content: (
              <div className="space-y-2">
                {userCurrentChallenges.map((challenge, index) => (
                  <ChallengeCard key={index} challenge={challenge} />
                ))}
              </div>
            ),
          },
          {
            label: "Completed Challenges",
            content: (
              <div className="space-y-2">
                {userCompletedChallenges.map((challenge, index) => (
                  <CompletedChallengeCard key={index} challenge={challenge} />
                ))}
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-gray-800 rounded-lg shadow-lg p-6 ${className}`}>
    {children}
  </div>
);

const StatCard = ({ icon, title, value }) => (
  <Card className="flex items-center space-x-4">
    <div className="p-2 bg-orange-600 rounded-full">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-300">{title}</p>
      <p className="text-2xl font-bold text-orange-400">{value}</p>
    </div>
  </Card>
);

const Progress = ({ value }) => (
  <div className="w-full bg-orange-200 rounded-full h-2">
    <div
      className="bg-orange-400 h-2 rounded-full"
      style={{ width: `${value}%` }}
    />
  </div>
);

const ChallengeCard = ({ challenge }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="overflow-hidden">
      <div className="cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-semibold text-white">{challenge.name}</h4>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-orange-400">
              Rank: #{challenge.ranking}
            </span>
            {expanded ? (
              <ChevronUp size={20} className="text-white" />
            ) : (
              <ChevronDown size={20} className="text-white" />
            )}
          </div>
        </div>
        <Progress value={challenge.progress} />
        <p className="text-sm text-gray-400 mt-2">
          Progress: {challenge.progress}%
        </p>
      </div>
      {expanded && (
        <div className="mt-4 pt-4 border-t border-orange-200">
          <div className="flex items-center space-x-2">
            <Bike size={20} className="text-orange-400" />
            <span className="text-sm text-gray-400">{challenge.bikeUsed}</span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Energy Produced: {challenge.energyProduced} kWh
          </p>
        </div>
      )}
    </Card>
  );
};

const CompletedChallengeCard = ({ challenge }) => (
  <Card>
    <div className="flex justify-between items-center mb-2">
      <h4 className="text-lg font-semibold text-green-800">{challenge.name}</h4>
      <span className="text-sm font-medium text-green-600">
        Rank: #{challenge.ranking}
      </span>
    </div>
    <p className="text-gray-600">
      Energy Produced: {challenge.energyProduced} kWh
    </p>
    <div className="mt-2 flex items-center space-x-2">
      <Bike size={20} className="text-green-600" />
      <span className="text-sm text-gray-600">{challenge.bikeUsed}</span>
    </div>
  </Card>
);

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Card>
      <div className="flex border-b border-gray-700 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 font-medium ${
              activeTab === index
                ? "text-orange-400 border-b-2 border-orange-400"
                : "text-gray-500 hover:text-orange-400"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs[activeTab].content}
    </Card>
  );
};

export default UserDashboard;
