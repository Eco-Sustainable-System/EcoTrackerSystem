import dbConnect from "@/lib/mongodb";
import { addReminderToUser } from "@/lib/userController";

export async function POST(req) {
  await dbConnect();

  const token = req.headers.get("Authorization")?.split(" ")[1];

  const { reminder } = await req.json();

  if (!token) {
    return new Response(JSON.stringify({ message: "No token provided" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const updatedUser = await addReminderToUser(token, reminder);
    return new Response(JSON.stringify(updatedUser), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
