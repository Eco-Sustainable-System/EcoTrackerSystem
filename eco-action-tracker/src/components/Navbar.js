'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from "next/navigation";
import axios from 'axios';
export default function Navbar() {

  // async function fetchData() {
  //   try {
  //     const response = await axios.get('http://localhost:3000/api/users',{ withCredentials: true });
  //     console.log(response.data); // طباعة البيانات في وحدة التحكم
  //   } catch (error) {
  //     console.error('Error fetching data:', error); // طباعة الخطأ إذا حدث
  //   }
  // }
  
  // // استدعاء الدالة لجلب البيانات
  // fetchData();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isAuthPage = pathname === '/register' || pathname === '/login';

  if (isAuthPage) return null; // لا تعرض Navbar في صفحات التسجيل وتسجيل الدخول
  return (
    <nav className="bg-[#2D3134] fixed w-full z-20 top-0 start-0 border-b border-[#2D3134]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://cdn.discordapp.com/attachments/993570904544124972/1293862383730557021/Screenshot_2024-10-10_120627.png?ex=6708eabf&is=6707993f&hm=774ba707b3f3c617c27944f4d072544136141676d9eca8ef607bc403f301d55c&" className="h-8 rounded-full" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#FAF8ED]">Future Energy</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href="/register"
            className="text-white bg-[#fdb713] hover:bg-[#ffce5b] focus:ring-1 focus:outline-none focus:ring-[#ffd77a] font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Sign Up
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#FAF8ED] rounded-lg md:hidden hover:bg-[#F35815] focus:outline-none focus:ring-2 focus:ring-[#FAF8ED]"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-[#2D3134] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <Link href="/" className="block py-2 px-3 text-[#FAF8ED] rounded hover:bg-[#F35815] md:hover:bg-transparent md:hover:text-[#F35815] md:p-0">
                Home
              </Link>
            </li>
            <li>
              <div className="relative group">
                <button className="flex items-center py-2 px-3 text-[#FAF8ED] rounded hover:bg-[#F35815] md:hover:bg-transparent md:hover:text-[#F35815] md:p-0">
                  Services
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#2D3134] ring-1 ring-black ring-opacity-5 invisible group-hover:visible">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link href="/service1" className="block px-4 py-2 text-sm text-[#FAF8ED] hover:bg-[#F35815]" role="menuitem">Service 1</Link>
                    <Link href="/service2" className="block px-4 py-2 text-sm text-[#FAF8ED] hover:bg-[#F35815]" role="menuitem">Service 2</Link>
                    <Link href="/service3" className="block px-4 py-2 text-sm text-[#FAF8ED] hover:bg-[#F35815]" role="menuitem">Service 3</Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href="/challenges" className="block py-2 px-3 text-[#FAF8ED] rounded hover:bg-[#F35815] md:hover:bg-transparent md:hover:text-[#F35815] md:p-0">
              Challenges
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-3 text-[#FAF8ED] rounded hover:bg-[#F35815] md:hover:bg-transparent md:hover:text-[#F35815] md:p-0">
                About
              </Link>
            </li>
            <li>
              <Link href="/contactus" className="block py-2 px-3 text-[#FAF8ED] rounded hover:bg-[#F35815] md:hover:bg-transparent md:hover:text-[#F35815] md:p-0">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}