'use client';
import React from "react";

export const Logo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="white"
                fillRule="evenodd"
            />
        </svg>
    );
};

export default function CustomNavbar() {
    return (
        <ul className="flex items-center sticky top-0 left-0 right-0 z-50 justify-between bg-gray-800 p-4 shadow-xl/30">
            <li>
                <a id="home-logo" href="./" className="flex items-center ">
                    <Logo />
                    <span className="ml-2 font-bold text-white text-xl">
                        Daily Games - the dles
                    </span>
                </a>
            </li>
        </ul>
    );
}