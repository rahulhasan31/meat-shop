"use client";
import {
  BannerLayer,
  ParallaxBanner,
  useParallax,
} from "react-scroll-parallax";
import "./Parallax.css";
import Image from "next/image";
const ParallaxSection = () => {
  return (
    <section className="p-bg">
      <div className="quote-section">
        <div className="overlay">
          <div className="content">
            <Image
              width={100}
              height={100}
              className="text-center  mx-auto"
              src="https://i.ibb.co/3Ys6LLQ/cta-icon.png"
              alt=""
            />
            <h1>GET A FREE QUOTE</h1>
            <div className="buttons mx-auto justify-center flex">
              <button className="buy-now ">BUY NOW</button>
              <button className="make-call">MAKE A CALL</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
