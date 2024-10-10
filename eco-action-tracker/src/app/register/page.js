'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Wind, Sun, AlertTriangle, Eye, EyeOff } from 'lucide-react';
import axios from "axios";
function SignUp() {
  const router = useRouter();

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [FirstNameShowAndHide, setFirstNameShowAndHide] = useState("hidden");
  const [LastNameShowAndHide, setLastNameShowAndHide] = useState("hidden");

  const [ValidationEmail, setValidationEmail] = useState("");
  const [EmailMessage, setEmailMessage] = useState("hidden");

  const Email_Message = /^(?![^\s@]+@[^\s@]+\.[^\s@]+$).+/.test(ValidationEmail);

  useEffect(() => {
    setEmailMessage(Email_Message ? "block" : "hidden");
  }, [ValidationEmail]);

  const [ValidationPassword, setValidationPassword] = useState("");
  const [ShowAndHide, setShowAndHide] = useState("hidden");
  const [NoArabic, setNoArabic] = useState("hidden");
  const [EightLettersColor, setEightLettersColor] = useState("text-red-500");
  const [CapitalLetterColor, setCapitalLetterColor] = useState("text-red-500");
  const [NoAtleastColor, setNoAtleastColor] = useState("text-red-500");
  const [SpecialCharactersColor, setSpecialCharacters] = useState("text-red-500");

  const NoArabicPassword = /[\u0600-\u06FF]/.test(ValidationPassword);
  const EightLetters = /[A-Za-z\d\W]{8,}/.test(ValidationPassword);
  const CapitalLetter = /[A-Z]/.test(ValidationPassword);
  const NoAtleast = /\d/.test(ValidationPassword);
  const SpecialCharacters = /(?=.*[^\w\s])/.test(ValidationPassword);
  useEffect(() => {
    setEightLettersColor(EightLetters ? "text-green-500" : "text-red-500");
    setCapitalLetterColor(CapitalLetter ? "text-green-500" : "text-red-500");
    setNoAtleastColor(NoAtleast ? "text-green-500" : "text-red-500");
    setSpecialCharacters(SpecialCharacters ? "text-green-500" : "text-red-500");
    setShowAndHide(ValidationPassword ? "block" : "hidden");
    setNoArabic(NoArabicPassword ? "flex" : "hidden");
  }, [ValidationPassword]);

  const [ShowPassword, setShowPassword] = useState(false);
  function ShowThPassword() {
    setShowPassword(!ShowPassword);
  }

  const [VerificationSendPassword, setVerificationSendPassword] = useState("hidden");

  const SubmitPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W])(?=.*\S)(?!.*\s{2,})[A-Za-z\d\W_]{8,}$/.test(ValidationPassword);

  async function sub() {
    if (FirstName === "") {
      setFirstNameShowAndHide("block");
      return;
    } else {
      setFirstNameShowAndHide("hidden");
    }
    if (LastName === "") {
      setLastNameShowAndHide("block");
      return;
    } else {
      setLastNameShowAndHide("hidden");
    }
    if (ValidationEmail === "" || Email_Message) {
      setEmailMessage("block");
      return;
    }
    if (ValidationPassword === "" || !SubmitPassword) {
      setVerificationSendPassword("flex");
      return;
    } else {
      setVerificationSendPassword("hidden");
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        {
          firstName: FirstName,
          lastName: LastName,
          email: ValidationEmail,
          password: ValidationPassword,
        },
        { withCredentials: true }
      );
      console.log("Success: Form submitted");
      router.push('/');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        console.error("Error:", error.response ? error.response.data : error.message);
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#f3ebbe] flex items-center justify-center p-4">
      <div className="bg-[#FAF8ED] rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-6">
        <div className="flex justify-center mb-6">
          <Wind className="text-[#F35815] w-12 h-12 mr-2" />
          <Sun className="text-[#ffc641] w-12 h-12" />
        </div>
        <h1 className="text-3xl font-bold text-center text-[#2D3134] mb-6">Join the Renewable Future</h1>
        
        <div className={`${NoArabic} items-center p-4 mb-4 text-sm text-[#F35815] rounded-lg bg-[#FAF8ED] border border-[#F35815]`} role="alert">
          <AlertTriangle className="inline w-5 h-5 mr-2" />
          <span>Please use English characters for the password</span>
        </div>

        <div className={`${VerificationSendPassword} items-center p-4 mb-4 text-sm text-[#F35815] rounded-lg bg-[#FAF8ED] border border-[#F35815]`} role="alert">
          <AlertTriangle className="inline w-5 h-5 mr-2" />
          <span>Please enter the password according to the specified requirements</span>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); NoArabicPassword ? null : sub(); }} className="space-y-4 text-[#2D3134]">
          <div>
            <label htmlFor="First_Name" className="block mb-2 text-sm font-medium">First Name</label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
                if (e.target.value) setFirstNameShowAndHide("hidden");
              }}
              type="text"
              id="First_Name"
              className="w-full px-3 py-2 bg-[#FDFEFF] border border-[#2D3134] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F35815]"
              placeholder="Enter your first name"
            />
            <p className={`${FirstNameShowAndHide} mt-2 text-sm text-[#F35815]`}>Please enter your first name</p>
          </div>

          <div>
            <label htmlFor="Last_Name" className="block mb-2 text-sm font-medium">Last Name</label>
            <input
              onChange={(e) => {
                setLastName(e.target.value);
                if (e.target.value) setLastNameShowAndHide("hidden");
              }}
              type="text"
              id="Last_Name"
              className="w-full px-3 py-2 bg-[#FDFEFF] border border-[#2D3134] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F35815]"
              placeholder="Enter your last name"
            />
            <p className={`${LastNameShowAndHide} mt-2 text-sm text-[#F35815]`}>Please enter your last name</p>
          </div>

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
            <div className={`${ShowAndHide} mt-2 space-y-1 text-sm`}>
              <p className={EightLettersColor}>8 characters minimum</p>
              <p className={CapitalLetterColor}>At least one uppercase letter</p>
              <p className={NoAtleastColor}>At least one number</p>
              <p className={SpecialCharactersColor}>At least one special character</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#F35815] hover:bg-[#E34805] text-[#FDFEFF] font-bold rounded-md transition duration-200 transform hover:scale-105"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-[#2D3134] text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-[#F35815] hover:underline font-semibold">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;