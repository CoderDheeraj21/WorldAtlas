import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export const Header = () => {
  const [click, setClick] = useState(false);

  const nav = [
    {
      id: 1,
      item: "Home",
      navLink: "/",
    },
    {
      id: 2,
      item: "About",
      navLink: "/about",
    },
    {
      id: 3,
      item: "Country",
      navLink: "/country",
    },
    {
      id: 4,
      item: "Contact",
      navLink: "/contact",
    },
  ];
  return (
    <header className="bg-[#2a2a2a] sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-14">
        <NavLink to="/">
          <h1 className="text-3xl">WorldAtlas</h1>
        </NavLink>
        <ul className="hidden md:flex space-x-12">
          {nav.map((elements) => (
            <li className="cursor-pointer text-xl" key={elements.id}>
              <NavLink to={elements.navLink}>{elements.item}</NavLink>
            </li>
          ))}
        </ul>

        <div onClick={() => setClick(!click)} className="block md:hidden z-30">
          {click ? (
            <ImCross className="text-2xl cursor-pointer "></ImCross>
          ) : (
            <GiHamburgerMenu className="text-2xl cursor-pointer"></GiHamburgerMenu>
          )}
        </div>

        {/* Hidden Navigation Menu */}
        {click && (
          <div className="fixed inset-0 bg-black flex flex-col justify-center items-center space-y-8 z-20">
            <ul className="text-center">
              {nav.map((elements) => (
                <li
                  className="cursor-pointer text-2xl text-white py-4"
                  key={elements.id}
                  onClick={() => setClick(false)} // Close menu on click
                >
                  <NavLink to={elements.navLink}>{elements.item}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
