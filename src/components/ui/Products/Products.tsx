import "./products.css";
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

const Products = () => {
  return (
    <>
      <Row className="p-4 mt-20">
        <Col span={24} lg={18}>
          <div className="mb-4 lg:mb-0">
            <div className="lg:ml-20 mb-4 lg:mb-0">
              <h1 className="text-xl font-semibold text-gray-800 text-center lg:text-left">
                Showing 1–09 of 20 results
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 p-4 lg:p-10">
            <div className="relative">
              <div className="absolute inset-x-0 top-7 flex justify-center z-10 max-sm:top-2 max-sm:">
                <img
                  src="https://i.ibb.co/99GtLN0/product-img03.png"
                  alt="Hamburg Meat"
                  className="object-cover lg:h-44 max-sm:h-48 max-sm:p-3"
                />
              </div>
              <div
                style={{
                  backgroundColor: "#f1ece3",
                }}
                className="rounded-lg shadow-md overflow-hidden p-6 text-center h-96 relative box  rounded-b-lg max-sm:h-96">
                <div className="lg:mt-16 relative lg:top-24 max-sm:top-20 max-sm:mt-16">
                  <div className="flex relative -top-44  items-center  max-sm:-top-40 ">
                    <h1 className="font-bold me-2">NEW</h1>
                    <p>
                      <IoIosStar className="text-red-600 " />
                    </p>
                  </div>
                  <p className="text-red-600 font-bold uppercase text-sm mt-2">
                    GORGANIC
                  </p>
                  <h2 className="text-xl font-bold mt-4">STACK MEATS</h2>
                  <p className="text-lg font-bold mt-2">$6.99</p>

                  <div className="lg:flex lg:justify-center lg:items-center bg-white lg:px-3 lg:py-3 lg:w-40 lg:mx-auto rounded-full gap-5 lg:mt-3 max-sm:flex max-sm:w-40 max-sm:justify-center max-sm:mx-auto max-sm:py-3 max-sm:mt-2 ">
                    <button className="font-bold text-lg">
                      <FiPlusCircle className="text-red-600" />
                    </button>
                    <p className="font-bold ">1</p>
                    <button className="font-bold text-lg">
                      <FiMinusCircle className="text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-x-0 top-7 flex justify-center z-10 max-sm:top-2 max-sm:">
                <img
                  src="https://i.ibb.co/99GtLN0/product-img03.png"
                  alt="Hamburg Meat"
                  className="object-cover lg:h-44 max-sm:h-48 max-sm:p-3"
                />
              </div>
              <div
                style={{
                  backgroundColor: "#f1ece3",
                }}
                className="rounded-lg shadow-md overflow-hidden p-6 text-center h-96 relative box  rounded-b-lg max-sm:h-96">
                <div className="lg:mt-16 relative lg:top-24 max-sm:top-20 max-sm:mt-16">
                  <div className="flex relative -top-44  items-center  max-sm:-top-40 ">
                    <h1 className="font-bold me-2">NEW</h1>
                    <p>
                      <IoIosStar className="text-red-600 " />
                    </p>
                  </div>
                  <p className="text-red-600 font-bold uppercase text-sm mt-2">
                    GORGANIC
                  </p>
                  <h2 className="text-xl font-bold mt-4">STACK MEATS</h2>
                  <p className="text-lg font-bold mt-2">$6.99</p>

                  <div className="lg:flex lg:justify-center lg:items-center bg-white lg:px-3 lg:py-3 lg:w-40 lg:mx-auto rounded-full gap-5 lg:mt-3 max-sm:flex max-sm:w-40 max-sm:justify-center max-sm:mx-auto max-sm:py-3 max-sm:mt-2 ">
                    <button className="font-bold text-lg">
                      <FiPlusCircle className="text-red-600" />
                    </button>
                    <p className="font-bold ">1</p>
                    <button className="font-bold text-lg">
                      <FiMinusCircle className="text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-x-0 top-7 flex justify-center z-10 max-sm:top-2 max-sm:">
                <img
                  src="https://i.ibb.co/99GtLN0/product-img03.png"
                  alt="Hamburg Meat"
                  className="object-cover lg:h-44 max-sm:h-48 max-sm:p-3"
                />
              </div>
              <div
                style={{
                  backgroundColor: "#f1ece3",
                }}
                className="rounded-lg shadow-md overflow-hidden p-6 text-center h-96 relative box  rounded-b-lg max-sm:h-96">
                <div className="lg:mt-16 relative lg:top-24 max-sm:top-20 max-sm:mt-16">
                  <div className="flex relative -top-44  items-center  max-sm:-top-40 ">
                    <h1 className="font-bold me-2">NEW</h1>
                    <p>
                      <IoIosStar className="text-red-600 " />
                    </p>
                  </div>
                  <p className="text-red-600 font-bold uppercase text-sm mt-2">
                    GORGANIC
                  </p>
                  <h2 className="text-xl font-bold mt-4">STACK MEATS</h2>
                  <p className="text-lg font-bold mt-2">$6.99</p>

                  <div className="lg:flex lg:justify-center lg:items-center bg-white lg:px-3 lg:py-3 lg:w-40 lg:mx-auto rounded-full gap-5 lg:mt-3 max-sm:flex max-sm:w-40 max-sm:justify-center max-sm:mx-auto max-sm:py-3 max-sm:mt-2 ">
                    <button className="font-bold text-lg">
                      <FiPlusCircle className="text-red-600" />
                    </button>
                    <p className="font-bold ">1</p>
                    <button className="font-bold text-lg">
                      <FiMinusCircle className="text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-x-0 top-7 flex justify-center z-10 max-sm:top-2 max-sm:">
                <img
                  src="https://i.ibb.co/99GtLN0/product-img03.png"
                  alt="Hamburg Meat"
                  className="object-cover lg:h-44 max-sm:h-48 max-sm:p-3"
                />
              </div>
              <div
                style={{
                  backgroundColor: "#f1ece3",
                }}
                className="rounded-lg shadow-md overflow-hidden p-6 text-center h-96 relative box  rounded-b-lg max-sm:h-96">
                <div className="lg:mt-16 relative lg:top-24 max-sm:top-20 max-sm:mt-16">
                  <div className="flex relative -top-44  items-center  max-sm:-top-40 ">
                    <h1 className="font-bold me-2">NEW</h1>
                    <p>
                      <IoIosStar className="text-red-600 " />
                    </p>
                  </div>
                  <p className="text-red-600 font-bold uppercase text-sm mt-2">
                    GORGANIC
                  </p>
                  <h2 className="text-xl font-bold mt-4">STACK MEATS</h2>
                  <p className="text-lg font-bold mt-2">$6.99</p>

                  <div className="lg:flex lg:justify-center lg:items-center bg-white lg:px-3 lg:py-3 lg:w-40 lg:mx-auto rounded-full gap-5 lg:mt-3 max-sm:flex max-sm:w-40 max-sm:justify-center max-sm:mx-auto max-sm:py-3 max-sm:mt-2 ">
                    <button className="font-bold text-lg">
                      <FiPlusCircle className="text-red-600" />
                    </button>
                    <p className="font-bold ">1</p>
                    <button className="font-bold text-lg">
                      <FiMinusCircle className="text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-x-0 top-7 flex justify-center z-10 max-sm:top-2 max-sm:">
                <img
                  src="https://i.ibb.co/99GtLN0/product-img03.png"
                  alt="Hamburg Meat"
                  className="object-cover lg:h-44 max-sm:h-48 max-sm:p-3"
                />
              </div>
              <div
                style={{
                  backgroundColor: "#f1ece3",
                }}
                className="rounded-lg shadow-md overflow-hidden p-6 text-center h-96 relative box  rounded-b-lg max-sm:h-96">
                <div className="lg:mt-16 relative lg:top-24 max-sm:top-20 max-sm:mt-16">
                  <div className="flex relative -top-44  items-center  max-sm:-top-40 ">
                    <h1 className="font-bold me-2">NEW</h1>
                    <p>
                      <IoIosStar className="text-red-600 " />
                    </p>
                  </div>
                  <p className="text-red-600 font-bold uppercase text-sm mt-2">
                    GORGANIC
                  </p>
                  <h2 className="text-xl font-bold mt-4">STACK MEATS</h2>
                  <p className="text-lg font-bold mt-2">$6.99</p>

                  <div className="lg:flex lg:justify-center lg:items-center bg-white lg:px-3 lg:py-3 lg:w-40 lg:mx-auto rounded-full gap-5 lg:mt-3 max-sm:flex max-sm:w-40 max-sm:justify-center max-sm:mx-auto max-sm:py-3 max-sm:mt-2 ">
                    <button className="font-bold text-lg">
                      <FiPlusCircle className="text-red-600" />
                    </button>
                    <p className="font-bold ">1</p>
                    <button className="font-bold text-lg">
                      <FiMinusCircle className="text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-0 top-7 flex justify-center z-10 max-sm:top-2 max-sm:">
                <img
                  src="https://i.ibb.co/99GtLN0/product-img03.png"
                  alt="Hamburg Meat"
                  className="object-cover lg:h-44 max-sm:h-48 max-sm:p-3"
                />
              </div>
              <div
                style={{
                  backgroundColor: "#f1ece3",
                }}
                className="rounded-lg shadow-md overflow-hidden p-6 text-center h-96 relative box  rounded-b-lg max-sm:h-96">
                <div className="lg:mt-16 relative lg:top-24 max-sm:top-20 max-sm:mt-16">
                  <div className="flex relative -top-44  items-center  max-sm:-top-40 ">
                    <h1 className="font-bold me-2">NEW</h1>
                    <p>
                      <IoIosStar className="text-red-600 " />
                    </p>
                  </div>
                  <p className="text-red-600 font-bold uppercase text-sm mt-2">
                    GORGANIC
                  </p>
                  <h2 className="text-xl font-bold mt-4">STACK MEATS</h2>
                  <p className="text-lg font-bold mt-2">$6.99</p>

                  <div className="lg:flex lg:justify-center lg:items-center bg-white lg:px-3 lg:py-3 lg:w-40 lg:mx-auto rounded-full gap-5 lg:mt-3 max-sm:flex max-sm:w-40 max-sm:justify-center max-sm:mx-auto max-sm:py-3 max-sm:mt-2 ">
                    <button className="font-bold text-lg">
                      <FiPlusCircle className="text-red-600" />
                    </button>
                    <p className="font-bold ">1</p>
                    <button className="font-bold text-lg">
                      <FiMinusCircle className="text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={24} lg={6} className="mt-4 lg:mt-0">
          <div className="lg:ml-20">
            <h1 className="text-2xl font-bold mb-4">FILTER BY</h1>
            <Divider className="my-4" />
            <div>
              <Slider
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
          <div className="lg:ml-20 mt-10">
            <h1 className="text-2xl font-bold mb-4">CATEGORY</h1>
            <Divider className="my-4" />
            <div className="flex justify-between p-2">
              <Checkbox defaultSelected>
                <h1 className="lg:ms-3 font-semibold">Mutton</h1>
              </Checkbox>

              <div>
                <h1 className="font-semibold">05</h1>
              </div>
            </div>
            <div className="flex justify-between p-2">
              <Checkbox defaultSelected>
                <h1 className="lg:ms-3 font-semibold">Beef</h1>
              </Checkbox>

              <div>
                <h1 className="font-semibold">20</h1>
              </div>
            </div>
            <div className="flex justify-between p-2">
              <Checkbox defaultSelected>
                <h1 className="lg:ms-3 font-semibold">Chicken</h1>
              </Checkbox>

              <div>
                <h1 className="font-semibold">10</h1>
              </div>
            </div>
            <div></div>
          </div>

          <div className="lg:ml-20 mt-3">
            <h1 className="text-2xl font-bold mb-4">LATEST PRODUCTS</h1>
            <Divider className="my-4" />
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
                <Divider className="my-4 " />
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
                <Divider className="my-4 " />
                <h1 className="font-bold text-lg">5$</h1>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Products;
