import React from "react";
import "./OurTeam.css";
import { AiOutlineSmallDash } from "@react-icons/all-files/ai/AiOutlineSmallDash";
import { RiTeamLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

const OurTeam = () => {
  return (
    <section className="bg ">
      <div className="container">
        <div className="left-section">
          <h2>Meet Our Team</h2>
          <h1>
            Our <span>CREATIVE</span> Team
          </h1>
          <p>
            BUY SMOKEY GRILLED MEATS AND CHICKEN GET <span>CATLING</span> FREE
          </p>
          <button>Shop Now</button>
        </div>
        <div className="right-section lg:relative  gap-5 lg:w-full lg:left-24">
          <div className="team-card ">
            <img
              className="w-full"
              src="https://themegenix.net/html/bemet/assets/img/team/team_img01.jpg"
              alt="Alaxzender Pilot"
            />

            <h3>ALAXZENDER PILOT</h3>
            <p>STACK EXPERT</p>
            <div className="flex justify-center">
              <button className="relative -top-28 left-24 bg-red-600 px-5 py-5 hover:bg-neutral-900">
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="team-card ">
            <img
              className="w-full"
              src="https://themegenix.net/html/bemet/assets/img/team/team_img02.jpg"
              alt="Starlee Jonson"
            />
            <h3>STARLEE JONSON</h3>
            <p>STACK EXPERT</p>
            <div className="flex justify-center">
              <button className="relative -top-28 left-24 bg-red-600 px-5 py-5 hover:bg-neutral-900">
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="team-card ">
            <img
              className="w-full"
              src="https://themegenix.net/html/bemet/assets/img/team/team_img03.jpg"
              alt="Alaxzender Pilot"
            />
            <h3>ALAXZENDER PILOT</h3>
            <p>STACK EXPERT</p>
            <div className="flex justify-center">
              <button className="relative -top-28 left-24 bg-red-600 px-5 py-5 hover:bg-neutral-900">
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
