import React from "react";
import "./OrganicProducts.css";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
const OrganicProducts = () => {
  return (
    <section
      className="relative text-white"
      style={{
        backgroundColor: "#180905",
      }}
    >
      <div className="lg:top-14 lg:relative max-sm:relative max-sm:top-10">
        <p className="text-center shop text-red-500 font-bold text-2xl">
          Organic Shop
        </p>
        <h1 className="text-center our  text-4xl font-bold">
          Our Organic Products
        </h1>
        <Image
          width={500}
          height={500}
          className="w-32 text-center mx-auto lg:relative lg:-top-10 max-sm:relative max-sm:-top-8"
          src="/why1.png"
          alt=""
        />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 p-4 md:p-10 gap-4 md:gap-6">
        <div
          style={{
            background: "#441f16",
          }}
          className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md rounded-2xl p-4 md:p-6 h-auto"
        >
          <Image
            width={500}
            height={500}
            className="w-24 sm:w-32 md:w-44 mb-4 sm:mb-0"
            src="/organic_product01.png"
            alt=""
          />
          <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0 sm:ml-4">
            <h1 className="text-lg shop sm:text-xl md:text-2xl font-bold">
              MUTTON CUTLET
            </h1>
            <p className="font-medium text-white mt-2">
              We provide well-shaped fresh and{" "}
              <br className="hidden md:block" /> organic meat well.
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-red-600 font-semibold text-lg md:text-xl">
              $6.99
            </p>
            <p className="font-bold mt-2">GARDEN</p>
          </div>
        </div>
        <div
          style={{
            background: "#441f16",
          }}
          className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md rounded-2xl p-4 md:p-6 h-auto"
        >
          <Image
            width={500}
            height={500}
            className="w-24 sm:w-32 md:w-44 mb-4 sm:mb-0"
            src="/product03.png"
            alt=""
          />
          <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0 sm:ml-4">
            <h1 className="text-lg shop sm:text-xl md:text-2xl font-bold">
              HAMBURG MEAT
            </h1>
            <p className="font-medium text-white mt-2">
              We provide well-shaped fresh and{" "}
              <br className="hidden md:block" /> organic meat well.
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-red-600 font-semibold text-lg md:text-xl">
              $7.99
            </p>
            <p className="font-bold mt-2">GARDEN</p>
          </div>
        </div>
        <div
          style={{
            background: "#441f16",
          }}
          className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md rounded-2xl p-4 md:p-6 h-auto"
        >
          <Image
            width={500}
            height={500}
            className="w-24 sm:w-32 md:w-44 mb-4 sm:mb-0"
            src="/organic_product03.png"
            alt=""
          />
          <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0 sm:ml-4">
            <h1 className="text-lg shop sm:text-xl md:text-2xl font-bold">
              STACK MEATS
            </h1>
            <p className="font-medium text-white mt-2">
              We provide well-shaped fresh and{" "}
              <br className="hidden md:block" /> organic meat well.
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-red-600 font-semibold text-lg md:text-xl">
              $8.99
            </p>
            <p className="font-bold mt-2">GARDEN</p>
          </div>
        </div>
        <div
          style={{
            background: "#441f16",
          }}
          className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md rounded-2xl p-4 md:p-6 h-auto"
        >
          <Image
            width={500}
            height={500}
            className="w-24 sm:w-32 md:w-44 mb-4 sm:mb-0"
            src="/inner_product03.png"
            alt=""
          />
          <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0 sm:ml-4">
            <h1 className="text-lg shop sm:text-xl md:text-2xl font-bold">
              ROAST CHICKEN
            </h1>
            <p className="font-medium text-white mt-2">
              We provide well-shaped fresh and{" "}
              <br className="hidden md:block" /> organic meat well.
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-red-600 font-semibold text-lg md:text-xl">
              $9.99
            </p>
            <p className="font-bold mt-2">GARDEN</p>
          </div>
        </div>
      </div>

      <div className="text-center p-5">
        <Button
          as={Link}
          href="/products"
          className="bg-red-600 py-3 px-10 rounded-full text-white font-bold  mb-20"
        >
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default OrganicProducts;
