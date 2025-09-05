'use client';
import React from "react";

export default function CustomNavbar() {
    return (
        <ul 
            id="CustomNavbar" 
            className="flex items-center sticky top-0 left-0 right-0 z-50 bg-gray-800 p-4 shadow-xl/30"
        > 
            <li>
                <a id="home-logo" href="./" className="flex items-center ">
                    <span className="ml-2 font-bold text-white text-xl">
                        The dles - Find Daily Games
                    </span>
                </a>
            </li>
        </ul>
    );
}