"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@nextui-org/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <Swiper className="mySwiper ">
    //   <SwiperSlide>
    //     <div className="banner-slide">
    //       <div className="banner-overlay"></div>
    //       <img className="" src="/branner.png" alt="Fresh Meat Banner" />
    //       <div className="banner-text">
    //         <h1 className="font-serif ">Fresh Meat</h1>
    //         <p className="text-red-600 font-bold text-2xl font-serif">
    //           BUTCHER & MEAT SHOP
    //         </p>
    //         <Button
    //           color="danger"
    //           variant="shadow"
    //           className="max-sm:px-3 max-sm:py-1  max-sm:text-sm lg:mt-10 px-10 py-4 rounded-full font-semibold text-xl"
    //         >
    //           Order Now
    //         </Button>
    //       </div>
    //     </div>
    //   </SwiperSlide>
    // </Swiper>
    <>
      <section
        style={{
          background: "#180905",
        }}
        className=""
      >
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center max-sm:space-y-reverse max-sm:flex-col-reverse">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
              <button className="w-3 h-3 mx-2 bg-red-500 rounded-full lg:mx-0 focus:outline-none"></button>
              <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
              <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
              <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
            </div>

            <div className="max-w-lg lg:mx-12 lg:order-2">
              <div className="text-3xl font-semibold tracking-wide text-white dark:text-white lg:text-4xl">
                <small className="text-red-500 lg:text-5xl max-sm:text-3xl ">
                  The
                </small>{" "}
                Best Beef Meat Shop
              </div>
              <p className="mt-4 text-white dark:text-gray-300">
                The Best Beef Meat Shop offers premium, high-quality cuts of
                beef sourced from trusted local farms. Known for its freshness,
                the shop ensures that every piece of meat is carefully selected
                and expertly butchered. With exceptional customer service, they
                cater to both everyday needs and special occasions, making it
                the top choice for beef lovers.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-red-600 rounded-lg hover:bg-green-500 lg:mx-0 lg:w-auto focus:outline-none"
                >
                  Download from App Store
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover lg:w-full lg:h-full  lg:max-w-2xl lg:rounded-full"
              src="/bg.png"
              alt="apple watch photo"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
