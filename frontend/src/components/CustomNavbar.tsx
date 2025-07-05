'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import React from "react";

export const Logo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export default function CustomNavbar() {
    const [activeItem, setActiveItem] = React.useState('');

    React.useEffect(() => {
        setActiveItem(window.location.pathname);
    }, []);

    return (
        <Navbar>
            <NavbarBrand>
                <Logo />
                <a href="./" className="font-bold text-inherit">Daily Games - the dles</a>
            </NavbarBrand>
            <div className="flex-grow">
            <NavbarContent className="sm:flex gap-4" justify="center">
                <NavbarItem isActive={activeItem === ''} >
                    <a href="./" className="text-lg">Home</a>
                </NavbarItem>
                <NavbarItem isActive={activeItem === '/lists'} >
                    <a href="/lists" className="text-lg">Lists (todo)</a>
                </NavbarItem>
            </NavbarContent>
            </div>
        </Navbar>
    );
}