// los datos de los paises se obtuvieron de un API público para pruebas.
// {
//     id: numero del país según el ISO 3166-1 http://utils.mucattu.com/iso_3166-1.html.
//     name: nombre del país.
//     capital: capital del país.
//     population: población del país.
// }

/*
const getCountries = async () => {
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

  console.log(countries);

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
*/

export default [
  {
    id: "660",
    name: "Anguilla",
    capital: "The Valley",
    population: 13452,
  },
  {
    id: "028",
    name: "Antigua and Barbuda",
    capital: "Saint John's",
    population: 97928,
  },
  {
    id: "533",
    name: "Aruba",
    capital: "Oranjestad",
    population: 106766,
  },
  {
    id: "044",
    name: "Bahamas",
    capital: "Nassau",
    population: 393248,
  },
  {
    id: "052",
    name: "Barbados",
    capital: "Bridgetown",
    population: 287371,
  },
  {
    id: "084",
    name: "Belize",
    capital: "Belmopan",
    population: 397621,
  },
  {
    id: "060",
    name: "Bermuda",
    capital: "Hamilton",
    population: 63903,
  },
  {
    id: "092",
    name: "British Virgin Islands",
    capital: "Road Town",
    population: 30237,
  },
  {
    id: "124",
    name: "Canada",
    capital: "Ottawa",
    population: 38005238,
  },
  {
    id: "535",
    name: "Caribbean Netherlands",
    capital: "Kralendijk",
    population: 25987,
  },
  {
    id: "136",
    name: "Cayman Islands",
    capital: "George Town",
    population: 65720,
  },
  {
    id: "188",
    name: "Costa Rica",
    capital: "San José",
    population: 5094114,
  },
  {
    id: "192",
    name: "Cuba",
    capital: "Havana",
    population: 11326616,
  },
  {
    id: "531",
    name: "Curaçao",
    capital: "Willemstad",
    population: 155014,
  },
  {
    id: "212",
    name: "Dominica",
    capital: "Roseau",
    population: 71991,
  },
  {
    id: "214",
    name: "Dominican Republic",
    capital: "Santo Domingo",
    population: 10847904,
  },
  {
    id: "222",
    name: "El Salvador",
    capital: "San Salvador",
    population: 6486201,
  },
  {
    id: "304",
    name: "Greenland",
    capital: "Nuuk",
    population: 56367,
  },
  {
    id: "308",
    name: "Grenada",
    capital: "St. George's",
    population: 112519,
  },
  {
    id: "312",
    name: "Guadeloupe",
    capital: "Basse-Terre",
    population: 400132,
  },
  {
    id: "320",
    name: "Guatemala",
    capital: "Guatemala City",
    population: 16858333,
  },
  {
    id: "332",
    name: "Haiti",
    capital: "Port-au-Prince",
    population: 11402533,
  },
  {
    id: "340",
    name: "Honduras",
    capital: "Tegucigalpa",
    population: 9904608,
  },
  {
    id: "388",
    name: "Jamaica",
    capital: "Kingston",
    population: 2961161,
  },
  {
    id: "474",
    name: "Martinique",
    capital: "Fort-de-France",
    population: 378243,
  },
  {
    id: "484",
    name: "Mexico",
    capital: "Mexico City",
    population: 128932753,
  },
  {
    id: "500",
    name: "Montserrat",
    capital: "Plymouth",
    population: 4922,
  },
  {
    id: "558",
    name: "Nicaragua",
    capital: "Managua",
    population: 6624554,
  },
  {
    id: "591",
    name: "Panama",
    capital: "Panama City",
    population: 4314768,
  },
  {
    id: "630",
    name: "Puerto Rico",
    capital: "San Juan",
    population: 3194034,
  },
  {
    id: "652",
    name: "Saint Barthélemy",
    capital: "Gustavia",
    population: 4255,
  },
  {
    id: "659",
    name: "Saint Kitts and Nevis",
    capital: "Basseterre",
    population: 53192,
  },
  {
    id: "662",
    name: "Saint Lucia",
    capital: "Castries",
    population: 183629,
  },
  {
    id: "663",
    name: "Saint Martin",
    capital: "Marigot",
    population: 38659,
  },
  {
    id: "666",
    name: "Saint Pierre and Miquelon",
    capital: "Saint-Pierre",
    population: 6069,
  },
  {
    id: "670",
    name: "Saint Vincent and the Grenadines",
    capital: "Kingstown",
    population: 110947,
  },
  {
    id: "534",
    name: "Sint Maarten",
    capital: "Philipsburg",
    population: 40812,
  },
  {
    id: "780",
    name: "Trinidad and Tobago",
    capital: "Port of Spain",
    population: 1399491,
  },
  {
    id: "796",
    name: "Turks and Caicos Islands",
    capital: "Cockburn Town",
    population: 38718,
  },
  {
    id: "840",
    name: "United States",
    capital: "Washington, D.C.",
    population: 329484123,
  },
  {
    id: "581",
    name: "United States Minor Outlying Islands",
    capital: "Washington DC",
    population: 300,
  },
  {
    id: "850",
    name: "United States Virgin Islands",
    capital: "Charlotte Amalie",
    population: 106290,
  },
];
