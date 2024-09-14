"use client";
import "./products.css";
import { Slider } from "@nextui-org/react";
import { Row, Col } from "antd";
import { Checkbox } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { useGetAllProductQuery } from "@/redux/service/productSlice/productSlice";
import { IProducts } from "../../../app/types/ProductType";

import Spinner from "../Spinner/Spinner";
import ProductCard from "./ProductCard/ProductCard";
const Products = () => {
  const { data, isLoading, isSuccess } = useGetAllProductQuery(undefined);

  return (
    <>
      <Row
        style={{
          background: "#180905",
        }}
        className="p-4 text-white"
      >
        <Col span={24} lg={18}>
          <div className="mb-4 lg:mb-0">
            <div className="lg:ml-20 mb-4 lg:mb-0">
              <h1 className="text-xl font-semibold text-white text-center lg:text-left">
                Showing 1–09 of 20 results
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 p-4 lg:p-10 max-sm:gap-8">
            {isLoading ? (
              <>
                <Spinner />
              </>
            ) : (
              <>
                {data?.data.map((product: any) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </>
            )}
          </div>
        </Col>

        <Col
          style={{
            background: "#441f16",
          }}
          span={24}
          lg={6}
          className=" lg:mt-14 rounded-md  "
        >
          <section className="container ">
            <div className="lg:ml-5 p-10  mt-5 max-sm:ms-10">
              <h1 className="text-2xl font-bold mb-4">FILTER BY</h1>
              <Divider className="my-4 bg-white" />
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
            <div className="lg:ml-5 mt-10 p-10 max-sm:ms-10">
              <h1 className="text-2xl font-bold mb-4">CATEGORY</h1>
              <Divider className="my-4 bg-white" />
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

            <div className="lg:ml-5 mt-3 p-5 max-sm:ms-10">
              <h1 className="text-2xl font-bold mb-4">LATEST PRODUCTS</h1>
              <Divider className="my-4 bg-white" />
              <div className="flex gap-5 mb-5">
                <img
                  src="https://themegenix.net/html/bemet/assets/img/product/lp_img01.jpg"
                  alt=""
                />
                <div className="ms-5">
                  <h1 className="mt-2 font-bold text-md">ROAST CHICKEN</h1>
                  <Divider className="my-4 " />
                  <h1 className="font-bold text-lg">5$</h1>
                </div>
              </div>
              <div className="flex gap-5 mb-5">
                <img
                  src="https://themegenix.net/html/bemet/assets/img/product/lp_img02.jpg"
                  alt=""
                />
                <div className="ms-5">
                  <h1 className="mt-2 font-bold text-md">VENISON MEAT</h1>
                  <Divider className="my-4 bg-white" />
                  <h1 className="font-bold text-lg">5$</h1>
                </div>
              </div>
              <div className="flex gap-5 mb-5">
                <img
                  src="https://themegenix.net/html/bemet/assets/img/product/lp_img01.jpg"
                  alt=""
                />
                <div className="ms-5">
                  <h1 className="mt-2 font-bold text-md">ROAST CHICKEN</h1>
                  <Divider className="my-4 bg-white" />
                  <h1 className="font-bold text-lg">5$</h1>
                </div>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </>
  );
};

export default Products;
