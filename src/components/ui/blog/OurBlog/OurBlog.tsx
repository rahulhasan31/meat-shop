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
const OurBlog = () => {
  return (
    <>
      <Row className="p-4 mt-20">
        <Col span={24} lg={18}>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 p-4 lg:p-10 max-sm:gap-8"></div>
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

export default OurBlog;
