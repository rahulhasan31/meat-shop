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
import { FaCartArrowDown } from "react-icons/fa";
import { useAppSelector } from "@/redux/lib/hooks";
import { useEffect } from "react";
import { isLoggedIn } from "@/authService/authservice";
import { useRouter } from "next/navigation";
import { useAuth } from "@/authService/authContext";

const NavbarPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clientProductsCount, setClientProductsCount] = useState(0);
  const { products } = useAppSelector((state) => state.cart);

  useEffect(() => {
    setClientProductsCount(products.length);
  }, [products]);
  const { isLoggedIn, logout, userRole } = useAuth();
  console.log("userRole Navbar role", userRole);

  return (
    <>
      <Navbar
        style={{
          background: "#180905",
        }}
        className="py-4 "
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white"
          />
          <NavbarBrand>
            <div className="flex items-center space-x-2 md:space-x-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-8 w-28 md:h-10 md:w-56"
              />
            </div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-4 lg:font-bold"
          justify="center"
        >
          <NavbarItem>
            <Link className="text-white" color="foreground" href="/">
              HOME
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link className="text-white" href="/products">
              PRODUCTS
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" color="foreground" href="/about">
              ABOUT US
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" color="foreground" href="/shop-blog">
              BLOG
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              className="text-white"
              color="foreground"
              href="/service-page"
            >
              PAGES
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" color="foreground" href="/contact">
              CONTACT
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="lg:me-3 ">
            <Button
              color="danger"
              as={Link}
              href="/cart"
              variant="shadow"
              className=" bg-red-600 text-white rounded-full "
            >
              <FaCartArrowDown className="text-xl" />
            </Button>
            <p className="absolute -top-2  ms-12 bg-red-600 text-white px-3 py-1 rounded-full ">
              {clientProductsCount}
            </p>
          </NavbarItem>
          {isLoggedIn ? (
            <>
              <NavbarItem>
                <Button
                  className="   bg-red-600 text-white px-3 py-1 rounded-full"
                  color="success"
                  as={Link}
                  href="/dashboard"
                  variant="shadow"
                >
                  Dashboard
                </Button>
              </NavbarItem>
              <NavbarItem className=" lg:flex">
                <Button
                  onClick={logout}
                  as={Link}
                  className=" bg-red-600 text-white rounded-full "
                  color="danger"
                  href="/"
                  variant="shadow"
                >
                  Logout
                </Button>
              </NavbarItem>
            </>
          ) : (
            <>
              <NavbarItem className=" lg:flex">
                <Button
                  className="px-5  bg-red-600 text-white  py-1 rounded-full  max-sm:hidden"
                  color="danger"
                  as={Link}
                  href="/login"
                  variant="shadow"
                >
                  Login
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button
                  className="px-5  bg-red-600 text-white  py-1 rounded-full max-sm:hidden"
                  color="danger"
                  as={Link}
                  href="/signup"
                  variant="shadow"
                >
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
        <NavbarMenu className="text-white">
          <NavbarMenuItem className="text-white">
            <NavbarItem className="mt-10">
              <Link
                className="max-sm:mt-5 flex justify-center bg-red-600 py-3 rounded-3xl w-full"
                href="/"
                size="lg"
              >
                <button className="text-center text-white text-2xl">
                  Home
                </button>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link
                className="max-sm:mt-5 flex justify-center bg-red-600 py-3 rounded-3xl w-full"
                href="/products"
                size="lg"
              >
                <button className="text-center text-white text-2xl">
                  Products
                </button>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link
                className="max-sm:mt-5 flex justify-center bg-red-600 py-3 rounded-3xl w-full"
                href="/blog"
                size="lg"
              >
                <button className="text-center text-white text-2xl">
                  Blog
                </button>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link
                className="max-sm:mt-5 flex justify-center bg-red-600 py-3 rounded-3xl w-full"
                href="/about"
                size="lg"
              >
                <button className="text-center text-white text-2xl">
                  About Us
                </button>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                className="max-sm:mt-5 flex justify-center bg-red-600 py-3 rounded-3xl w-full"
                href="/signup"
                size="lg"
              >
                <button className="text-center text-white text-2xl">
                  Sign Up
                </button>
              </Link>
            </NavbarItem>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavbarPage;
