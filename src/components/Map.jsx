import { useState, useRef } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Graticule } from "react-simple-maps";

import colors from "../helpers/colors";

import mapTopoData from "../assets/maps/countries-50m.json";

export const Map = ({ countries, onCountrySelect, id }) => {
  const countriesIdToRsmKey = useRef(null);
  const countriesIds = useRef(null);

  const [position, setPosition] = useState({ coordinates: [-95, 35], zoom: 2.5 });
  const [currentId, setCurrentId] = useState(id);
  const [currentRsmKey, setCurrentRsmKey] = useState("");

  //genera un conjunto que contiene el id de los paises disponibles.
  var t1 = new Set();
  for (var i = 0; i < countries.length; i++) {
    if (countries[i].id) t1.add(countries[i].id);
  }
  countriesIds.current = t1;

  console.log(countriesIds.current);

  if (id != null && id != currentId) {
    setCurrentId(id);
    setCurrentRsmKey(countriesIdToRsmKey.current[id]);
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  const handleClick = (geo) => () => {
    setCurrentId(geo.id);
    setCurrentRsmKey(geo.rsmKey);

    onCountrySelect(geo.id);
  };

  return (
    <>
      <ComposableMap>
        <ZoomableGroup zoom={position.zoom} center={position.coordinates} maxZoom={8} minZoom={2} onMoveEnd={handleMoveEnd}>
          <Graticule stroke={colors.graticule} strokeWidth={0.4} />
          <Geographies geography={mapTopoData}>
            {({ geographies }) => {
              //genera un objeto que mapea el id con el rsmKey de un pais, ya que sólo el Map conoce el rsmKey y el Indicators conoce el id del pais.
              var t2 = {};
              for (var i = 0; i < geographies.length; i++) {
                if (geographies[i].id) t2[new String(geographies[i].id)] = geographies[i].rsmKey;
              }
              countriesIdToRsmKey.current = t2;

              return geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill:
                        geo.rsmKey == currentRsmKey
                          ? colors.countryActual
                          : countriesIds.current.has(geo.id)
                          ? colors.countryFillEnable
                          : colors.countryFillDisable,
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
              ));
            }}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};
