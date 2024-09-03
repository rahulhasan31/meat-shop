"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "./style.css";

const TowSlider = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        watchSlidesProgress={true}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        className="custom-swiper">
        <SwiperSlide>
          <img src="/gallery_img03.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/bg-img.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/product_img02.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/gallery_img03.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TowSlider;
