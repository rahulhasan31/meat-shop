"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

import "./Navbar.css";

const NavbarPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
      <Navbar className="py-4 " onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <div className="flex items-center space-x-2 md:space-x-4">
              <img
                src="https://i.ibb.co/PY0sKgH/logo.png"
                alt="Logo"
                className="h-8 w-28 md:h-10 md:w-56"
              />
            </div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-4 lg:font-bold"
          justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              HOME
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/products" aria-current="page">
              PRODUCTS
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/about">
              ABOUT US
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="blog">
              BLOG
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/service-page">
              PAGES
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="contact">
              CONTACT
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/signup" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem>
            <div className="max-sm:mt-20 text-center bg-red-600 py-3 rounded-3xl ">
              {" "}
              <Link
                className="  text-center text-white max-sm:text-2xl max-sm:font-bold"
                href="/"
                size="lg">
                Home
              </Link>
            </div>
            <div className="max-sm:mt-5 text-center bg-red-600 py-3 rounded-3xl ">
              {" "}
              <Link
                className="  text-center text-white max-sm:text-2xl max-sm:font-bold"
                href="/products"
                size="lg">
                Products
              </Link>
            </div>

            <div className="max-sm:mt-5 text-center bg-red-600 py-3 rounded-3xl ">
              {" "}
              <Link
                className="  text-center text-white max-sm:text-2xl max-sm:font-bold"
                href="/products/736"
                size="lg">
                Products Details
              </Link>
            </div>
            <div className="max-sm:mt-5 text-center bg-red-600 py-3 rounded-3xl ">
              {" "}
              <Link
                className="  text-center text-white max-sm:text-2xl max-sm:font-bold"
                href="/about"
                size="lg">
                About Us
              </Link>
            </div>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavbarPage;
