import { useState, useRef } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Graticule } from "react-simple-maps";

import colors from "../helpers/colors";

import mapTopoData from "../assets/maps/countries-50m.json";

export const Map = ({ countries, onSelectCountry, id }) => {
  const countriesIds = useRef(null);

  const mapIdToGeography = useRef(null);
  const mapProjection = useRef(null);
  const mapPath = useRef(null);

  const [currentId, setCurrentId] = useState(id);
  const [currentRsmKey, setCurrentRsmKey] = useState("");

  const [zoom, setZoom] = useState(2.5);
  const [center, setCenter] = useState([-95, 35]);

  console.log(countries);

  if (countries.length > 0 && countriesIds.current == null) {
    //genera un conjunto que contiene el id de los paises disponibles.
    var t1 = new Set();
    for (var i = 0; i < countries.length; i++) {
      if (countries[i].id) t1.add(countries[i].id);
    }
    countriesIds.current = t1;
  }

  const selectCountry = (geography, projection, path) => {
    setCurrentId(geography.id);
    setCurrentRsmKey(geography.rsmKey);

    const centroid = projection.invert(path.centroid(geography));
    setCenter(centroid);
    setZoom(5);
  };

  if (id != null && id != currentId) {
    selectCountry(mapIdToGeography.current[id], mapProjection.current, mapPath.current);
  }

  function handleMoveEnd(position) {
    setZoom(position.zoom);
    setCenter(position.coordinates);
  }

  const handleClick = (geography, projection, path) => () => {
    selectCountry(geography, projection, path);

    onSelectCountry(geography.id);
  };

  return (
    <>
      <ComposableMap>
        <ZoomableGroup center={center} zoom={zoom} maxZoom={8} minZoom={2} onMoveEnd={handleMoveEnd}>
          <Graticule stroke={colors.graticule} strokeWidth={0.4} />
          <Geographies geography={mapTopoData}>
            {({ geographies, projection, path }) => {
              if (mapIdToGeography.current == null) {
                //genera un objeto que mapea el id con el rsmKey de un pais, ya que sólo el Map conoce el rsmKey y el Indicators conoce el id del pais.
                var t2 = {};
                for (var i = 0; i < geographies.length; i++) {
                  if (geographies[i].id) t2[new String(geographies[i].id)] = geographies[i];
                }
                mapIdToGeography.current = t2;
              }
              // almacena referencias necesarias para hacer el zoom
              mapProjection.current = projection;
              mapPath.current = path;

              return geographies.map((geography) => (
                <Geography
                  key={geography.rsmKey}
                  geography={geography}
                  style={{
                    default: {
                      fill:
                        geography.rsmKey == currentRsmKey
                          ? colors.countryActual
                          : countriesIds.current && countriesIds.current.has(geography.id)
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
                  onClick={handleClick(geography, projection, path)}
                />
              ));
            }}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};
