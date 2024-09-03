import React from "react";
import "./Quality.css";
const QualityBanner = () => {
  return (
    <>
      <div className="lg:flex flex-col md:flex-row justify-between p-6 md:p-20  max-sm:text-center">
        <div className="mb-8 md:mb-0">
          <p className="text-xl md:text-2xl qu">Customer Quotes</p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Organic Premium <br />{" "}
            <p className="text-red-600 font-bold">Quality</p>
          </h1>
          <button className="mt-3 px-4 py-2 font-bold text-white bg-red-600 rounded-full hover:bg-red-700">
            MORE ABOUT
          </button>
        </div>

        <div className="lg:flex flex-wrap justify-center  max-sm:grid max-sm:grid-cols-2">
          <div className="flex flex-col items-center m-2 md:m-4 ">
            <div
              style={{ backgroundColor: "#3a1c15" }}
              className="w-20 h-20 md:w-40 md:h-40 hover:bg-red-600 rounded-full flex items-center justify-center ">
              <img
                src="/cat_icon01.png"
                alt="Duck Meat"
                className="w-12 h-12 md:w-24 md:h-24"
              />
            </div>
            <p className="mt-2 meat text-center text-sm md:text-lg font-bold">
              DUCK MEAT
            </p>
          </div>
          <div className="flex flex-col items-center m-2 md:m-4 ">
            <div
              style={{ backgroundColor: "#3a1c15" }}
              className="w-20 h-20 md:w-40 md:h-40 hover:bg-red-600 rounded-full flex items-center justify-center ">
              <img
                src="/cat_icon02.png"
                alt="Duck Meat"
                className="w-12 h-12 md:w-24 md:h-24"
              />
            </div>
            <p className="mt-2  meat text-center text-sm md:text-lg font-bold">
              CHICKEN MEAT
            </p>
          </div>
          <div className="flex flex-col items-center m-2 md:m-4 ">
            <div
              style={{ backgroundColor: "#3a1c15" }}
              className="w-20 h-20 md:w-40 md:h-40 hover:bg-red-600 rounded-full flex items-center justify-center ">
              <img
                src="cat_icon03.png"
                alt="Duck Meat"
                className="w-12 h-12 md:w-24 md:h-24"
              />
            </div>
            <p className="mt-2 meat text-center text-sm md:text-lg font-bold">
              HORSE MEAT
            </p>
          </div>
          <div className="flex flex-col items-center m-2 md:m-4 ">
            <div
              style={{ backgroundColor: "#3a1c15" }}
              className="w-20 h-20 md:w-40 md:h-40 hover:bg-red-600 rounded-full flex items-center justify-center ">
              <img
                src="cat_icon04.png"
                alt="Duck Meat"
                className="w-12 h-12 md:w-24 md:h-24"
              />
            </div>
            <p className="mt-2 meat text-center text-sm md:text-lg font-bold">
              SHEEP MEAT
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QualityBanner;
