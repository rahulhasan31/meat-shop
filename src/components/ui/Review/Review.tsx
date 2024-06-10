import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { TbPointFilled } from "react-icons/tb";
import { Divider, Input, Button, Textarea } from "@nextui-org/react";
const Review = () => {
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
              <div className="lg:flex flex-col mt-3">
                <p className="font-medium ms-2 mb-4">No reviews yet</p>
              </div>
              <div className="w-full flex flex-row flex-wrap gap-4">
                <form action="">
                  <Textarea
                    type="text"
                    color="success"
                    placeholder="Write a review"
                    className="w-96"></Textarea>
                  <Button
                    color="success"
                    variant="shadow"
                    className="text-white font-semibold px-10 mt-2">
                    Success
                  </Button>
                </form>
              </div>
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
