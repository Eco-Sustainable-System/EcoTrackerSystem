import User from "@/app/models/User";
import connectToDatabase from "@/lib/mongodb";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const authCallbacks = {
  async signIn({ user, account }) {
    await connectToDatabase();

    let dbUser = await User.findOne({ email: user.email });

    if (!dbUser) {
      dbUser = new User({
        firstName: user.name.split(' ')[0],
        lastName: user.name.split(' ').slice(1).join(' '),
        email: user.email,
        profileImage: user.image,
        googleId: account.providerAccountId,
      });
      await dbUser.save();
    }

    const payloadJwt = {
      id: dbUser._id.toString(),

    };
    console.log(payloadJwt);
    
    const secretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(payloadJwt, secretKey, { expiresIn: "2h" });
    console.log(token)
    // إنشاء استجابة مع كوكي
    const response = NextResponse.json(
      { success: true, message: "Authentication successful" },
      { status: 200 }
    );

    // تعيين الكوكي
    response.cookies.set("authToken", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 2 * 60 * 60, // ساعتين بالثواني
    });
    console.log(response);
    console.log("Cookies set:", response.cookies.getAll());

    return true; // إرجاع true للسماح بتسجيل الدخول
  },

};