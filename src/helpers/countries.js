export const getCountries = async () => {
  var countries = [...(await getSubRegion("North America")), ...(await getSubRegion("Central America")), ...(await getSubRegion("Caribbean"))];

  countries.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  return countries;
};

const getSubRegion = async (subregion) => {
  const url = `https://restcountries.com/v3.1/subregion/${subregion}?fields=name,ccn3,population,capital`;
  const resp = await fetch(url);
  const data = await resp.json();

  const countries = data.map((country) => ({
    id: country.ccn3,
    name: country.name.common,
    capital: country.capital[0],
    population: country.population,
  }));

  return countries;
};
