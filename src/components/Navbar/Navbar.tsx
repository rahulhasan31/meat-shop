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
  const { products } = useAppSelector(state => state.cart);

  useEffect(() => {
    setClientProductsCount(products.length);
  }, [products]);
  const { isLoggedIn, logout, userRole } = useAuth();
  console.log("userRole Navbar role", userRole);

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
          <NavbarItem className="me-3">
            <Button
              color="success"
              as={Link}
              href="/cart"
              variant="shadow"
              className="px-5 py-2 bg-red-600 text-white rounded-full">
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
                  className=" text-white rounded-full"
                  color="success"
                  as={Link}
                  href="/user/dashboard"
                  variant="shadow">
                  Dashboard
                </Button>
              </NavbarItem>
              <NavbarItem className=" lg:flex">
                <Button
                  onClick={logout}
                  className="rounded-full"
                  color="danger"
                  variant="shadow">
                  Logout
                </Button>
              </NavbarItem>
            </>
          ) : (
            <>
              <NavbarItem className=" lg:flex">
                <Button
                  className="px-5"
                  color="danger"
                  as={Link}
                  href="/login"
                  variant="shadow">
                  Login
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button
                  className="px-5"
                  color="danger"
                  as={Link}
                  href="/signup"
                  variant="shadow">
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          )}
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
