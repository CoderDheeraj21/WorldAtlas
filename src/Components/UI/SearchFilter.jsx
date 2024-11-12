export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="flex flex-col items-center gap-3 md:flex-row justify-between">
      <div>
        <input
          className="p-2 border rounded-lg  text-[rgba(255,255,255,0.8)]"
          style={{
            background: "linear-gradient(71deg, #080509, #1a171c, #080509)",
          }}
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <button className="md:text-xl px-2 w-16  border py-1 bg-[#2a2a2a] hover:bg-[#000] rounded-lg" onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button className="md:text-xl border w-16 px-2 py-1 bg-[#2a2a2a] hover:bg-[#000] rounded-lg" onClick={() => sortCountries("des")}>Desc</button>
      </div>

      <div>
        <select
          className="p-2 w-48  text-[rgba(255,255,255,0.8)] border rounded-lg"
          style={{
            background: "linear-gradient(71deg, #080509, #1a171c, #080509)",
          }}
          value={filter}
          onChange={handleSelectChange}
        >
          <option className="bg-[#2a2a2a]" value="all">All</option>
          <option className="bg-[#2a2a2a]" value="Africa">Africa</option>
          <option className="bg-[#2a2a2a]" value="Americas">Americas</option>
          <option className="bg-[#2a2a2a]" value="Asia">Asia</option>
          <option className="bg-[#2a2a2a]" value="Europe">Europe</option>
          <option className="bg-[#2a2a2a]" value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
