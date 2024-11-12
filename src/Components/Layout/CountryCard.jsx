import React from "react";
import { NavLink } from "react-router-dom";
export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country; // Destructure inside the map function

  return (
    <div
      className="p-6 rounded-xl flex flex-col items-center space-y-4"
      style={{
        background: "linear-gradient(71deg, #080509, #1a171c, #080509)",
      }}
    >
      <img
        src={flags.png}
        alt={`${name.common} flag`}
        className="w-full h-24 object-contain mt-2"
      />
      <h3 className="text-xl font-semibold">{name.common}</h3>
      <p>
        <span className="text-gray-500">Population:</span> {population}
      </p>
      <p>
        <span className="text-gray-500">Region:</span> {region}
      </p>
      <p>
        <span className="text-gray-500">Capital:</span> {capital}
      </p>
      <NavLink to={`/country/${name.common}`}>
        <button className="inline-block w-fit border px-2 py-1 bg-[#2a2a2a] hover:bg-[#000] rounded-lg">
          Read More
        </button>
      </NavLink>
    </div>
  );
};
