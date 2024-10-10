'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Wind, Sun, AlertTriangle, Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import axios from "axios";
function LogIn() {
  const [ValidationEmail, setValidationEmail] = useState("");
  const [ValidationPassword, setValidationPassword] = useState("");
  const [EmailMessage, setEmailMessage] = useState("hidden");
  const [PasswordMessage, setPasswordMessage] = useState("hidden");
  const [ShowPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const Email_Message = /^(?![^\s@]+@[^\s@]+\.[^\s@]+$).+/.test(ValidationEmail);

  useEffect(() => {
    setEmailMessage(Email_Message ? "block" : "hidden");
  }, [ValidationEmail]);

  function ShowThPassword() {
    setShowPassword(!ShowPassword);
  }

  async function sub() {
    if (ValidationEmail === "" || Email_Message) {
      setEmailMessage("block");
      return;
    }
    if (ValidationPassword === "") {
      setPasswordMessage("block");
      return;
    }

    try {
        const response = await axios.post('http://localhost:3000/api/login', {
            email: ValidationEmail,
            password: ValidationPassword,
          });
      console.log("Attempting login...");
      router.push('/');
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials or server error");
    }
  }

  return (
    <div className="min-h-screen bg-[#f3ebbe] flex items-center justify-center p-4">
      <div className="bg-[#FAF8ED] rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-6">
        <div className="flex justify-center mb-6">
          <Wind className="text-[#F35815] w-12 h-12 mr-2" />
          <Sun className="text-[#ffc641] w-12 h-12" />
        </div>
        <h1 className="text-3xl font-bold text-center text-[#2D3134] mb-6">Welcome Back</h1>
        
        <form onSubmit={(e) => { e.preventDefault(); sub(); }} className="space-y-4 text-[#2D3134]">
          <div>
            <label htmlFor="Email" className="block mb-2 text-sm font-medium">Email</label>
            <input
              onChange={(e) => setValidationEmail(e.target.value)}
              type="email"
              id="Email"
              className="w-full px-3 py-2 bg-[#FDFEFF] border border-[#2D3134] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F35815]"
              placeholder="Enter your email"
            />
            <p className={`${EmailMessage} mt-2 text-sm text-[#F35815]`}>Invalid email address</p>
          </div>

          <div>
            <label htmlFor="Password" className="block mb-2 text-sm font-medium">Password</label>
            <div className="relative">
              <input
                onChange={(e) => setValidationPassword(e.target.value)}
                type={ShowPassword ? "text" : "password"}
                id="Password"
                className="w-full px-3 py-2 bg-[#FDFEFF] border border-[#2D3134] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F35815]"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-[#2D3134]"
                onClick={ShowThPassword}
              >
                {ShowPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <p className={`${PasswordMessage} mt-2 text-sm text-[#F35815]`}>Please enter your password</p>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#F35815] hover:bg-[#E34805] text-[#FDFEFF] font-bold rounded-md transition duration-200 transform hover:scale-105"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-[#2D3134] text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-[#F35815] hover:underline font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;