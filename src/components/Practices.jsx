import { Grid, Column, Button } from "@carbon/react";
import { Download } from "@carbon/react/icons";

export const Practices = ({ name, population, capital }) => {
  return (
    <div className="panel">
      <p className="textCuerpoTextoGrande spacing-06">{name ?? "N/A"}</p>
      <p className="textCuerpoTextoPequeño spacing-05">
        Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="textCuerpoTextoPequeño spacing-07">
        <strong>Población:</strong> {population?.toLocaleString() ?? "N/A"}
        <br />
        <strong>Capital:</strong> {capital ?? "N/A"}
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
    </div>
  );
};
