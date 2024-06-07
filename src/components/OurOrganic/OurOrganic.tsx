import React from "react";
import "./OurOrganic.css";
const OurOrganic = () => {
  return (
    <section
      style={{
        backgroundColor: "#F2EEEB",
      }}
      className="bg-gray-100 p-4 md:p-8  ">
      <div className="p-5 ">
        <p className="text-center shop text-red-500 font-bold text-2xl">
          Organic Shop
        </p>
        <h1 className="text-center our  text-4xl font-bold">
          Our Organic Products
        </h1>
        <img
          className="w-32 text-center mx-auto lg:relative lg:-top-10 max-sm:relative max-sm:-top-8"
          src="https://i.ibb.co/bQQcFnd/153827712-butcher-logo-meat-restaurant-chef-symbol-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6  ">
        <div className="relative">
          <div className="absolute inset-x-0 top-0 flex justify-center lg:-mt-16  z-10">
            <img
              src="https://i.ibb.co/99GtLN0/product-img03.png"
              alt="Hamburg Meat"
              className="object-cover lg:w-ful lg:h-80 "
            />
          </div>
          <div className="bg-white rounded-lg  shadow-md overflow-hidden p-6 text-center h-80 relative box mt-16 rounded-b-lg">
            <div className="mt-16  relative lg:top-24 max-sm:top-20">
              <h2 className="text-xl font-bold mt-4">STACK MEATS</h2>
              <p className="text-lg font-semibold mt-2">$6.99</p>
              <p className="text-red-600 font-bold uppercase text-sm mt-2">
                Garden, Tools
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-x-0 top-0 flex justify-center lg:-mt-16  z-10">
            <img
              src="https://i.ibb.co/1nqTNxb/product-img02.png"
              alt="Hamburg Meat"
              className="object-cover lg:w-ful lg:h-80 "
            />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 text-center h-80 relative box mt-16 rounded-b-lg">
            <div className="mt-16  relative lg:top-28 max-sm:top-28">
              <h2 className="text-xl font-bold mt-4">ROAST CHICKEN</h2>
              <p className="text-lg font-semibold mt-2">$7.99</p>
              <p className="text-red-600 font-bold uppercase text-sm mt-2">
                Garden, Tools
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-x-0 top-0 flex justify-center lg:-mt-16  z-10">
            <img
              src="https://i.ibb.co/LY5YDz4/features-img01.png"
              alt="Hamburg Meat"
              className="object-cover lg:w-ful lg:h-80 "
            />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 text-center h-80 relative box mt-16 rounded-b-lg">
            <div className="mt-16  relative lg:top-24 max-sm:top-20">
              <h2 className="text-xl font-bold mt-4">HAMBURG MEAT</h2>
              <p className="text-lg font-semibold mt-2">$6.99</p>
              <p className="text-red-600 font-bold uppercase text-sm mt-2">
                Garden, Tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOrganic;
