"use client";

import { Slider } from "@nextui-org/react";
import { Row, Col } from "antd";
import { Checkbox } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { ImQuotesRight } from "react-icons/im";
import { TbVectorBezierCircle } from "react-icons/tb";
import { Divider } from "@nextui-org/react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaReplyAll } from "react-icons/fa";

const BlogSingle = () => {
  return (
    <>
      <Row
        style={{
          background: "#180905",
        }}
        className="p-4 text-white"
      >
        <Col span={24} lg={18}>
          <section className=" ">
            <div className="lg:w-4/5 flex  mx-auto">
              <img src="https://themegenix.net/html/bemet/assets/img/blog/blog_img01.jpg" />
            </div>
            <div className="lg:w-4/5 flex mx-auto max-sm:w-full lg:mt-5 max-sm:mt-3">
              <div className="flex justify-around gap-10">
                <p className="lg:text-xl"> JON DEO</p>
                <div className="flex  justify-center gap-5 items-center">
                  <FaRegCommentAlt className="text-xl" />
                  <p className="lg:text-xl  ">COMM (0)</p>
                </div>
                <div className="flex  justify-center gap-2 items-center">
                  <CiBookmark className="text-xl" />
                  <p className="lg:text-xl">HORSE MEAT</p>
                </div>
              </div>
            </div>

            <div className="lg:w-4/5   mx-auto lg:mt-3">
              <h1 className="text-3xl font-bold lg:mb-5 max-sm:mt-2">
                Necessary for the Human Body
              </h1>
              <h2 className="lg:text-lg max-sm:text-md">
                Meat provide well shaped fresh and the organic meat well animals
                is Humans ha hunted schistoric times meat, the flesh or other
                edible parts of animals usually domesticated cattle, swine, and
                sheep used for food, including not only the muscles also the
                tendons.debut novel from poet Oli Hazzard, consists of a single,
                50,000\-word sentence. An epistolary fiction addressed to an
                unidentified email recipient, the novel is modelled after the
                Japanese prose genre of the zuihitsu.
              </h2>
            </div>
            <div
              style={{
                backgroundColor: "#f5f1eb",
              }}
              className="lg:w-4/5  mx-auto border-l-5 border-red-600 lg:h-44 shadow-xl mt-4 p-5 rounded-lg"
            >
              <h1 className="text-black  text-lg font-medium ">
                “ Meat provide well shaped fresh and the organic meat well
                animals is Humans ha hunted schistoric times meat, the flesh or
                other edible parts of animals usually domesticated cattle,
                swine, and sheep used for food, including not only the muscles”
              </h1>
              <div className="flex justify-between">
                <p className="text-red-600 text-lg font-medium ">
                  - Mark Alaxander
                </p>
                <ImQuotesRight className="text-black text-5xl" />
              </div>
            </div>
            <div className="lg:w-4/5  mx-auto lg:mt-5 max-sm:mt-3">
              <p className="lg:text-lg max-sm:text-md">
                Humans ha hunted schistoric times meat, the flesh or other
                edible parts of animals usually domesticated cattle, swine, and
                sheep used for food, including not only the muscles also the
                tendons.debut novel from poet Oli Hazzard, consists of a single,
                50,000\-word sentence. An epistolary fiction addressed to an
                unidentified email recipient, the novel is modelled after the
                Japanese.
              </p>
            </div>
            <div className="lg:w-4/5 mx-auto lg:flex lg:mt-3 max-sm:mt-3">
              <img
                className="lg:h-60"
                src="https://themegenix.net/html/bemet/assets/img/images/sd_img02.jpg"
              />
              <div>
                <div className="lg:ms-3">
                  <h1 className="text-red-500 text-2xl font-semibold">
                    Garden Fresh Market
                  </h1>
                  <h2 className="lg:text-lg maxx-sm:text-md">
                    Meat provide well shaped fresh and is organic meat well
                    animals Humans have hunted schistoic times thats meat, the
                    flesh other edible parts animal usually domesti cated the
                    cattle, animals is Humans have hunted have hunted animal.
                  </h2>
                  <div>
                    <div className="flex gap-3 items-center lg:text-lg lg:mt-2">
                      <TbVectorBezierCircle className="text-red-500" />
                      <p>Humans Meat provide well shaped fresh</p>
                    </div>
                    <div className="flex gap-3 items-center lg:text-lg lg:mt-2">
                      <TbVectorBezierCircle className="text-red-500" />
                      <p>Meat provide well shaped fresh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-4/5 mx-auto mt-2">
              <p className="lg:text-lg max-sm:text-md">
                Humans ha hunted schistoric times meat, the flesh or other
                edible parts of animals usually domesticated cattle, swine, and
                sheep used for food, including not only the muscles also the
                tendons.debut novel from poet Oli Hazzard, consists of a single,
                50,000\-word sentence. An epistolary fiction addressed to an
                unidentified email recipient, the novel is modelled after the
                Japanese.
              </p>
            </div>
            <div className="lg:w-4/5 mx-auto mt-2">
              <Divider className="my-4 bg-white" />
            </div>
            <div className="lg:w-4/5 mx-auto mt-2">
              <div className="flex justify-between">
                <h1 className="text-lg">
                  <small className="text-red-600 text-xl font-bold">
                    Tags{" "}
                  </small>
                  : Food, Horse Meat, Protein
                </h1>
                <div className="flex gap-3">
                  Share :
                  <FaFacebook />
                  <FaTwitter />
                  <FaInstagram />
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#512319 ",
              }}
              className="lg:w-4/5 mx-auto mt-2 text-white rounded-lg shadow-2xl lg:p-10 max-sm:p-5"
            >
              <div className="lg:flex lg:items-center ">
                <img
                  src="https://themegenix.net/html/bemet/assets/img/blog/avatar_img.png"
                  className="lg:w-40 max-sm:mx-auto max-sm:w-40"
                />
                <div className="p-5 max-sm:text-center">
                  <h1 className="text-2xl text-red-600 font-semibold">
                    {" "}
                    Alaxzender Pailot
                  </h1>
                  <h3 className="lg:text-lg max-sm:text-lg">
                    {" "}
                    Humans ha hunted schistoric times meat, the flesh or other
                    edible parts of animals usually domesticated cattle, swine.
                  </h3>
                  <div className="flex gap-3 lg:text-lg items-center max-sm:justify-center ">
                    Share :
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-4/5 mx-auto lg:mt-10">
              <div>
                <h1 className="text-2xl">02 Comments</h1>
              </div>
              <Divider className="my-4 bg-white" />
              <div className=" mx-auto mt-2 text-white rounded-lg shadow-2xl lg:p-10 max-sm:p-5">
                <div className="lg:flex lg:items-center ">
                  <img
                    src="https://themegenix.net/html/bemet/assets/img/blog/comment_avatar01.png"
                    className="lg:w-40  max-sm:w-32"
                  />
                  <div className="p-5 ">
                    <h1 className="text-2xl text-red-600 font-semibold">
                      {" "}
                      Emely Jonson
                    </h1>
                    <h3 className="lg:text-lg max-sm:text-lg">
                      {" "}
                      Dumans ha hunted schistoric times meat, the flesh or other
                      edible parts of animals usually domesticated cattle,
                      swine.
                    </h3>
                    <div className="flex gap-3 lg:text-lg items-center  ">
                      <FaReplyAll className="text-red-500" />
                      Reply
                    </div>
                  </div>
                </div>
              </div>
              <Divider className="my-4 bg-white" />
              <div className=" mx-auto mt-2 text-white rounded-lg shadow-2xl lg:p-10 max-sm:p-5 lg:ms-10">
                <div className="lg:flex lg:items-center ">
                  <img
                    src="https://themegenix.net/html/bemet/assets/img/blog/comment_avatar02.png"
                    className="lg:w-40  max-sm:w-32"
                  />
                  <div className="p-5 ">
                    <h1 className="text-2xl text-red-600 font-semibold">
                      {" "}
                      Rosalina D.
                    </h1>
                    <h3 className="lg:text-lg max-sm:text-lg">
                      {" "}
                      Dumans ha hunted schistoric times meat, the flesh or other
                      edible parts of animals usually domesticated cattle,
                      swine.
                    </h3>
                    <div className="flex gap-3 lg:text-lg items-center  ">
                      <FaReplyAll className="text-red-500" />
                      Reply
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Col>

        <Col
          style={{
            background: "#441f16",
          }}
          span={24}
          lg={6}
          className=" lg:mt-14 rounded-md  text-white "
        >
          <section className="container ">
            <div className="lg:ml-20  me-10 mt-5 max-sm:ms-10">
              <h1 className="text-2xl font-bold mb-4">FILTER BY</h1>
              <Divider className="my-4  bg-white" />
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
              <Divider className="my-4   bg-white" />
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

            <div className="lg:ml-20 mt-3  max-sm:ms-10">
              <h1 className="text-2xl font-bold mb-4">LATEST PRODUCTS</h1>
              <Divider className="my-4  bg-white" />
              <div className="flex gap-5 mb-5">
                <img
                  src="https://themegenix.net/html/bemet/assets/img/product/lp_img01.jpg"
                  alt=""
                />
                <div className="ms-5">
                  <h1 className="mt-2 font-bold text-md">ROAST CHICKEN</h1>
                  <Divider className="my-4  bg-white" />
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
                  <Divider className="my-4   bg-white" />
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
                  <Divider className="my-4 s bg-white " />
                  <h1 className="font-bold text-lg">5$</h1>
                </div>
              </div>
            </div>
            <div>
              <Divider className="my-4  bg-white" />
            </div>
          </section>
        </Col>
      </Row>
    </>
  );
};

export default BlogSingle;
