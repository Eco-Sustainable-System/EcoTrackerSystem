const EnergyLog = require("@/app/models/EnergyLog");
const Challenge = require("@/app/models/Challenge");

const updateCurrentEnergy = async (challengeId) => {
  try {
    const energyLogs = await EnergyLog.find({
      associatedChallenge: challengeId,
    });

    const totalEnergyGenerated = energyLogs.reduce((total, log) => {
      return total + log.energyGenerated;
    }, 0);

    const updatedChallenge = await Challenge.findByIdAndUpdate(
      challengeId,
      { currentEnergy: totalEnergyGenerated },
      { new: true }
    );

    if (!updatedChallenge) {
      console.error(`Challenge not found for ID ${challengeId}`);
      return;
    }

    console.log(
      `Current energy updated for challenge ID ${challengeId}: ${totalEnergyGenerated}`
    );

    // Call updateProgress to update progress
    await updateProgress(challengeId);
  } catch (error) {
    console.error(
      `Error updating current energy for challenge ID ${challengeId}:`,
      error.message
    );
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

    const progress = (currentEnergy / targetEnergy) * 100;

    console.log(`Progress calculated: ${progress}%`);

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

const createEnergyLog = async (energyLogData) => {
  const energyLog = new EnergyLog(energyLogData);
  try {
    const savedLog = await energyLog.save();

    await updateCurrentEnergy(savedLog.associatedChallenge);

    return savedLog;
  } catch (error) {
    console.error(`Error creating energy log: ${error.message}`);
    throw new Error(`Error creating energy log: ${error.message}`);
  }
};

module.exports = {
  createEnergyLog,
  updateCurrentEnergy,
};
