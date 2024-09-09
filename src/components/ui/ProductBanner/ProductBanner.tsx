import React from "react";
import "./style.css";
import { GiChickenLeg } from "react-icons/gi";
import { FaGripLinesVertical } from "react-icons/fa";

const ProductBanner = () => {
  return (
    <div className="bg-banner">
      <div className="flex justify-center items-center">
        <h1 className="Os">Our Shop</h1>
        <h1 className="icon">
          <GiChickenLeg />
        </h1>
      </div>
      <div className="relative d flex justify-center items-center">
        <p className="relative h max-sm:text-2xl">Meat</p>
        <p className="relative h max-sm:text-2xl">
          <FaGripLinesVertical className="text-white text-3xl" />
        </p>
        <p className="relative h max-sm:text-2xl">Shop</p>
      </div>
    </div>
  );
};

export default ProductBanner;
