import "./App.scss";
import { useState } from "react";
import { Grid, Column, Dropdown, RadioButtonGroup, RadioButton, Button } from "@carbon/react";
import { Download } from "@carbon/react/icons";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Graticule } from "react-simple-maps";

import mapTopoData from "./assets/maps/countries-50m.json";

const countriesSet = new Set();

countriesSet.add("660"); //Anguilla
countriesSet.add("028"); //Antigua and Barbuda
countriesSet.add("533"); //Aruba
countriesSet.add("044"); //Bahamas, The
countriesSet.add("052"); //Barbados
countriesSet.add("084"); //Belize
countriesSet.add("060"); //Bermuda
countriesSet.add("092"); //British Virgin Islands
countriesSet.add("124"); //Canada
countriesSet.add("136"); //Cayman Islands
countriesSet.add("188"); //Costa Rica
countriesSet.add("192"); //Cuba
countriesSet.add("212"); //Dominica
countriesSet.add("214"); //Dominican Republic
countriesSet.add("222"); //El Salvador
countriesSet.add("304"); //Greenland
countriesSet.add("308"); //Grenada
countriesSet.add("312"); //Guadeloupe
countriesSet.add("320"); //Guatemala
countriesSet.add("332"); //Haiti
countriesSet.add("340"); //Honduras
countriesSet.add("388"); //Jamaica
countriesSet.add("474"); //Martinique
countriesSet.add("484"); //Mexico
countriesSet.add("500"); //Montserrat
countriesSet.add("530"); //Netherlands Antilles
countriesSet.add("558"); //Nicaragua
countriesSet.add("591"); //Panama
countriesSet.add("630"); //Puerto Rico
countriesSet.add("659"); //Saint Kitts and Nevis
countriesSet.add("662"); //Saint Lucia
countriesSet.add("666"); //Saint Pierre and Miquelon
countriesSet.add("670"); //Saint Vincent and the Grenadines
countriesSet.add("780"); //Trinidad and Tobago
countriesSet.add("796"); //Turks and Caicos Islands
countriesSet.add("840"); //United States
countriesSet.add("850"); //Virgin Islands

function App() {
  const [position, setPosition] = useState({ coordinates: [-95, 35], zoom: 2.5 });
  const [geoKey, setGeoKey] = useState("");
  const [geoCode, setGeoCode] = useState("N/A");

  const colors = {
    countryFillEnable: "#C1C7CD",
    countryFillDisable: "#F2F4F8",
    countryHover: "#FEAB0F",
    countryPress: "#B1770A",
    countryActual: "#0F62FE",
    line: "#262729",
    graticule: "#EAEAEC",
  };

  const items = [
    {
      id: "option-0",
      text: "Option 0",
    },
    {
      id: "option-1",
      text: "Option 1",
    },
    {
      id: "option-2",
      text: "Option 2",
    },
    {
      id: "option-3",
      text: "Option 3",
    },
  ];

  function handleMoveEnd(position) {
    //console.log(position);
    setPosition(position);
  }

  const handleClick = (geo) => () => {
    console.log(geo);
    setGeoKey(geo.rsmKey);
    //setGeoCode(geo.id);
    setGeoCode(geo.properties.name);
  };

  return (
    <Grid className="mainGrid">
      <Column lg={3} md={2} sm={4}>
        <p className="textCuerpoTextoGrande">Panel de indicadores</p>
        <Dropdown id="selectPais" label="Seleccione una opción" titleText="País" items={items} itemToString={(item) => (item ? item.text : "")} />
        <Dropdown
          id="selectAmbito"
          label="Seleccione una opción"
          titleText="Ámbito geográfico"
          items={items}
          itemToString={(item) => (item ? item.text : "")}
        />
        <Dropdown
          id="selectOrganizacion"
          label="Seleccione una opción"
          titleText="Organización impulsora"
          items={items}
          itemToString={(item) => (item ? item.text : "")}
        />
        <RadioButtonGroup legendText="Vigente" valueSelected="todos">
          <RadioButton id="radio-1" labelText="Si" value="si" />
          <RadioButton id="radio-2" labelText="No" value="no" />
          <RadioButton id="radio-3" labelText="Todos" value="todos" />
        </RadioButtonGroup>
      </Column>

      <Column lg={9} md={6} sm={4}>
        <ComposableMap>
          <ZoomableGroup zoom={position.zoom} center={position.coordinates} maxZoom={8} minZoom={2} onMoveEnd={handleMoveEnd}>
            <Graticule stroke={colors.graticule} strokeWidth={0.4} />
            <Geographies geography={mapTopoData}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: geo.rsmKey == geoKey ? colors.countryActual : countriesSet.has(geo.id) ? colors.countryFillEnable : colors.countryFillDisable,
                      },
                      hover: {
                        fill: colors.countryHover,
                      },
                      pressed: {
                        fill: colors.countryPress,
                      },
                    }}
                    stroke={colors.line}
                    strokeWidth={0.2}
                    onClick={handleClick(geo)}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </Column>

      <Column lg={4} md={8} sm={4}>
        <p className="textCuerpoTextoGrande spacing-06">{geoCode}</p>
        <p className="textCuerpoTextoPequeño spacing-05">
          Costa Rica es un país de América Central con una geografía accidentada, que incluye bosques tropicales y costas en el Caribe y el Pacífico.
        </p>
        <p className="textCuerpoTextoPequeño spacing-07">
          <strong>Población:</strong> 5,154 millones
          <br />
          <strong>Capital:</strong> San José
        </p>
        <p className="textCuerpoTextoGrande spacing-06">Prácticas migratorias</p>

        <div className="practica spacing-05">
          <Grid>
            <Column lg={16} md={8} sm={4}>
              <p className="textCuerpoTextoMedio spacing-06">Nombre de la práctica</p>
              <p className="textAyuda spacing-05">
                Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam.
              </p>
            </Column>
            <Column lg={16} md={8} sm={4} style={{ textAlign: "right" }}>
              <Button kind="ghost">Ver más</Button>
              <Button kind="primary" renderIcon={Download} iconDescription="Descargar">
                Descargar
              </Button>
            </Column>
          </Grid>
        </div>

        <div className="practica spacing-05">
          <Grid>
            <Column lg={16} md={8} sm={4}>
              <p className="textCuerpoTextoMedio spacing-06">Nombre de la práctica</p>
              <p className="textAyuda spacing-05">
                Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam.
              </p>
            </Column>
            <Column lg={16} md={8} sm={4} style={{ textAlign: "right" }}>
              <Button kind="ghost">Ver más</Button>
              <Button kind="primary" renderIcon={Download} iconDescription="Descargar">
                Descargar
              </Button>
            </Column>
          </Grid>
        </div>
      </Column>
    </Grid>
  );
}

export default App;
