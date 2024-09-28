"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
const AskedQuestions = () => {
  const defaultContent =
    "Meat provide well shaped fresh and the organic meat well animals is Humans have hunted schistoric times";

  return (
    <div>
      <div
        style={{
          backgroundColor: "#180905",
        }}
        className=""
      >
        <section>
          <div className="w-full relative pb-10 px-6 xl:px-0">
            <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
              <div className="w-full lg:w-7/12 h-full lg:pr-10 xl:pr-0">
                <Image
                  width={500}
                  height={500}
                  role="img"
                  aria-label="people smiling"
                  className="mx-auto"
                  src="https://themegenix.net/html/bemet/assets/img/images/faq_img01.png"
                  alt="people smiling"
                />
              </div>
              <div role="contentinfo" className="w-full lg:w-1/2 h-full bg-a">
                <p className="text-red-600 uppercase text-2xl mb-4 font-mono">
                  Customer Quotes
                </p>
                <h1 className="text-white text-4xl lg:text-6xl font-black mb-8">
                  Frequently Asked{" "}
                  <span className="text-red-600">Questions</span>
                </h1>
                <div className="text-black">
                  <Accordion variant="splitted">
                    <AccordionItem
                      className="font-bold"
                      key="1"
                      aria-label="Accordion 1"
                      title="HAMBURG MEAT IS ANIMAL FLESH FOOD.
                      "
                    >
                      {defaultContent}
                    </AccordionItem>
                    <AccordionItem
                      className="font-bold"
                      key="2"
                      aria-label="Accordion 2"
                      title="REVOLUTION ALLOWED THE OF ANIMALS"
                    >
                      {defaultContent}
                    </AccordionItem>
                    <AccordionItem
                      className="font-bold"
                      key="3"
                      aria-label="Accordion 3"
                      title="MEAT IS ANIMAL FLESH
                      FOOD."
                    >
                      {defaultContent}
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AskedQuestions;
