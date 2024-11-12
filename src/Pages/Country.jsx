import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/getApi";
import { CountryCard } from "../Components/Layout/CountryCard";
import { SearchFilter } from "../Components/UI/SearchFilter";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Fetch countries data
  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data);
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    });
  }, []);

  // Show loading state
  if (isPending) return <h1>Loading...</h1>;

  // Filter by search term
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  // Filter by region
  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // Combined filter logic
  const filteredCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="max-w-7xl mx-auto px-4 flex flex-col gap-8 py-20">
      {/* Search and Filter Component */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      {/* Country Cards */}
      <div className="grid lg:grid-cols-4 gap-8">
        {filteredCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </section>
  );
};
