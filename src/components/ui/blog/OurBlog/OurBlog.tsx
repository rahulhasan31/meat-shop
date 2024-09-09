"use client";
import { Slider } from "@nextui-org/react";
import { Row, Col } from "antd";
import { Checkbox } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import BlogSection from "@/components/BlogSection/BlogSection";

import BlogDev from "../BlogDev";
const OurBlog = () => {
  return (
    <>
      <Row className="p-4 mt-20">
        <Col span={24} lg={18}>
          <BlogDev />
        </Col>

        <Col
          style={{
            background: "#441f16",
          }}
          span={24}
          lg={6}
          className="mt-4 lg:mt-0 text-white"
        >
          <div className="lg:ml-20 me-10 max-sm:ms-10 mt-10">
            <h1 className="text-2xl font-bold mb-4">FILTER BY</h1>
            <Divider className="my-4" />
            <div>
              <Slider
                color="danger"
                label="Price Range"
                step={50}
                minValue={0}
                maxValue={1000}
                defaultValue={[100, 500]}
                formatOptions={{ style: "currency", currency: "USD" }}
                className="max-w-md"
              />
            </div>
          </div>
          <div className="lg:ml-20 mt-10 me-10 max-sm:ms-10">
            <h1 className="text-2xl font-bold mb-4">CATEGORY</h1>
            <Divider className="my-4" />
            <div className="flex justify-between p-2">
              <Checkbox color="danger" defaultSelected>
                <h1 className="lg:ms-3 font-semibold text-white">Mutton</h1>
              </Checkbox>

              <div>
                <h1 className="font-semibold">05</h1>
              </div>
            </div>
            <div className="flex justify-between p-2">
              <Checkbox color="danger" defaultSelected>
                <h1 className="lg:ms-3 font-semibold text-white">Beef</h1>
              </Checkbox>

              <div>
                <h1 className="font-semibold">20</h1>
              </div>
            </div>
            <div className="flex justify-between p-2">
              <Checkbox color="danger" defaultSelected>
                <h1 className="lg:ms-3 font-semibold text-white">Chicken</h1>
              </Checkbox>

              <div>
                <h1 className="font-semibold">10</h1>
              </div>
            </div>
            <div></div>
          </div>

          <div className="lg:ml-20 mt-3">
            <h1 className="text-2xl font-bold mb-4">Recent Post</h1>
            <Divider className="my-4" />
            <div className="flex gap-5 mb-5">
              <img
                src="https://themegenix.net/html/bemet/assets/img/blog/rc_post_img01.jpg"
                alt=""
              />
              <div className="ms-5">
                <h1 className="mt-2 font-bold text-lg">
                  Sources of protein elit
                </h1>
                <Divider className="my-4 " />
                <h1 className="font-bold text-xs">January 30, 2023</h1>
              </div>
            </div>
            <div className="flex gap-5 mb-5">
              <img
                src="https://themegenix.net/html/bemet/assets/img/blog/rc_post_img02.jpg"
                alt=""
              />
              <div className="ms-5">
                <h1 className="mt-2 font-bold text-lg">Different Types Meat</h1>
                <Divider className="my-4 " />
                <h1 className="font-bold text-xs">January 30, 2023</h1>
              </div>
            </div>
            <div className="flex gap-5 mb-5">
              <img
                src="https://themegenix.net/html/bemet/assets/img/blog/rc_post_img03.jpg"
                alt=""
              />
              <div className="ms-5">
                <h1 className="mt-2 font-extrabold text-lg">
                  Eat meat and poultry
                </h1>
                <Divider className="my-4 " />
                <h1 className="font-bold text-xs">January 30, 2023</h1>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default OurBlog;
