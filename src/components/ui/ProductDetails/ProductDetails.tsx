"use client";
import { Col, Row } from "antd";
import { useCallback, useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import FsLightbox from "fslightbox-react";
import "./style.css";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
interface CountdownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const ProductDetails = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

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
      //   clearInterval();
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

  const images = [
    "https://themegenix.net/html/bemet/assets/img/product/shop_details01.jpg",
    "https://themegenix.net/html/bemet/assets/img/product/shop_details02.jpg",
    "https://themegenix.net/html/bemet/assets/img/product/shop_details03.jpg",
  ];

  const thumbnails = [
    "https://themegenix.net/html/bemet/assets/img/product/shop_details01.jpg",
    "https://themegenix.net/html/bemet/assets/img/product/shop_details02.jpg",
    "https://themegenix.net/html/bemet/assets/img/product/shop_details03.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  console.log(mainImage);

  return (
    <>
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
              Necessary Beef Body
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
                $8.50 - IN STOCK
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
                Meat provide well shaped fresh and the organic meat well animals
                is Humans have hunted schistoric times meat, the flesh
              </p>
            </div>
            <div className="mt-8">
              <h1 className=" font-semibold text-md mb-8">QUANTITY :</h1>
              <div className="flex justify-between">
                <div className="flex lg:w-44   ">
                  <button className="font-bold text-lg border py-3 px-5 ">
                    <FiPlusCircle className="text-red-600 " />
                  </button>
                  <p className="font-bold border py-3 px-5">1</p>
                  <button className="font-bold text-lg border py-3 px-5">
                    <FiMinusCircle className="text-red-600 " />
                  </button>

                  <div></div>
                </div>
                <div className="hover:bg-red-600">
                  <button
                    style={{
                      backgroundColor: "#f7f4ef",
                    }}
                    className="px-48 py-4 font-bold text-md ">
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
          </section>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
