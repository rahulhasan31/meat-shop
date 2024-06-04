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
  return (
    <Swiper className="mySwiper ">
      <SwiperSlide>
        <div className="banner-slide">
          <div className="banner-overlay"></div>
          <img
            className=""
            src="https://i.ibb.co/6b5H3sg/Black-Modern-Burger-Promotion-Banner-Landscape-2.png"
            alt="Fresh Meat Banner"
          />
          <div className="banner-text">
            <h1 className="font-serif ">Fresh Meat</h1>
            <p className="text-red-600 font-bold text-2xl font-serif">
              BUTCHER & MEAT SHOP
            </p>
            <Button
              color="danger"
              variant="shadow"
              className="max-sm:px-3 max-sm:py-1  max-sm:text-sm lg:mt-10 px-10 py-4 rounded-full font-semibold text-xl">
              Order Now
            </Button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
