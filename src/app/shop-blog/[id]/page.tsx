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
import { FaSearch } from "react-icons/fa";
import ProductBanner from "@/components/ui/ProductBanner/ProductBanner";

const BlogSingle = () => {
  return (
    <>
      <ProductBanner />
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
                className="lg:h-60 max-sm:w-full"
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
            <div className="lg:w-4/5 mx-auto lg:mt-10 text-white">
              <h1 className="text-2xl font-semibold text-white">
                Leave A Comment
              </h1>
              <Divider className="my-4 bg-white" />
            </div>

            <div className="lg:w-4/5 mx-auto lg:mt-10 text-white mb-5">
              <div className="">
                <form className="mt-6">
                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-white  ">
                      Message
                    </label>
                    <textarea
                      style={{
                        backgroundColor: "#512319 ",
                      }}
                      className="block w-full h-32 px-5 py-3 mt-2 text-white placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="   white your comment here..."
                    ></textarea>
                  </div>
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-white dark:text-gray-200">
                      Full Name
                    </label>
                    <input
                      style={{
                        backgroundColor: "#512319 ",
                      }}
                      type="text"
                      placeholder="John Doe"
                      className="block w-full px-5 py-7 mt-2 text-white placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-white dark:text-gray-200">
                      Email address
                    </label>
                    <input
                      style={{
                        backgroundColor: "#512319 ",
                      }}
                      type="email"
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-3 mt-2 text-white placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md hover:bg-green-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
                    Send Comment
                  </button>
                </form>
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
          className="  rounded-md  text-white lg:h-4/5"
        >
          <section className=" ">
            <div className="lg:ml-5  p-5 mt-5 max-sm:ms-10">
              <h1 className="text-2xl font-bold mb-4">Search</h1>
              <Divider className="my-4  bg-white" />
              <div>
                <div className="flex ">
                  <input
                    type="text"
                    placeholder="John Doe"
                    className=" px-3 py-3  text-white rounded-s-lg "
                  />
                  <button className="bg-red-500 px-4 rounded-e-lg py-3">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:ml-5 mt-10 p-5 max-sm:ms-10">
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

            <div className="lg:ml-5 mt-3  max-sm:ms-10">
              <h1 className="text-2xl font-bold mb-4">Recent Post</h1>
              <Divider className="my-4  bg-white" />
              <div className="flex gap-5 mb-5">
                <img
                  src="https://themegenix.net/html/bemet/assets/img/blog/rc_post_img01.jpg"
                  alt=""
                />
                <div className="">
                  <h1 className="mt-2 font-bold text-md">
                    Sources of protein elit
                  </h1>
                  <Divider className="my-4  bg-white" />
                  <p className="font-bold ">January 30, 2023</p>
                </div>
              </div>
              <div className="flex gap-5 mb-5">
                <img
                  src="https://themegenix.net/html/bemet/assets/img/blog/rc_post_img02.jpg"
                  alt=""
                />
                <div className="">
                  <h1 className="mt-2 font-bold text-md">
                    Different Types Meat
                  </h1>
                  <Divider className="my-4   bg-white" />
                  <p className="font-bold">January 30, 2023</p>
                </div>
              </div>
              <div className="flex gap-5 mb-5">
                <img
                  src="https://themegenix.net/html/bemet/assets/img/blog/rc_post_img03.jpg"
                  alt=""
                />
                <div className="">
                  <h1 className="mt-2 font-bold text-md">
                    Eat meat and poultry
                  </h1>
                  <Divider className="my-4 s bg-white " />
                  <p className="font-bold ">January 30, 2023</p>
                </div>
              </div>
            </div>
            <div>
              <Divider className="my-4  bg-white" />
            </div>
            <div>
              <img
                src="https://themegenix.net/html/bemet/assets/img/blog/add_banner.jpg"
                className="p-3"
              />
            </div>
          </section>
        </Col>
      </Row>
    </>
  );
};

export default BlogSingle;
