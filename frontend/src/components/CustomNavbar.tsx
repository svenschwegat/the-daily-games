'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";

import UserSignInModal from "@/components/UserSignInModal";

export default function CustomNavbar() {
  return (
    <Navbar
      id="CustomNavbar"
      maxWidth="full"
      className="bg-linear-to-t from-emerald-600 to-emerald-800"
    >
      <NavbarBrand>
        <a id="home-logo" href="./">
          <span className="font-bold text-white text-inherit">
            The dles - Find Daily Games
          </span>
        </a>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          {/* <UserSignInModal /> */}
        </NavbarItem>
      </NavbarContent>

    </Navbar>
  );
}