const Challenge = require("@/app/models/Challenge");

// Function to create a new challenge
const createChallenge = async (challengeData) => {
  const challenge = new Challenge(challengeData);
  try {
    const savedChallenge = await challenge.save();
    return savedChallenge;
  } catch (error) {
    throw new Error(`Error creating challenge: ${error.message}`);
  }
};

// Function to get all challenges
const getAllChallenges = async () => {
  try {
    const challenges = await Challenge.find({});
    return challenges;
  } catch (error) {
    throw new Error(`Error fetching challenges: ${error.message}`);
  }
};

// Function to get a challenge by ID
const getChallengeById = async (id) => {
  try {
    const challenge = await Challenge.findById(id);
    if (!challenge) {
      throw new Error("Challenge not found");
    }
    return challenge;
  } catch (error) {
    throw new Error(`Error fetching challenge: ${error.message}`);
  }
};

// Function to update a challenge
const updateChallenge = async (id, challengeData) => {
  try {
    const updatedChallenge = await Challenge.findByIdAndUpdate(
      id,
      challengeData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedChallenge) {
      throw new Error("Challenge not found");
    }
    return updatedChallenge;
  } catch (error) {
    throw new Error(`Error updating challenge: ${error.message}`);
  }
};

// Function to delete a challenge
const deleteChallenge = async (id) => {
  try {
    const deletedChallenge = await Challenge.findByIdAndDelete(id);
    if (!deletedChallenge) {
      throw new Error("Challenge not found");
    }
    return deletedChallenge;
  } catch (error) {
    throw new Error(`Error deleting challenge: ${error.message}`);
  }
};

module.exports = {
  createChallenge,
  getAllChallenges,
  getChallengeById,
  updateChallenge,
  deleteChallenge,
};
