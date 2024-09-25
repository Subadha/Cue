"use client";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Top bar */}
            <div className="bg-color1 text-white text-center py-2 text-sm md:text-base">
                <p>Shop Sale up to 25% Off - FREE SHIPPING on orders Over 500</p>
            </div>

            {/* Main Navbar */}
            <div className="flex justify-between items-center px-4 py-3 md:px-10 lg:py-4">
                {/* Logo */}
                <div className="text-2xl font-bold"><Link href="/">Logo</Link></div>

                {/* Menu Items - hidden on mobile */}
                <ul className={`hidden lg:flex lg:gap-8 text-lg`}>
                    <li><Link href="/product">Women</Link></li>
                    <li>Men</li>
                    <li>Kids</li>
                    <li>Accessories</li>
                    <li>Climate+</li>
                    <li>Impact</li>
                </ul>

                {/* Icons */}
                <div className="flex gap-6">
                    <IoIosSearch size={25} />
                    <IoBagOutline size={25} />
                    <CiHeart size={25} />

                    {/* Hamburger menu (mobile only) */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <CiSliderHorizontal size={30} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <ul className="absolute left-0 w-full text-center bg-color1 text-white py-4 flex flex-col gap-4 text-lg">
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kids</li>
                    <li>Accessories</li>
                    <li>Climate+</li>
                    <li>Impact</li>
                </ul>
            )}
        </div>
    );
}
