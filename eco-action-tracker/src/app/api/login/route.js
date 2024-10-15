import dbConnect from "@/lib/mongodb";
import User from "@/app/models/User";
import { NextResponse } from "next/server";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

export async function POST(req) {
  await dbConnect();

  try {
    const { email, password } = await req.json();
    console.log("Email and password received:", email, password);

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Log all users in the database
    const allUsers = await User.find();
    console.log("All users in the database:", allUsers);

    console.log("Searching for user with email:", email.trim());
    const user = await User.findOne({ email: email.trim() });
    console.log("User found:", user); // Log the found user

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    console.log("Verifying password for user:", user.email);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }

    const payloadJwt = { id: user.id, role: user.role };
    const secretKey = process.env.JWT_SECRET_KEY;

    if (!secretKey) {
      console.error("JWT_SECRET_KEY is not set in environment");
      throw new Error("JWT_SECRET_KEY is not set in environment");
    }

    const token = jwt.sign(payloadJwt, secretKey, { expiresIn: "2h" });
    console.log("JWT Token generated:", token);

    const response = NextResponse.json(
      {
        message: "Login successful",
        role: user.role,
        userId: user.id,
      },
      { status: 200 }
    );

    response.cookies.set("authToken", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 2 * 60 * 60,
    });

    console.log("Login successful, response sent");
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { message: "Server error, please try again later" },
      { status: 500 }
    );
  }
}
