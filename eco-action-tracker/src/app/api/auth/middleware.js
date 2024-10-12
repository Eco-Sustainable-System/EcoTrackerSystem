// app/middleware.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function middleware(req) {
  const token = req.cookies.get('authToken');

  if (!token) {
    return NextResponse.json(
      { error: 'No authentication token provided' },
      { status: 401 }
    );
  }

  try {
    const secretKey = process.env.JWT_SECRET_KEY;
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // إضافة بيانات المستخدم إلى الطلب
  } catch (error) {
    console.error('JWT verification failed:', error);
    return NextResponse.json(
      { error: 'Invalid token' },
      { status: 401 }
    );
  }
  console.log(token);
  
  return NextResponse.next(); // المتابعة في الطلب
}

// تحديد المسارات التي سيطبق عليها middleware
export const config = {
  matcher: ['/api/register'], // المسارات التي تحتاج إلى تحقق
};
