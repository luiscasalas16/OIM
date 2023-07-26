import "./App.scss";
import { useState, useEffect } from "react";
import { Grid, Column, Tabs, TabList, Tab, TabPanels, TabPanel } from "@carbon/react";

import { Indicators, Map, Practices } from "./components";

import countriesData from "./helpers/countries";

function App() {
  const [countries] = useState(countriesData);
  const [currentCountry, setCurrentCountry] = useState(null);

  const onMapSelectCountry = (id) => {
    setCurrentCountry(countries.find((country) => id == country.id));
  };

  const onIndicatorsSelectCountry = (country) => {
    setCurrentCountry(country);
  };

  return (
    <div className="mainGrid">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <p className="textHeading titulo">Buenas prácticas sobre migración laboral - LAC</p>
        </Column>
        <Column lg={16} md={8} sm={4}>
          <Tabs>
            <TabList aria-label="List of tabs">
              <Tab>Dashboard</Tab>
              <Tab>Acerca del Dashboard</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Grid>
                  <Column lg={3} md={2} sm={4}>
                    <Indicators countries={countries} id={currentCountry?.id ?? null} onSelectCountry={onIndicatorsSelectCountry}></Indicators>
                  </Column>
                  {/* si no hay país seleccionado no se deben mostrar los indicadores */}
                  <Column lg={currentCountry ? 9 : 12} md={6} sm={4}>
                    <Map countries={countries} id={currentCountry?.id ?? null} onSelectCountry={onMapSelectCountry}></Map>
                  </Column>
                  {/* si no hay país seleccionado no se deben mostrar los indicadores */}
                  {currentCountry && (
                    <Column lg={4} md={8} sm={4}>
                      <Practices {...currentCountry}></Practices>
                    </Column>
                  )}
                </Grid>
              </TabPanel>
              <TabPanel>
                Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam.
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Column>
      </Grid>
    </div>
  );
}

export default App;
