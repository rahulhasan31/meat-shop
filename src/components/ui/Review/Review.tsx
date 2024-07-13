"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { TbPointFilled } from "react-icons/tb";
import { Divider, Input, Button, Textarea } from "@nextui-org/react";
import { useParams } from "next/navigation";
import {
  useCreateReviewMutation,
  useGetReviewQuery,
} from "@/redux/service/reviewSlice/reviewSlice";
type Inputs = {
  review: string;
  productID: string;
  userEmail: string;
};
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "@/authService/authContext";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/authService/authservice";
import { useGetSingleUserQuery } from "@/redux/service/auth/authSlice";
import Swal from "sweetalert2";

const Review = () => {
  const [isId, setIsId] = useState<string | null>(null);
  // console.log("isId", isId);

  const { id } = useParams();
  const { data } = useGetReviewQuery(id);
  console.log("data,", data);

  const [userInfo, setUserInfo] = useState<any>(null);
  // console.log(userInfo);
  const userId: string = userInfo?.id;
  // console.log(userId);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        if (userInfo) {
          setUserInfo(userInfo);
        } else {
          console.log("No user info found or token refresh failed.");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();

    // Start the token refresh interval
  }, []);

  const { data: userData } = useGetSingleUserQuery(userId);
  // console.log("review single user", data?.data.userEmail);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [createReview, { isSuccess, isError }] = useCreateReviewMutation();
  const onSubmit: SubmitHandler<Inputs> = data => {
    const review = {
      productID: id,
      review: data?.review,
      userEmail: userData?.data?.userEmail,
    };
    console.log(review);
    createReview(review);
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "review add Success",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  }, [isSuccess]);
  return (
    <div className="flex w-full flex-col lg:p-4 lg:rounded-none">
      <Tabs aria-label="Options">
        <Tab key="review" title="REVIEWS">
          <Divider className="my-" />
          <Divider className="my-4 relative -top-3" />
          <Card className="lg:h-auto">
            <CardBody
              style={{
                backgroundColor: "#F1ECE2",
              }}
              className="lg:p-5">
              <p className="font-medium text-slate-900 text-2xl ">
                {" "}
                Customer Reviews (0)
              </p>

              <section className=" flex  items-center rounded-lg ">
                <div className="block p-6 px-5 rounded-lg  w-96 ">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-6">
                      <textarea
                        {...register("review")}
                        className="
  form-control
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
 
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:bg-white focus:border-blue-600 focus:outline-none
"
                        placeholder="Message"></textarea>
                    </div>

                    <button
                      type="submit"
                      className="
w-full
px-6
py-2.5

btn btn-primary bg-gradient-to-r from-primary to-secondary text-white
ease-in-out">
                      Send
                    </button>
                  </form>
                </div>
              </section>
              <div className="grid grid-cols-3"></div>
              <section className=" min-h-screen grid grid-cols-1  place-content-center lg:place-items-center lg:gap-16 max-w-7xl mx-auto px-6 py-10">
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 col-span-6">
                  {data?.data.map((review: any) => (
                    <div
                      key={review._id}
                      className="relative z-10 bg-white  rounded-sm flex flex-col lg:items-center justify-between lg:flex-row gap-10 p-7">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 475.082 475.081"
                          x="0px"
                          y="0px"
                          width="25px"
                          height="25px"
                          version="1.1">
                          <g>
                            <g>
                              <path d="M 164.45 219.27 h -63.954 c -7.614 0 -14.087 -2.664 -19.417 -7.994 c -5.327 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.416 -51.678 c 14.276 -14.272 31.503 -21.411 51.678 -21.411 h 18.271 c 4.948 0 9.229 -1.809 12.847 -5.424 c 3.616 -3.617 5.424 -7.898 5.424 -12.847 V 54.819 c 0 -4.948 -1.809 -9.233 -5.424 -12.85 c -3.617 -3.612 -7.898 -5.424 -12.847 -5.424 h -18.271 c -19.797 0 -38.684 3.858 -56.673 11.563 c -17.987 7.71 -33.545 18.132 -46.68 31.267 c -13.134 13.129 -23.553 28.688 -31.262 46.677 C 3.855 144.039 0 162.931 0 182.726 v 200.991 c 0 15.235 5.327 28.171 15.986 38.834 c 10.66 10.657 23.606 15.985 38.832 15.985 h 109.639 c 15.225 0 28.167 -5.328 38.828 -15.985 c 10.657 -10.663 15.987 -23.599 15.987 -38.834 V 274.088 c 0 -15.232 -5.33 -28.168 -15.994 -38.832 C 192.622 224.6 179.675 219.27 164.45 219.27 Z" />
                              <path d="M 459.103 235.256 c -10.656 -10.656 -23.599 -15.986 -38.828 -15.986 h -63.953 c -7.61 0 -14.089 -2.664 -19.41 -7.994 c -5.332 -5.33 -7.994 -11.801 -7.994 -19.417 v -9.132 c 0 -20.177 7.139 -37.401 21.409 -51.678 c 14.271 -14.272 31.497 -21.411 51.682 -21.411 h 18.267 c 4.949 0 9.233 -1.809 12.848 -5.424 c 3.613 -3.617 5.428 -7.898 5.428 -12.847 V 54.819 c 0 -4.948 -1.814 -9.233 -5.428 -12.85 c -3.614 -3.612 -7.898 -5.424 -12.848 -5.424 h -18.267 c -19.808 0 -38.691 3.858 -56.685 11.563 c -17.984 7.71 -33.537 18.132 -46.672 31.267 c -13.135 13.129 -23.559 28.688 -31.265 46.677 c -7.707 17.987 -11.567 36.879 -11.567 56.674 v 200.991 c 0 15.235 5.332 28.171 15.988 38.834 c 10.657 10.657 23.6 15.985 38.828 15.985 h 109.633 c 15.229 0 28.171 -5.328 38.827 -15.985 c 10.664 -10.663 15.985 -23.599 15.985 -38.834 V 274.088 C 475.082 258.855 469.76 245.92 459.103 235.256 Z" />
                            </g>
                          </g>
                        </svg>
                        <p className="my-3 text-2xl font-bold text-red-500">
                          {review?.review}
                        </p>
                        <p className="text-gray-400">
                          <span className="name text-gray-900 capitalize font-bold">
                            timothy quano
                          </span>{" "}
                          &#8212; meatShop, customer{" "}
                        </p>

                        <Button>edit</Button>
                        <Button color="danger">Delete</Button>
                      </div>
                      <div className="relative shrink-0">
                        <img
                          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Timothy Quano"
                          className="rounded-full w-16 h-16 object-cover 2xl:w-28 2xl:h-28"
                        />
                        <div className="rounded-full w-16 h-16 2xl:w-28 2xl:h-28 bg-gradient-to-r from-[#deb2b280] to-[#deb2b280] absolute inset-0"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="DESCRIPTION" title="DESCRIPTION">
          <Divider className="my-" />
          <Divider className="my-4 relative -top-3" />
          <Card className="lg:h-56">
            <CardBody
              style={{
                backgroundColor: "#F1ECE2",
              }}
              className="lg:p-4">
              <p className="font-medium text-slate-900">
                {" "}
                committed are products that have been produced using sustainable
                fibers or processes, reducing their environmental impact.
                Umino’s goal is to support the implementation of practices more
                committed to the environment. I am like a freight train. Working
                on the details, twisting and playing with them over the years,
                but always staying on the same track I design from instinct.
                It’s the only way I know how to live.
              </p>
              <div className="lg:flex flex-col mt-3">
                <p className="font-medium flex items-center">
                  <TbPointFilled className="text-red-600" />
                  Committed are products that have been produced It’s the only
                  way
                </p>

                <p className="font-medium flex items-center text-slate-900">
                  <TbPointFilled className="text-red-600" /> I know how to live.
                </p>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Review;
