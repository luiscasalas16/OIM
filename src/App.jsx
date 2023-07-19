import "./App.scss";
import { useState, useEffect } from "react";
import { Grid, Column } from "@carbon/react";

import { Indicators, Map, Practices } from "./components";

import { getCountries } from "./helpers/countries";

function App() {
  const [countries, setCountries] = useState([]);

  const initCountries = async () => {
    const t = await getCountries();
    setCountries(t);
  };

  useEffect(() => {
    initCountries();
  }, []);

  const [currentCountry, setCurrentCountry] = useState(null);

  const onMapSelectCountry = (id) => {
    setCurrentCountry(countries.find((country) => id == country.id));
  };

  const onIndicatorsSelectCountry = (country) => {
    setCurrentCountry(country);
  };

  return (
    <Grid className="mainGrid">
      <Column lg={3} md={2} sm={4}>
        <Indicators countries={countries} id={currentCountry?.id ?? null} onSelectCountry={onIndicatorsSelectCountry}></Indicators>
      </Column>
      <Column lg={9} md={6} sm={4}>
        <Map countries={countries} id={currentCountry?.id ?? null} onSelectCountry={onMapSelectCountry}></Map>
      </Column>
      <Column lg={4} md={8} sm={4}>
        <Practices {...currentCountry}></Practices>
      </Column>
    </Grid>
  );
}

export default App;
