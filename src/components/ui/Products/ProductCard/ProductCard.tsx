import React from "react";

import { FaCartArrowDown } from "react-icons/fa";

import { FiPlusCircle } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { useAppDispatch } from "@/redux/lib/hooks";
import { IProducts } from "@/app/types/ProductType";
import { addToCart } from "@/redux/features/cart/cartSlice";
import Swal from "sweetalert2";
import "./ProductCard.css";
import Image from "next/image";
interface IProps {
  product: IProducts;
}
const ProductCard = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: IProducts) => {
    dispatch(addToCart(product));
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Add To Cart Success",
      showConfirmButton: false,
      timer: 1000,
    });
  };
  return (
    <div className="relative">
      <Link href={`/products/${product._id}`}>
        <div className="absolute inset-x-0 top-7 flex justify-center z-10 max-sm:top-2 max-sm:">
          <Image
            width={500}
            height={100}
            src={product?.imgUrl}
            alt="Hamburg Meat"
            className="object-cover lg:h-44 max-sm:h-48 max-sm:p-3"
          />
        </div>
      </Link>
      <div
        style={{
          background: "#441f16",
        }}
        className="box text-white rounded-lg shadow-md overflow-hidden p-6 text-center h-96 relative   rounded-b-lg max-sm:h-96 "
      >
        <div className="lg:mt-16 relative lg:top-24 max-sm:top-20 max-sm:mt-16">
          <div className="flex relative -top-44  items-center  max-sm:-top-40 ">
            <h1 className="font-bold me-2 text-white">NEW</h1>
            <p>
              <IoIosStar className="text-red-600 " />
            </p>
          </div>
          <p className="text-red-600 font-bold uppercase text-sm mt-2">
            GORGANIC
          </p>
          <h2 className="text-xl font-bold mt-4 text-white">{product?.name}</h2>
          <p className="text-lg font-bold mt-2 text-white">${product?.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="font-bold text-lg"
          >
            <div className="lg:flex lg:justify-center lg:items-center bg-white lg:px-3 lg:py-3 lg:w-40 lg:mx-auto rounded-full gap-5 lg:mt-3 max-sm:flex max-sm:w-40 max-sm:justify-center max-sm:mx-auto max-sm:py-3 max-sm:mt-2 ">
              <FaCartArrowDown className="text-red-600" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
