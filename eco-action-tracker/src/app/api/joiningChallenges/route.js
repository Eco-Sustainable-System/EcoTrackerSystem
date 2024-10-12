import dbConnect from "@/lib/mongodb";
import {
  createJoiningChallenge,
  getAllJoiningChallenges,
  getJoiningChallengeById,
  updateJoiningChallenge,
  deleteJoiningChallenge,
} from "@/lib/joiningChallengeController";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await dbConnect();

  // Get the token from the Authorization header
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return new Response(JSON.stringify({ message: "No token provided" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Verify the token and decode it
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Decoded Token:", decoded); // Log the decoded token

    // Ensure the userId is present in the decoded token
    const userId = decoded.id; // Assuming userId is in the token payload
    if (!userId) {
      throw new Error("Invalid token: userId not found");
    }

    // Parse the request body for challenge data
    const challengeData = await req.json();
    challengeData.userId = userId; // Set userId from the token payload

    console.log("Challenge Data:", challengeData); // Log the challenge data

    // Create the joining challenge
    const challenge = await createJoiningChallenge(challengeData);

    // Return a success response
    return new Response(
      JSON.stringify({
        message: "Joining challenge created successfully",
        challenge,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error); // Log any error
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
      const challenge = await getJoiningChallengeById(id);
      return new Response(JSON.stringify(challenge), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      const challenges = await getAllJoiningChallenges();
      return new Response(JSON.stringify(challenges), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(req) {
  await dbConnect();
  const { id, ...challengeData } = await req.json();

  try {
    const updatedChallenge = await updateJoiningChallenge(id, challengeData);
    return new Response(
      JSON.stringify({
        message: "Joining challenge updated successfully",
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
    const deletedChallenge = await deleteJoiningChallenge(id);
    return new Response(
      JSON.stringify({
        message: "Joining challenge deleted successfully",
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
