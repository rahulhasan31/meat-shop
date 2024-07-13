"use client";
import { Col, Row } from "antd";
import { useCallback, useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import FsLightbox from "fslightbox-react";
import "./style.css";
import { GiSelfLove } from "react-icons/gi";
import { Divider } from "@nextui-org/react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import Review from "../Review/Review";
interface CountdownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const ProductDetails = ({ id }: { id: string }) => {
  const [productID, setProductID] = useState<string | null>(null);
  useEffect(() => {
    setProductID(id);
  }, [setProductID]);
  console.log("productID", productID);

  return (
    <>
      <Review />
    </>
  );
};

export default ProductDetails;
