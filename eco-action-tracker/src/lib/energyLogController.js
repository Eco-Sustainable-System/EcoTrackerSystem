const EnergyLog = require("@/app/models/EnergyLog");

// Function to create a new energy log
const createEnergyLog = async (energyLogData) => {
  const energyLog = new EnergyLog(energyLogData);
  try {
    const savedEnergyLog = await energyLog.save();
    return savedEnergyLog;
  } catch (error) {
    throw new Error(`Error creating energy log: ${error.message}`);
  }
};

// Function to get all energy logs
const getAllEnergyLogs = async () => {
  try {
    const energyLogs = await EnergyLog.find({})
      .populate("userId", "name") // Assuming there's a 'name' field in the Users collection
      .populate("bikeId", "model") // Assuming there's a 'model' field in the Bikes collection
      .populate("associatedChallenge", "title"); // Assuming there's a 'title' field in the Challenges collection
    return energyLogs;
  } catch (error) {
    throw new Error(`Error fetching energy logs: ${error.message}`);
  }
};

// Function to get an energy log by ID
const getEnergyLogById = async (id) => {
  try {
    const energyLog = await EnergyLog.findById(id)
      .populate("userId", "name")
      .populate("bikeId", "model")
      .populate("associatedChallenge", "title");
    if (!energyLog) {
      throw new Error("Energy log not found");
    }
    return energyLog;
  } catch (error) {
    throw new Error(`Error fetching energy log: ${error.message}`);
  }
};

// Function to update an energy log
const updateEnergyLog = async (id, energyLogData) => {
  try {
    const updatedEnergyLog = await EnergyLog.findByIdAndUpdate(
      id,
      energyLogData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedEnergyLog) {
      throw new Error("Energy log not found");
    }
    return updatedEnergyLog;
  } catch (error) {
    throw new Error(`Error updating energy log: ${error.message}`);
  }
};

// Function to delete an energy log
const deleteEnergyLog = async (id) => {
  try {
    const deletedEnergyLog = await EnergyLog.findByIdAndDelete(id);
    if (!deletedEnergyLog) {
      throw new Error("Energy log not found");
    }
    return deletedEnergyLog;
  } catch (error) {
    throw new Error(`Error deleting energy log: ${error.message}`);
  }
};

module.exports = {
  createEnergyLog,
  getAllEnergyLogs,
  getEnergyLogById,
  updateEnergyLog,
  deleteEnergyLog,
};
