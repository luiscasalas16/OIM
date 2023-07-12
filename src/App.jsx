import "./App.scss";
import { Grid, Column, Dropdown, RadioButtonGroup, RadioButton, Button } from "@carbon/react";
import { Download } from "@carbon/react/icons";

function App() {
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
        mapa
      </Column>
      <Column lg={4} md={8} sm={4}>
        <p className="textCuerpoTextoGrande spacing-06">Costa Rica</p>
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
