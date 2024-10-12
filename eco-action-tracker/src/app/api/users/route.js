import dbConnect from "@/lib/mongodb";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
      // الاتصال بالقاعدة
      await dbConnect();
  
      // التحقق من وجود req.user
      if (!req.user) {
        return NextResponse.json(
          { error: 'User not authenticated' }, // رسالة خطأ إذا لم يكن هناك مستخدم
          { status: 401 }
        );
      }
  
      const userId = req.user.id; // الحصول على معرف المستخدم من التوكن
      const user = await User.findById(userId); // جلب المستخدم بواسطة المعرف
  
      // التحقق مما إذا كان المستخدم موجودًا
      if (!user) {
        return NextResponse.json(
          { error: 'User not found' }, // رسالة خطأ إذا لم يتم العثور على المستخدم
          { status: 404 }
        );
      }
  
      return NextResponse.json(user); // إرجاع بيانات المستخدم
    } catch (error) {
      console.error('Error fetching user:', error);
      return NextResponse.json(
        { error: 'Failed to fetch user' },
        { status: 500 }
      );
    }
  }
  