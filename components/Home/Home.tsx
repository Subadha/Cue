"use client";
import Image from "next/image";
import bg1 from "@/images/bg1.png";
import img from "@/images/img1.png"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const textElement = textRef.current;
        if (textElement) {
            const containerWidth = textElement.offsetWidth; // Get the width of the text container

            // GSAP animation to move text from left to right infinitely
            gsap.fromTo(
                textElement,
                { x: `-${containerWidth}px` }, // Start from off-screen (left)
                {
                    x: "100vw", // Move the text fully to the right
                    duration: 15, // Adjust duration as needed
                    ease: "linear", // Ensure constant speed
                    repeat: -1, // Infinite loop
                }
            );
        }
    }, []);

    return (
        <div className="flex flex-col">
            <div className="flex">
                <div
                    className="flex flex-col md:flex-row w-full"
                    style={{ height: "calc(100vh - 154px)" }}
                >
                    {/* Left Image Section - Visible on medium screens and above */}
                    <div className="hidden md:block w-1/2 h-full relative">
                        <Image
                            src={bg1}
                            alt="Background Image"
                            fill
                        />
                    </div>

                    {/* Right Content Section */}
                    <div className="w-full md:w-1/2 h-full relative">
                        {/* Background Image - Visible on all screens */}
                        <Image
                            src={img}
                            alt="Background Image"
                            fill
                        />

                        {/* Text Content Overlay */}
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-10 text-white text-center p-4">
                            <h1
                                className="text-2xl sm:text-3xl md:text-4xl font-bold"
                                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                            >
                                New Linen For Life
                            </h1>
                            <p
                                className="text-xs sm:text-sm md:text-lg mt-2 md:mt-4"
                                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                            >
                                Beautiful, healthy, and durable
                            </p>
                            <p
                                className="text-xs sm:text-sm md:text-lg mt-1 md:mt-2"
                                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                            >
                                Upgrade to Organic Futurism Aesthetics
                            </p>

                            {/* Shop Now Button */}
                            <button className="mt-4 sm:mt-6 px-4 sm:px-4 py-2 border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300 rounded text-xs sm:text-sm md:text-base">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Moving Text Section */}
            <div className="flex h-[50px] bg-color1 text-white items-center overflow-hidden">
                <div ref={textRef} className="whitespace-nowrap">
                    <p className="text-xs sm:text-sm inline-block mr-[500px]">
                        Zero Waste
                    </p>
                    <p className="text-xl sm:text-2xl inline-block">Organic Futurism Aesthetics</p>
                </div>
            </div>
        </div>
    );
}
