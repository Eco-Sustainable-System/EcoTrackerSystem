'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from "next/navigation";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isAuthPage = pathname === '/register' || pathname === '/login';

    if (isAuthPage) return null; // لا تعرض Navbar في صفحات التسجيل وتسجيل الدخول
    return (
        <footer className="bg-[#111827]">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="https://flowbite.com/" className="flex items-center">
                            <img
                                src="https://cdn.discordapp.com/attachments/993570904544124972/1293862383730557021/Screenshot_2024-10-10_120627.png?ex=6708eabf&is=6707993f&hm=774ba707b3f3c617c27944f4d072544136141676d9eca8ef607bc403f301d55c&"
                                className="h-8 me-3 rounded-full"
                                alt="FlowBite Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Future Energy
                            </span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Resources
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="https://flowbite.com/" className="hover:underline">Flowbite</Link>
                                </li>
                                <li>
                                    <Link href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</Link>
                                </li>
                                {/* إضافة المزيد من الموارد هنا */}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Follow us
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link
                                        href="https://github.com/themesberg/flowbite"
                                        className="hover:underline"
                                    >
                                        Github
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://discord.gg/4eeurUVvTy"
                                        className="hover:underline"
                                    >
                                        Discord
                                    </Link>
                                </li>
                                {/* إضافة روابط اجتماعية أخرى هنا */}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023 <Link href="https://flowbite.com/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        {/* روابط الوسائط الاجتماعية */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
