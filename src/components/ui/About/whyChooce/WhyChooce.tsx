import React from "react";
import "./style.css";
const WhyChooce = () => {
  return (
    <section
      style={{
        backgroundColor: "#180905",
      }}
      className="text-white p-4 md:p-8  "
    >
      <div className="p-5 ">
        <p className="text-center shop text-red-500 font-bold text-2xl">
          About Bemet
        </p>
        <h1 className="text-center our  text-5xl font-bold">
          Why Choose Our Shop
        </h1>
        <img
          className="w-32 text-center mx-auto lg:relative lg:-top-10 max-sm:relative max-sm:-top-8"
          src="/why1.png"
        />
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-3 md:gap-6  
     relative -top-12  "
      >
        <div className="relative">
          <div className="absolute inset-x-0 top-0 flex justify-center lg:-mt-1  z-10">
            <img
              src="/ab3.png"
              alt="Hamburg Meat"
              className="object-cover lg:w-40 lg:h-40  max-sm:w-40 "
            />
          </div>
          <div
            style={{
              background: "#441f16",
            }}
            className=" rounded-lg  shadow-md overflow-hidden p-6 text-center h-80 relative box mt-16 rounded-b-lg"
          >
            <div className="mt-16  relative lg:top-3 max-sm:top-5">
              <h2 className="text-xl font-bold mt-4">100% Organic Meat</h2>
              <p className="text-lg font-semibold mt-2 p-5">
                We provide well shaped fresh and the organic meat from our farm
                very hygienic well.
              </p>
              <p className="text-red-600 font-bold uppercase text-sm mt-2">
                LEARN MORE
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-x-0 top-0 flex justify-center lg:-mt-1  z-10">
            <img
              src="/ab2.png"
              alt="Hamburg Meat"
              className="object-cover lg:w-40 lg:h-40  max-sm:w-40 "
            />
          </div>
          <div
            style={{
              background: "#441f16",
            }}
            className=" rounded-lg  shadow-md overflow-hidden p-6 text-center h-80 relative box mt-16 rounded-b-lg"
          >
            <div className="mt-16  relative lg:top-3 max-sm:top-5">
              <h2 className="text-xl font-bold mt-4">Beef Tenderloin</h2>
              <p className="text-lg font-semibold mt-2 p-5">
                We provide well shaped fresh and the organic meat from our farm
                very hygienic well.
              </p>
              <p className="text-red-600 font-bold uppercase text-sm mt-2">
                LEARN MORE
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-x-0 top-0 flex justify-center lg:-mt-1  z-10">
            <img
              src="/ab1.png"
              alt="Hamburg Meat"
              className="object-cover lg:w-40 lg:h-40  max-sm:w-40 "
            />
          </div>
          <div
            style={{
              background: "#441f16",
            }}
            className=" rounded-lg  shadow-md overflow-hidden p-6 text-center h-80 relative box mt-16 rounded-b-lg"
          >
            <div className="mt-16  relative lg:top-3 max-sm:top-5">
              <h2 className="text-xl font-bold mt-4">Chuck Roast</h2>
              <p className="text-lg font-semibold mt-2 p-5">
                We provide well shaped fresh and the organic meat from our farm
                very hygienic well.
              </p>
              <p className="text-red-600 font-bold uppercase text-sm mt-2">
                LEARN MORE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooce;
