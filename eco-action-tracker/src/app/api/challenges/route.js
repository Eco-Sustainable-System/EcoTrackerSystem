// src/app/api/challenges/route.js

import dbConnect from "@/lib/mongodb";
import {
  createChallenge,
  getAllChallenges,
  getChallengeById,
  updateChallenge,
  deleteChallenge,
  updateProgress,
} from "@/lib/challengeController";

export async function POST(req) {
  await dbConnect();
  const challengeData = await req.json();

  try {
    const challenge = await createChallenge(challengeData);
    return new Response(
      JSON.stringify({ message: "Challenge created successfully", challenge }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(req) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    if (id) {
      const challenge = await getChallengeById(id);
      return new Response(JSON.stringify(challenge), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      const challenges = await getAllChallenges();
      return new Response(JSON.stringify(challenges), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    // Differentiate between 404 and other errors
    if (error.message === "Challenge not found") {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(req) {
  await dbConnect();
  const { id, ...challengeData } = await req.json();

  try {
    const updatedChallenge = await updateChallenge(id, challengeData);
    return new Response(
      JSON.stringify({
        message: "Challenge updated successfully",
        updatedChallenge,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(req) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    const deletedChallenge = await deleteChallenge(id);
    return new Response(
      JSON.stringify({
        message: "Challenge deleted successfully",
        deletedChallenge,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}

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

    // Update progress after current energy has been updated
    await updateProgress(challengeId);
  } catch (error) {
    console.error(
      `Error updating current energy for challenge ID ${challengeId}:`,
      error.message
    );
  }
};
