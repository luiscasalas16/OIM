import { useState, useRef } from "react";

import { ComposableMap, Geographies, Geography, ZoomableGroup, Graticule } from "react-simple-maps";
import ReactTooltip from "react-tooltip";

import colors from "../helpers/colors";
import mapData from "../maps/countries-50m.json";

export const Map = ({ countries, onSelectCountry, id }) => {
  const countriesIds = useRef(null);

  const mapIdToGeography = useRef(null);
  const mapProjection = useRef(null);
  const mapPath = useRef(null);

  const [currentCountryId, setCurrentCountryId] = useState(id);
  const [currentCountryRsmKey, setCurrentCountryRsmKey] = useState("");

  const [mapZoom, setMapZoom] = useState(2.5);
  const [mapCenter, setMapCenter] = useState([-95, 35]);

  const [tooltip, setTooltip] = useState("");

  if (countries.length > 0 && countriesIds.current == null) {
    //genera un conjunto que contiene el id de los paises disponibles.
    var t1 = new Set();
    for (var i = 0; i < countries.length; i++) {
      if (countries[i].id) t1.add(countries[i].id);
    }
    countriesIds.current = t1;
  }

  const selectCountry = (geography, projection, path) => {
    setCurrentCountryId(geography.id);
    setCurrentCountryRsmKey(geography.rsmKey);

    // realiza el zoom del país en el mapa.
    const centroid = projection.invert(path.centroid(geography));
    setMapCenter(centroid);
    setMapZoom(5);
  };

  //si se cambia el elemento en los indicadores y es diferente del elemento actual, se actualiza el elemento actual.
  if (id != null && id != currentCountryId) {
    selectCountry(mapIdToGeography.current[id], mapProjection.current, mapPath.current);
  }

  function handleMoveEnd(position) {
    setMapZoom(position.zoom);
    setMapCenter(position.coordinates);
  }

  const handleClick = (geography, projection, path) => () => {
    //evita funcionalidad de países deshabilitados.
    if (!countriesIds.current || !countriesIds.current.has(geography.id)) return;
    //se cambia el elemento actual.
    selectCountry(geography, projection, path);
    //se lanza del evento de cambio de país.
    onSelectCountry(geography.id);
  };

  return (
    <>
      <div data-tip="">
        <ComposableMap>
          <ZoomableGroup center={mapCenter} zoom={mapZoom} maxZoom={8} minZoom={2} onMoveEnd={handleMoveEnd}>
            {/* <Graticule stroke={colors.graticule} strokeWidth={0.4} /> */}
            <Geographies geography={mapData}>
              {({ geographies, projection, path }) => {
                if (mapIdToGeography.current == null) {
                  //genera un objeto que mapea el id con el rsmKey de un pais, ya que sólo el Map conoce el rsmKey y el Indicators conoce el id del pais.
                  var t2 = {};
                  for (var i = 0; i < geographies.length; i++) {
                    if (geographies[i].id) t2[new String(geographies[i].id)] = geographies[i];
                  }
                  mapIdToGeography.current = t2;
                }
                // almacena referencias necesarias para hacer el zoom.
                mapProjection.current = projection;
                mapPath.current = path;

                return geographies.map((geography) => (
                  <Geography
                    key={geography.rsmKey}
                    geography={geography}
                    style={{
                      default: {
                        fill:
                          geography.rsmKey == currentCountryRsmKey
                            ? colors.countryActual
                            : //evita funcionalidad de países deshabilitados.
                            countriesIds.current && countriesIds.current.has(geography.id)
                            ? colors.countryFillEnable
                            : colors.countryFillDisable,
                      },
                      hover: {
                        fill:
                          //evita funcionalidad de países deshabilitados.
                          countriesIds.current && countriesIds.current.has(geography.id) ? colors.countryHover : colors.countryFillDisable,
                      },
                      pressed: {
                        fill: colors.countryPress,
                      },
                    }}
                    stroke={colors.line}
                    strokeWidth={0.2}
                    onClick={handleClick(geography, projection, path)}
                    onMouseEnter={() => {
                      //evita funcionalidad de países deshabilitados.
                      if (countriesIds.current && countriesIds.current.has(geography.id)) {
                        //muestra el tooltip sobre el país en el mapa.
                        setTooltip(geography.properties.name);
                      } else {
                        //oculta el tooltip.
                        setTooltip("");
                      }
                    }}
                    onMouseLeave={() => {
                      //oculta el tooltip.
                      setTooltip("");
                    }}
                  />
                ));
              }}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <ReactTooltip>{tooltip}</ReactTooltip>
    </>
  );
};
