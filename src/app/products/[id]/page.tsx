"use client";
import ProductBanner from "@/components/ui/ProductBanner/ProductBanner";
import { useGetSingleProductQuery } from "@/redux/service/productSlice/productSlice";
import React, { useEffect, useState, useCallback } from "react";
import { Col, Row } from "antd";
import { IoIosStar } from "react-icons/io";
import Spinner from "../../../components/ui/Spinner/Spinner";
import { GiSelfLove } from "react-icons/gi";
import { Divider } from "@nextui-org/react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import "./style.css";
import Review from "@/components/ui/Review/Review";

interface CountdownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const SinglePage = ({ params }: any) => {
  const id: string = params.id;

  const { data, isLoading } = useGetSingleProductQuery(id);
  const [countDownTime, setCountDownTime] = useState<CountdownTime>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime: number) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;
    let days =
      Math.floor(timeDifference / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDifference / (24 * 60 * 60 * 1000)).toString()
        : `0${Math.floor(timeDifference / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor(
            (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          ).toString()
        : `0${Math.floor(
            (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor(
            (timeDifference % (60 * 60 * 1000)) / (1000 * 60)
          ).toString()
        : `0${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDifference % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDifference % (60 * 1000)) / 1000).toString()
        : `0${Math.floor((timeDifference % (60 * 1000)) / 1000)}`;

    if (timeDifference < 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    } else {
      setCountDownTime({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 1,
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );

    const timerId = setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const cleanup = startCountDown();
    return cleanup;
  }, [startCountDown]);

  useEffect(() => {
    if (data && data.data && data.data.imgUrl) {
      setMainImage(data.data.imgUrl); // Initialize mainImage with the first image URL
    }
  }, [data]);

  const [mainImage, setMainImage] = useState<string>("");

  const images = [
    data?.data.imgUrl,
    data?.data.imgUrlOne,
    data?.data.imgUrlTwo,
  ];

  const thumbnails = [
    data?.data.imgUrl,
    data?.data.imgUrlOne,
    data?.data.imgUrlTwo,
  ];

  return (
    <>
      <ProductBanner />
      {isLoading ? (
        <Spinner />
      ) : (
        <Row className="lg:mt-10 max-sm:mt-3">
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="  lg:ps-4 lg:pe-4  max-sm:p-4">
              <div className="image-container">
                <img
                  src={mainImage}
                  alt="Main"
                  className="main-image rounded-2xl shadow-sm"
                />
              </div>
              <div className="thumbnail-container">
                {thumbnails.map((thumb, index) => (
                  <img
                    key={index}
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    className="thumbnail rounded-lg"
                    onClick={() => setMainImage(images[index])}
                  />
                ))}
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <section className="p-3">
              <h1 className="lg:text-4xl font-bold font-serif max-sm:text-2xl">
                {data?.data.name}
              </h1>
              <div className="flex items-center mt-2 mb-2">
                <p className="flex text-red-600">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </p>
                <p className="lg:ms-2 max-sm:ms-2">(4 customer reviews)</p>
              </div>
              <div>
                <h1 className="text-red-600 font-bold text-4xl mt-2 mb-2">
                  ${data?.data.price} - IN STOCK
                </h1>
              </div>
              <div className="text-2xl font-mono font-medium lg:mt-8">
                Hurry Up! Sale ends in:
              </div>
              <div
                style={{
                  backgroundColor: "#f7f4ef",
                }}
                className="flex  gap-5 lg:w-8/12 items-center justify-center  rounded-xl p-5  border-red-600 shadow-md mt-3 lg:mt-8">
                <p className="text-xl font-bold font-mono text-red-600">
                  {countDownTime.days} days
                </p>
                <p className="text-xl font-bold font-mono text-red-600">
                  {countDownTime.hours} hours
                </p>
                <p className="text-xl font-bold font-mono text-red-600">
                  {countDownTime.minutes} mins
                </p>
                <p className="text-xl font-bold font-mono text-red-600 ">
                  {countDownTime.seconds} secs
                </p>
              </div>
              <div className="lg:mt-8 max-sm:mt-3">
                <p className="text-gray-700 text-md font-semibold lg:text-xl">
                  Meat provide well shaped fresh and the organic meat well
                  animals Fresh And Halal Beef
                </p>
              </div>
              <div className="mt-8">
                <h1 className="font-semibold text-md mb-8">QUANTITY :</h1>
                <div className="flex flex-col lg:flex-row justify-between max-sm:w-full lg:w-auto">
                  <div className="flex w-full lg:w-44 mb-4 lg:mb-0">
                    <button className="font-bold text-lg border py-3 px-5 flex-1">
                      <FiPlusCircle className="text-red-600" />
                    </button>
                    <p className="font-bold border py-3 px-5 flex-1 text-center">
                      {data?.data.quantity}
                    </p>
                    <button className="font-bold text-lg border py-3 px-5 flex-1">
                      <FiMinusCircle className="text-red-600" />
                    </button>
                  </div>
                  <div className="w-full lg:w-auto">
                    <button
                      style={{ backgroundColor: "#f7f4ef" }}
                      className="w-full lg:px-48 py-4 font-bold text-md hover:bg-red-600 transition-colors duration-300">
                      PURCHASE
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:mt-8 mt-4">
                <button
                  style={{
                    backgroundColor: "#2a1510",
                  }}
                  className="w-full text-white text-xl font-bold py-4 ">
                  BUY IT NOW{" "}
                </button>
              </div>

              <div className="mt-5">
                <h1 className="mt-3 mb-3 font-medium font-serif text-md">
                  GUARANTEED SAFE CHECKOUT:
                </h1>

                <img
                  src="https://themegenix.net/html/bemet/assets/img/product/payment_method.png"
                  alt=""
                />
              </div>
              <div className="mt-4">
                <h1 className="flex items-center font-semibold text-lg">
                  <GiSelfLove />
                  ADD TO WISHLIST
                </h1>
                <Divider className="my-4" />
              </div>
              <div className="font-medium">
                <p>SKU: 002</p>
                <p>CATEGORY: LIPSTICK</p>
              </div>
            </section>
          </Col>
        </Row>
      )}

      <Review />
    </>
  );
};

export default SinglePage;
