import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import globe from "../assets/Images/Globe.jpg";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="md:grid grid-cols-2 gap-8">
        <div className="py-10 md:py-20 flex flex-col justify-center space-y-6 ">
          <h2 className="text-4xl">
            Explore The World, One <br />
            Country at a Time
          </h2>
          <p>
            Discover the history, culture and beauty of every nation. Sort,
            search, and filter through countries to find details you need
          </p>
          <NavLink to="/country">
            <button className="inline-block w-fit border px-2 py-1 bg-[#2a2a2a] hover:bg-[#000] rounded-lg">
              Start Exploring{" "}
              <span>
                <FaArrowRightLong className="inline ml-2"></FaArrowRightLong>
              </span>
            </button>
          </NavLink>
        </div>

        <div className="py-20 flex items-center justify-center ">
          <img src={globe} className="object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};
