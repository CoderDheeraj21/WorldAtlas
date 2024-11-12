import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto md:px-4 p-6 md:h-16  flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center space-x-2">
            <HiLocationMarker className="font-semibold text-2xl text-blue-600"></HiLocationMarker>
            <div>
              <h4 className="font-semibold">Find Us</h4>
              <p className="text-gray-500">Pune, Maharashtra</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <IoCall className="font-semibold text-2xl text-blue-600"></IoCall>
            <div>
              <h4 className="font-semibold">Call Us</h4>
              <p className="text-gray-500">+91749261466</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <HiOutlineMail className="font-semibold text-2xl text-blue-600"></HiOutlineMail>
            <div>
              <h4 className="font-semibold">Mail To</h4>
              <p className="text-gray-500">
                <a
                  href="mailto:dhirajchatur@gmail.com"
                  className=" hover:text-blue-600"
                >
                  dhirajchatur@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-center">
          <p>Copywright @ 2024 All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};
