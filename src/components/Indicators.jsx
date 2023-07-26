import { useState } from "react";

import { Dropdown, RadioButtonGroup, RadioButton } from "@carbon/react";

import options from "../helpers/options";

export const Indicators = ({ countries, onSelectCountry, id }) => {
  const [currentCountry, setCurrentCountry] = useState(null);

  //si se cambia el elemento en el mapa y es diferente del elemento actual, se actualiza el elemento actual.
  if (id != null && (currentCountry == null || (currentCountry != null && id != currentCountry.id))) {
    setCurrentCountry(countries.find((country) => id == country.id));
  }

  return (
    <div className="panel">
      <p className="textSubheading">Panel de indicadores</p>
      <Dropdown
        id="selectCountry"
        label="Seleccione una opción"
        titleText="País"
        items={countries}
        itemToString={(item) => (item ? item.name : "")}
        onChange={({ selectedItem }) => {
          //se cambia el elemento actual.
          setCurrentCountry(selectedItem);
          //se lanza del evento de cambio de país.
          onSelectCountry(selectedItem);
        }}
        selectedItem={currentCountry}
      />
      <Dropdown id="selectScope" label="Seleccione una opción" titleText="Ámbito geográfico" items={options} itemToString={(item) => (item ? item.text : "")} />
      <Dropdown
        id="selectOrganization"
        label="Seleccione una opción"
        titleText="Organización impulsora"
        items={options}
        itemToString={(item) => (item ? item.text : "")}
      />
      <RadioButtonGroup name="vigente" legendText="Vigente" valueSelected="todos">
        <RadioButton id="radio-1" labelText="Si" value="si" />
        <RadioButton id="radio-2" labelText="No" value="no" />
        <RadioButton id="radio-3" labelText="Todos" value="todos" />
      </RadioButtonGroup>
    </div>
  );
};
