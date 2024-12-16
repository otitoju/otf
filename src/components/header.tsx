

'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Logo from '@/assets/logo.png'
import { cn } from "@/lib/utils"

export function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false)

    // Toggle menu function
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className="sticky top-0 z-50 w-full bg-white">
            <div className="flex h-16 items-center justify-between container mx-auto px-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src={Logo}
                            alt="One Touch Football"
                            width={40}
                            height={40}
                            className="h-10 w-10"
                        />
                        <span className="text-[10px] font-bold text-pink-600">
                            <span>ONE TOUCH</span>
                            <span className="block">FOOTBALL</span>
                        </span>
                    </Link>
                </div>

                {/* Hamburger Menu */}
                <button
                    className="lg:hidden flex items-center px-2 py-1 text-gray-800 hover:text-gray-600 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Navigation Menu */}
                <nav
                    className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-transform duration-300 ease-in-out 
                    ${menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
                >
                    <ul className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-0 text-sm">
                        <li>
                            <Link href="/how-it-works" className="block text-gray-800 hover:text-pink-600">
                                How it works
                            </Link>
                        </li>
                        <li>
                            <Link href="/mentoring" className="block text-gray-800 hover:text-pink-600">
                                Mentoring & Support
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="block text-gray-800 hover:text-pink-600">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block text-gray-800 hover:text-pink-600">
                                Contact us
                            </Link>
                        </li>
                        <li>
                            <Link href="/news" className="block text-gray-800 hover:text-pink-600">
                                Media
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Download App Button */}
                <div className="hidden lg:block">
                    <Button className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold rounded-full px-6">
                        Download app
                    </Button>
                </div>
            </div>
        </header>
    )
}
