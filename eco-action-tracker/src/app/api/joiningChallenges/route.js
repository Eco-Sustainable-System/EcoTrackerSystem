import dbConnect from "@/lib/mongodb";
import {
  createJoiningChallenge,
  getAllJoiningChallenges,
  getJoiningChallengeById,
  updateJoiningChallenge,
  deleteJoiningChallenge,
} from "@/lib/joiningChallengeController";

export async function POST(req) {
  await dbConnect();
  const challengeData = await req.json();

  try {
    const challenge = await createJoiningChallenge(challengeData);
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
