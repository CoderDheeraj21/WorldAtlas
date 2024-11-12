import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/getApi";

export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      console.log(res);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }

      console.log(Object.keys(res.data[0].name.nativeName));
    });
  }, []);

  if (isPending) return <h2>Loading...</h2>;

  console.log(params);
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {country && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 p-6 rounded-xl border border-gray-700"
            style={{
              background: "linear-gradient(71deg, #080509, #1a171c, #080509)",
            }}
          >
            <div className="flex justify-center items-center mb-6 md:mb-0">
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="w-36 h-36 md:w-48 md:h-48"
              />
            </div>

            <div className="flex flex-col items-center justify-center md:items-start">
              <p className="text-center md:text-start text-2xl mb-4">{country.name.official}</p>

              <div className="space-y-2">
                <p>
                  <span className="text-gray-500">Native Names: </span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="text-gray-500">Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="text-gray-500">Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="text-gray-500">Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span className="text-gray-500">Capital: </span>
                  {country.capital}
                </p>

                <p>
                  <span className="text-gray-500">Top Level Domain: </span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="text-gray-500">Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="text-gray-500">Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="mt-10 flex justify-end">
          <NavLink to="/country">
            <button className="inline-block w-fit border px-2 py-1 bg-[#2a2a2a] hover:bg-[#000] rounded-lg">
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
