const Challenge = require("@/app/models/Challenge");

const createChallenge = async (challengeData) => {
  const challenge = new Challenge(challengeData);
  try {
    const savedChallenge = await challenge.save();
    return savedChallenge;
  } catch (error) {
    throw new Error(`Error creating challenge: ${error.message}`);
  }
};

const getAllChallenges = async () => {
  try {
    const challenges = await Challenge.find({});
    return challenges;
  } catch (error) {
    throw new Error(`Error fetching challenges: ${error.message}`);
  }
};

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

const updateProgress = async (challengeId) => {
  try {
    const challenge = await Challenge.findById(challengeId);
    if (!challenge) {
      console.error(`Challenge not found for ID ${challengeId}`);
      return;
    }

    const { currentEnergy, targetEnergy } = challenge;

    console.log(`Calculating progress for challenge ID ${challengeId}:`);
    console.log(
      `Current Energy: ${currentEnergy}, Target Energy: ${targetEnergy}`
    );

    // Check for division by zero
    if (targetEnergy === 0) {
      console.warn(
        `Target energy is zero for challenge ID ${challengeId}. Setting progress to 0.`
      );
      await Challenge.findByIdAndUpdate(
        challengeId,
        { progress: 0 },
        { new: true }
      );
      return;
    }

    // Calculate progress percentage
    const progress = (currentEnergy / targetEnergy) * 100;

    console.log(`Progress calculated: ${progress}%`);

    // Update the progress in the challenge document
    const updatedChallenge = await Challenge.findByIdAndUpdate(
      challengeId,
      { progress },
      { new: true }
    );

    console.log(
      `Progress updated for challenge ID ${challengeId}: ${updatedChallenge.progress}`
    );
  } catch (error) {
    console.error(
      `Error updating progress for challenge ID ${challengeId}:`,
      error.message
    );
  }
};

module.exports = {
  createChallenge,
  getAllChallenges,
  getChallengeById,
  updateChallenge,
  deleteChallenge,
  updateProgress,
};
