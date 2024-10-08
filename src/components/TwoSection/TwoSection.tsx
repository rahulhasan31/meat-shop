import React from "react";
import Image from "next/image";
const TwoSection = () => {
  return (
    <>
      <section
        style={{
          background: "#180905",
        }}
        className=" p-4 md:p-16"
      >
        <div className="grid border-1 rounded-md border-red-500 text-white grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" rounded-lg shadow-md overflow-hidden p-4 md:p-6 flex flex-col md:flex-row items-center">
            <div className="relative flex-shrink-0">
              <div className="">
                <Image
                  width={500}
                  height={500}
                  src="/product05.png"
                  alt="Sunday Limited Offer"
                  className="w-72 h-72 md:w-72 md:h-72  "
                />
              </div>
            </div>
            <div className="flex-1 mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <p className="text-red-600 font-bold uppercase text-sm">
                Frieza Products
              </p>
              <h2 className="text-xl md:text-2xl font-bold mt-2">
                Sunday Limited Offer
              </h2>
              <p className="text-white mt-1">Make a purchase from you during</p>
              <p className="text-red-600 text-xl md:text-2xl font-bold mt-4">
                $12.00
              </p>
            </div>
          </div>

          <div className="text-white rounded-lg shadow-md overflow-hidden p-4 md:p-6 flex flex-col md:flex-row items-center">
            <div className="relative flex-shrink-0">
              <div className="">
                <Image
                  width={500}
                  height={500}
                  src="/product03.png"
                  alt="Flash Sale Limited Offer"
                  className="w-72 h-72 md:w-72 md:h-72  transform translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 "
                />
              </div>
            </div>
            <div className="flex-1 mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <p className="text-red-600 font-bold uppercase text-sm">
                Only Chicken
              </p>
              <h2 className="text-xl md:text-2xl font-bold mt-2">
                Flash Sale Limited Offer
              </h2>
              <p className="text-white mt-1">Make a purchase from you during</p>
              <p className="text-red-600 text-xl md:text-2xl font-bold mt-4">
                $6.00
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TwoSection;
