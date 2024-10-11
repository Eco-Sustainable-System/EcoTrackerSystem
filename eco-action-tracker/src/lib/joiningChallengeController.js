const JoiningChallenge = require("@/app/models/JoiningChallenge");

// Function to create a new joining challenge
const createJoiningChallenge = async (challengeData) => {
  const joiningChallenge = new JoiningChallenge(challengeData);
  try {
    const savedChallenge = await joiningChallenge.save();
    return savedChallenge;
  } catch (error) {
    throw new Error(`Error creating joining challenge: ${error.message}`);
  }
};

// Function to get all joining challenges
const getAllJoiningChallenges = async () => {
  try {
    const challenges = await JoiningChallenge.find({})
      .populate("userId")
      .populate("challengeId")
      .populate("bikeId");
    return challenges;
  } catch (error) {
    throw new Error(`Error fetching joining challenges: ${error.message}`);
  }
};

// Function to get a joining challenge by ID
const getJoiningChallengeById = async (id) => {
  try {
    const challenge = await JoiningChallenge.findById(id)
      .populate("userId")
      .populate("challengeId")
      .populate("bikeId");
    if (!challenge) {
      throw new Error("Joining challenge not found");
    }
    return challenge;
  } catch (error) {
    throw new Error(`Error fetching joining challenge: ${error.message}`);
  }
};

// Function to update a joining challenge
const updateJoiningChallenge = async (id, challengeData) => {
  try {
    const updatedChallenge = await JoiningChallenge.findByIdAndUpdate(
      id,
      challengeData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedChallenge) {
      throw new Error("Joining challenge not found");
    }
    return updatedChallenge;
  } catch (error) {
    throw new Error(`Error updating joining challenge: ${error.message}`);
  }
};

// Function to delete a joining challenge
const deleteJoiningChallenge = async (id) => {
  try {
    const deletedChallenge = await JoiningChallenge.findByIdAndDelete(id);
    if (!deletedChallenge) {
      throw new Error("Joining challenge not found");
    }
    return deletedChallenge;
  } catch (error) {
    throw new Error(`Error deleting joining challenge: ${error.message}`);
  }
};

module.exports = {
  createJoiningChallenge,
  getAllJoiningChallenges,
  getJoiningChallengeById,
  updateJoiningChallenge,
  deleteJoiningChallenge,
};
