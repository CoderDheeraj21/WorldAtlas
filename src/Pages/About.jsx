import React from "react";
import countryData from "../api/CountryData.json";

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-center text-3xl pb-10 font-semibold">
        Here are the interesting facts <br /> that we are proud of
      </h2>

      <div className="flex flex-col md:grid grid-cols-3 gap-8">
        {countryData.map((item) => (
          <div
            key={item.id}
            style={{
              background: "linear-gradient(71deg, #080509, #1a171c, #080509)",
            }}
            className="p-6 rounded-3xl space-y-2 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold">{item.countryName}</h3>
            <p>
              <span className="text-gray-400">Capital:</span> {item.capital}
            </p>
            <p>
              <span className="text-gray-400">Population:</span>{" "}
              {item.population}
            </p>
            <p>
              <span className="text-gray-400">InterestingFact:</span>{" "}
              {item.interestingFact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
