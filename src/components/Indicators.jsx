import { useState } from "react";
import { Dropdown, RadioButtonGroup, RadioButton } from "@carbon/react";

export const Indicators = ({ countries, onCountrySelect, id }) => {
  const [currentItem, setCurrentItem] = useState(null);

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

  if (id != null && (currentItem == null || (currentItem != null && id != currentItem.id))) {
    var country = countries.find((country) => id == country.id);

    setCurrentItem(country);
  }

  return (
    <>
      <p className="textCuerpoTextoGrande">Panel de indicadores</p>
      <Dropdown
        id="selectCountry"
        label="Seleccione una opción"
        titleText="País"
        items={countries}
        itemToString={(item) => (item ? item.name : "")}
        onChange={({ selectedItem }) => {
          setCurrentItem(selectedItem);
          onCountrySelect(selectedItem);
        }}
        selectedItem={currentItem}
      />
      <Dropdown id="selectScope" label="Seleccione una opción" titleText="Ámbito geográfico" items={items} itemToString={(item) => (item ? item.text : "")} />
      <Dropdown
        id="selectOrganization"
        label="Seleccione una opción"
        titleText="Organización impulsora"
        items={items}
        itemToString={(item) => (item ? item.text : "")}
      />
      <RadioButtonGroup name="vigente" legendText="Vigente" valueSelected="todos">
        <RadioButton id="radio-1" labelText="Si" value="si" />
        <RadioButton id="radio-2" labelText="No" value="no" />
        <RadioButton id="radio-3" labelText="Todos" value="todos" />
      </RadioButtonGroup>
    </>
  );
};
